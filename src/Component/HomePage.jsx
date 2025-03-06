import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Link } from "react-router";
import Carousel from './Carousel/Carousel';
import Logo from '../../public/image/Logo.png'
import {FaStar, FaPlay, FaPlus, FaShareAlt, FaEllipsisV, FaBars  } from "react-icons/fa";



const url = "http://localhost:4500/"

function HomePage() {
    const navigate = useNavigate();
    const [active, setActive] = useState("home")
    const[menuopen,setMenuopen]=useState(false)
    const [selected,setSelected] = useState(null)
    const [homedisplaydata,setHomedisplaydata] = useState(null)

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
              console.log(homedisplaydata)
          }})
        .catch(e => {
          console.log(e.response.data)
        }) 
    }

    function getonemovie(uniqueid){
      axios.post(url+"getonemoviedata", {id:uniqueid})
        .then(res => {
          if(res.status==200){
              setSelected(res.data)
          }})
        .catch(e => {
          console.log(e.response.data)
        }) 
    }
    console.log(selected)
    return (
      <>
        <div className="body">
          <header>
            <nav className="navbar">
              <div className="nav-menu">
                <img src={Logo} alt="logo" className="nav-logo"/>
              </div>
              <ul className="nav-item">
                <li className='nav-list'><button 
                style={{color : `${active === "home" ? "#E20606" : "white"}`,
                textDecoration : `${active === "home" ? "underline" : "none"}`,
                fontSize : `${active === "home" ? "18px" : null}`,
                textUnderlineOffset : `${active === "home" ? "8px" : null}`}} 
                onClick={() => navigate('/home')} className='nav-btn'>Home</button></li>
                <li className='nav-list'><button onClick={() => navigate('/popular')} className='nav-btn'>Popular</button></li>
                {/* <li className='nav-list'><button onClick={() => navigate('/categories')} className='nav-btn'>Categories</button></li> */}
                <li className='nav-list'><button onClick={() => navigate('/blog')} className='nav-btn'>Blog</button></li> 
              </ul>
              <button onClick={handleLogout} className='header-logout-btn'>Logout</button>
              <button className='header-menu-btn' onClick={()=>setMenuopen(!menuopen)} ><FaBars /></button>
            </nav>
            <div>
            {menuopen && <ul className="mobile-nav-item">
                <li className='nav-list'><button 
                style={{color : `${active === "home" ? "#E20606" : "white"}`,
                textDecoration : `${active === "home" ? "underline" : "none"}`,
                fontSize : `${active === "home" ? "18px" : null}`,
                textUnderlineOffset : `${active === "home" ? "8px" : null}`}} 
                onClick={() => navigate('/home')} className='nav-btn'>Home</button></li>
                <li className='nav-list'><button onClick={() => navigate('/popular')} className='nav-btn'>Popular</button></li>
                {/* <li className='nav-list'><button onClick={() => navigate('/categories')} className='nav-btn'>Categories</button></li>*/}
                <li className='nav-list'><button onClick={() => navigate('/blog')} className='nav-btn'>Blog</button></li> 
                <li className='nav-list'><button onClick={handleLogout} className='nav-btn'>Logout</button></li>
              </ul> } 
            </div>
          </header>
          {selected === null ? (
            <div>
              <Carousel/>
              <div className="home-container">
                <div className="anime-list">  
                  {homedisplaydata?.map((item) => (
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
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div>
              {scroll}
              <div className="display-anime">
                <img src="../../public/slider/slideranimeone.jpg" alt="" />
              </div>
              <div className='display-content'>
                <h1 style={{fontSize:"50px"}}>{selected[0].title}</h1>
                <p className='small-txt' style={{color:"#E20606"}}> <small>{selected[0].subtitle} | {selected[0].details.genres}</small> </p>
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
                  <p>{selected[0].details.descriptionbrift}</p>
                </div>
                <div className="audio">
                  <p> <strong style={{color:"#a43131"}}>Audio :</strong> {selected[0].details.audio}</p>
                </div>
                <div className="sub">
                  <p><strong style={{color:"#a43131"}}>Subtitle :</strong> {selected[0].details.subtitles}</p>
                </div>
                <div className="duration">
                  <p><strong style={{color:"#a43131"}}>Duration :</strong> {selected[0].details.duration}</p>
                </div>
                <div className="genre">
                  <p><strong style={{color:"#a43131"}}>Genres :</strong> {selected[0].details.genres}</p>
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
  
  export default HomePage