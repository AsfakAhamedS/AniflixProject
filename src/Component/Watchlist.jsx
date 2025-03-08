import { useState,useEffect,useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Link } from "react-router";
import Logo from '../../public/image/Logo.png'
import { FaBars  } from "react-icons/fa";
import {FaPlay,FaStar } from "react-icons/fa";
import { BiBookmark } from "react-icons/bi";
import { AppContext } from './AppContext';



const url = "http://localhost:4500/"

function Watchlist() {
    const navigate = useNavigate();
    const [active, setActive] = useState("watch")
    const[menuopen,setMenuopen]=useState(false)
    const {message} = useContext(AppContext)
    const [watchlist,setWatchlist] = useState(null)
    

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
        getwatchlist(message)
    },[message])
    
    function getwatchlist(val){
        console.log(val)
        axios.post(url+"watchlistdata", {id:val})
          .then(res => {
            if(res.status==200){
                setWatchlist(res.data)
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
                <li className='nav-list'><button onClick={() => navigate('/popular')} className='nav-btn'>Popular</button></li>
                {/* <li className='nav-list'><button onClick={() => navigate('/categories')} className='nav-btn'>Categories</button></li> */}
                <li className='nav-list'><button onClick={() => navigate('/blog')} className='nav-btn'>Blog</button></li> 
                <li className='nav-list'><button 
                style={{color : `${active === "watch" ? "#E20606" : "white"}`,
                textDecoration : `${active === "watch" ? "underline" : "none"}`,
                fontSize : `${active === "watch" ? "18px" : null}`,
                textUnderlineOffset : `${active === "watch" ? "8px" : null}`}} 
                 onClick={() => navigate('/watchlist')} className='nav-btn'><BiBookmark style={{width:"22px",height:"22px",position:"absolute",top:"22px"}}/></button></li> 
              </ul>
              <button onClick={handleLogout} className='header-logout-btn'>Logout</button>
              <button className='header-menu-btn' onClick={()=>setMenuopen(!menuopen)} ><FaBars /></button>
            </nav>
            <div>
            {menuopen && <ul className="mobile-nav-item">
                <li className='nav-list'><button 
                style={{color : `${active === "watch" ? "#E20606" : "white"}`,
                textDecoration : `${active === "watch" ? "underline" : "none"}`,
                fontSize : `${active === "watch" ? "18px" : null}`,
                textUnderlineOffset : `${active === "watch" ? "8px" : null}`}} 
                onClick={() => navigate('/home')} className='nav-btn'>Home</button></li>
                <li className='nav-list'><button onClick={() => navigate('/popular')} className='nav-btn'>Popular</button></li>
                {/* <li className='nav-list'><button onClick={() => navigate('/categories')} className='nav-btn'>Categories</button></li>*/}
                <li className='nav-list'><button onClick={() => navigate('/blog')} className='nav-btn'>Blog</button></li> 
                <li className='nav-list'><button onClick={handleLogout} className='nav-btn'>Logout</button></li>
              </ul> } 
            </div>
          </header>
          <div className="watchlist-container">
            <h1>Anime Id:</h1>
            <h1>{message}</h1>
            {watchlist?.map((item) => (
                <div className="anime-card" key={item.id}><img src={item.image} alt={item.title}/>
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
                            <div style={{ display: "flex", gap: "10px"}}>
                                <FaPlay className='home-icon' style={{fontSize: "11px", color: "#8d8d8d"}}/>
                                <button className='home-icon' onClick={() => setMessage(item.id)} style={{background:"none",border:"none"}}>
                                    <BiBookmark  style={{fontSize: "15px", color: "#8d8d8d"}}/>
                                </button> 
                            </div>
                        </div>
                    </div>
                </div>
            ))}
          </div>
          <footer className="footer" >
            <div className="footer-container">
              <div className="footer-section links">
                <h3>Quick Links</h3>
                <ul>
                  <li><Link to="/watch">Home</Link></li>
                  <li><Link to="/popular">Popular</Link></li>
                  <li><Link to="/watch">Categories</Link></li>
                  <li><Link to="/watch">Blog</Link></li>
                  <li><Link to="/watch">Contact</Link></li> 
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
  
  export default Watchlist