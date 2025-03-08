import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Link } from "react-router";
import Logo from '../../public/image/Logo.png'
import {FaStar, FaPlay, FaPlus, FaShareAlt, FaEllipsisV, FaBars  } from "react-icons/fa";
import { BiBookmark } from "react-icons/bi";


const url = "http://localhost:4500/"

function PopularPage() {
    const navigate = useNavigate();
    const [active, setActive] = useState("popular")
    const[menuOpen,setMenuOpen]=useState(false)
    const [selected,setSelected] = useState(null)
    const [filter,setFilter] = useState(null)
    const [show,setShow] = useState(false)
    const [homedisplaydata,setHomedisplaydata] = useState(null)
    const [filteranime, setFilteranime] = useState(null)

    useEffect(() => {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      if (!isLoggedIn) {
        navigate('/');
      }
    }, [navigate]);
    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn')
        navigate('/')
    }

    useEffect(() => {
        getmovie()
    },[])
  
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [selected]);

    function getmovie(){
      axios.get(url+"getmoviedata", {})
        .then(res => {
          if(res.status==200){
              setHomedisplaydata(res.data)
          }})
        .catch(e => {
          console.log(e.response.data)
          setLoginerror('Invalid username or password')
        }) 
    }

    function getonemovie(uniqueid){
      axios.post(url+"getonemoviedata", {id:uniqueid})
        .then(res => {
          if(res.status==200){
              setSelected(res.data)
              console.log(res.data)
          }})
        .catch(e => {
          console.log(e.response.data)
        }) 
    }

    function filterdata(e){
      if(e !== "all"){
        setFilter(e)
        getfiltermovie(e)
      }else{
        setFilter(null)
        getfiltermovie(filter)
      }
    }
  
    

    function getfiltermovie(val){
      console.log(val)
      axios.post(url+"getfiltermoviedata", {gen:val})
        .then(res => {
          if(res.status==200){
              setFilteranime(res.data)
              console.log(filteranime)
          }})
        .catch(e => {
          console.log(e.response.data)
        }) 
    }

    return (
      <>
        <div className="body">
          <header>
            <nav className="navbar">
                <div className="nav-menu">
                    <img src={Logo} alt="logo" className="nav-logo"/>
                </div>
                <ul className="nav-item">
                    <li className='nav-list'><button onClick={() => navigate('/home')} className='nav-btn'>Home</button></li>
                    <li className='nav-list'><button
                     style={{color : `${active === "popular" ? "#E20606" : "white"}`,
                     textDecoration : `${active === "popular" ? "underline" : "none"}`,
                     fontSize : `${active === "popular" ? "18px" : null}`,
                     textUnderlineOffset : `${active === "popular" ? "8px" : null}`}}
                     onClick={() => navigate('/popular')} className='nav-btn'>Popular</button></li>
                    {/* <li className='nav-list'><button onClick={() => navigate('/categories')} className='nav-btn'>Categories</button></li>*/}
                    <li className='nav-list'><button onClick={() => navigate('/blog')} className='nav-btn'>Blog</button></li> 
                     <li className='nav-list'><button onClick={() => navigate('/watchlist')} className='nav-btn'><BiBookmark style={{width:"22px",height:"22px",position:"absolute",top:"22px"}}/></button></li> 
                </ul>
                <button onClick={handleLogout} className='header-logout-btn'>Logout</button>
                <button className='header-menu-btn' onClick={()=>setMenuOpen(!menuOpen)} ><FaBars /></button>
            </nav>
            <div>
                {menuOpen && <ul className="mobile-nav-item">
                    <li className='nav-list'><button onClick={() => navigate('/home')} className='nav-btn'>Home</button></li>
                    <li className='nav-list'><button
                    style={{color : `${active === "popular" ? "#E20606" : "white"}`,
                    textDecoration : `${active === "popular" ? "underline" : "none"}`,
                    fontSize : `${active === "popular" ? "18px" : null}`,
                    textUnderlineOffset : `${active === "popular" ? "8px" : null}`}}
                     onClick={() => navigate('/popular')} className='nav-btn'>Popular</button></li>
                    {/* <li className='nav-list'><button onClick={() => navigate('/categories')} className='nav-btn'>Categories</button></li>*/}
                    <li className='nav-list'><button onClick={() => navigate('/blog')} className='nav-btn'>Blog</button></li> 
                    <li className='nav-list'><button onClick={handleLogout} className='nav-btn'>Logout</button></li>
                </ul>} 
            </div>
            </header>
          {selected === null ? (
            <div>
                <div className='pop'>
                    <div className="pop-header">
                        <h1 style={{fontSize:"28px",fontWeight:500}}>Most Popular Anime</h1>
                        <div className="filters">
                            <select onChange={(e) => {filterdata(e.target.value)}}>
                                <option value="all">All</option>
                                <option value="action">Action</option>
                                <option value="comedy">Comedy</option>
                                <option value="adventure">Adventure</option>
                            </select>
                        </div>
                    </div>
                    <h4 style={{fontSize:"18px"}}>{filter === null ? "Popular" : (filter === "action" ? "Action" : (filter === "comedy" ? "Comedy" : (filter === "adventure" ? "Adventure" : (filter === "all" ? setFilter() : null))))}</h4>
                </div>
                <div className="home-container">
                    <div className="anime-list">  
                    {filter == null ? (
                        homedisplaydata?.map((item) => (
                            <div className="anime-card" key={item.id} onClick={() => {getonemovie([item.id])}}><img src={item.image} alt={item.title}/>
                            <div className="anime-description">
                                <h3>{item.title}</h3>
                                <h3>{item.rating} <FaStar /></h3>
                                <p style={{textAlign:"left"}}><strong>{item.season} Seasons</strong></p>
                                <p style={{textAlign:"left"}}><strong>{item.episodes} Episodes</strong></p>
                                <p style={{textAlign:"justify"}}> <strong>{item.description}</strong> </p>
                            </div>
                            <div className="anime-content">
                                <h3 style={{fontSize:"12px"}}>{item.title}</h3>
                                <p>{item.gen}</p>
                                <div className='card-foot' style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                                  <p>{item.subtitle}</p>
                                  <div style={{ display: "flex", gap: "10px"}}><FaPlay style={{fontSize: "12px", color: "#8d8d8d"}}/> <BiBookmark  style={{fontSize: "15px", color: "#8d8d8d"}}/></div>
                                </div>
                            </div>
                            </div>
                        ))
                        ) :  (
                            filteranime?.map((item) => (
                                <div className="anime-card" key={item.id} onClick={() => {getonemovie([item.id])}}><img src={item.image} alt={item.title}/>
                                <div className="anime-description">
                                    <h3>{item.title}</h3>
                                    <h3>{item.rating} <FaStar /></h3>
                                    <p style={{textAlign:"left"}}><strong>{item.season} Seasons</strong></p>
                                    <p style={{textAlign:"left"}}><strong>{item.episodes} Episodes</strong></p>
                                    <p style={{textAlign:"justify"}}> <strong>{item.description}</strong> </p>
                                </div>
                                <div className="anime-content">
                                    <h3 style={{fontSize:"12px"}}>{item.title}</h3>
                                    <p>{item.gen}</p>
                                    <div className='card-foot' style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                                      <p>{item.subtitle}</p>
                                      <div style={{ display: "flex", gap: "10px"}}><FaPlay style={{fontSize: "12px", color: "#8d8d8d"}}/><FaPlus style={{fontSize: "12px", color: "#8d8d8d"}}/></div>
                                    </div>
                                </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
          ) : (
            <div>
              <div className="display-anime">
                <img src="../../public/slider/slideranimeone.jpg" alt="" />
              </div>
              <div className='display-content'>
                <h1 style={{fontSize:"50px"}}>{selected[0].title}</h1>
                <p className='small-txt' style={{color:"#E20606"}}> <small>{selected[0]?.subtitle} | {selected[0].details?.genres}</small> </p>
                <div className='star'><FaStar style={{width:"24px",height:"24px"}}/>
                    <FaStar style={{width:"24px",height:"24px"}}/>
                    <FaStar style={{width:"24px",height:"24px"}}/>
                    <FaStar style={{width:"24px",height:"24px"}}/>
                    <FaStar style={{width:"24px",height:"24px"}}/>
                </div>
                <div className="play-btn">
                  <FaPlay style={{marginTop:"5px"}}/>
                  <h4 style={{paddingLeft:"10px"}}>Start Watching S1 E1</h4>
                </div>
                <div className="icon">
                  <FaPlus className="icon-in" style={{width:"24px",height:"24px"}}/>
                  <FaShareAlt className="icon-in" style={{width:"24px",height:"24px"}}/>
                  <FaEllipsisV className="icon-in" style={{width:"24px",height:"24px"}}/>
                </div>
                <div className="des-brift">
                  <p>{selected[0].details?.descriptionbrift}</p>
                </div>
                <div className="audio">
                  <p> <strong style={{color:"#a43131"}}>Audio :</strong> {selected[0].details?.audio}</p>
                </div>
                <div className="sub">
                  <p><strong style={{color:"#a43131"}}>Subtitle :</strong> {selected[0].details?.subtitles}</p>
                </div>
                <div className="duration">
                  <p><strong style={{color:"#a43131"}}>Duration :</strong> {selected[0].details?.duration}</p>
                </div>
                <div className="genre">
                  <p><strong style={{color:"#a43131"}}>Genres :</strong> {selected[0].details?.genres}</p>
                </div>
                <div className='back-btn'>
                  <button onClick={() => {setSelected(null)}}>Back</button>
                </div>
              </div>
            </div>
          )}
          <footer className="footer" >
            <div className="footer-container">
              <div className="footer-section links">
                <h3>Quick Links</h3>
                <ul>
                  <li><Link to="/home">Home</Link></li>
                  <li><Link to="/popular">Popular</Link></li>
                  <li><Link to="/home">Categories</Link></li>
                  <li><Link to="/home">Blog</Link></li>
                  <li><Link to="/home">Contact</Link></li> 
                </ul>  
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2025 Aniflix. All Rights Reserved.</p>
            </div>
          </footer>

        </div>
      </>
    )
  }
  
  export default PopularPage