import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Link } from "react-router";
import Logo from '../../public/image/Logo.png'
import {FaBars} from "react-icons/fa";
import { MdEdit,MdDelete } from "react-icons/md";



const url = "http://localhost:4500/"



function BlogPage() {
    const navigate = useNavigate();
    const [active, setActive] = useState("blog")
    const[menuOpen,setMenuOpen]=useState(false)
    const [news, setNews] = useState(null)
    const [select,setSelect] = useState(null)
    const [show,setShow] = useState(null)
    const [comdata, setComdata] = useState(null)
    const [showall,setShowall] = useState(null)
    const [comshow,setComshow] = useState(null)
    const [editid, setEditid] = useState(null)

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
      getnews()
      getarticle()
      commentdisplay()
    },[])

    function getnews(){
      axios.get(url+"getmovienewsdata", {})
        .then(res => {
          if(res.status==200){
              setNews(res.data)
          }})
        .catch(e => {
          console.log(e.response.data)
        }) 
    }

    function getarticle(){
      axios.get(url+"getmoviearticledata", {})
        .then(res => {
          if(res.status==200){
              setShow(res.data)
          }})
        .catch(e => {
          console.log(e.response.data)
        }) 
    }

    function commentdisplay(){
      axios.post(url+"commentdata", {type:"show",})
        .then(res => {
          if(res.status==200){
            setShowall(res.data)
          }})
        .catch(e => {
          console.log(e)
      }) 
    }

    function handlecomment(e) {
      e.preventDefault();
      if (editid) {
        console.log(editid)
        console.log(comdata)
        axios.post(url + "commentdata", { type: "update", id: editid, com: comdata })
          .then((res) => {
            if (res.status === 200) {
              setComdata("")
              setEditid(null)
              commentdisplay()
            }
          })
          .catch((e) => {
            console.log(e);
          });
      } 
      else {
        axios.post(url + "commentdata", { type: "create", com: comdata })
          .then((res) => {
            if (res.status === 200) {
              setComdata("")
              commentdisplay()
            }
          })
          .catch((e) => {
            console.log(e)
          });
      }
    }

    
    function commentdelete(val){
      axios.post(url+"commentdata", {type:"delete",id:val})
        .then(res => {
          if(res.status==200){
            setComshow(res.data)
            commentdisplay()
          }})
        .catch(e => {
          console.log(e)
      }) 
    }
    function commentupdate(id, comment) {
      setComdata(comment)
      setEditid(id)
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
                <li className='nav-list'><button 
                style={{color : `${active === "blog" ? "#E20606" : "white"}`,
                textDecoration : `${active === "blog" ? "underline" : "none"}`,
                fontSize : `${active === "blog" ? "18px" : null}`,
                textUnderlineOffset : `${active === "blog" ? "8px" : null}`}} 
                onClick={() => navigate('/blog')} className='nav-btn'>Blog</button></li> 
              </ul>
              <button onClick={handleLogout} className='header-logout-btn'>Logout</button>
              <button className='header-menu-btn' onClick={()=>setMenuOpen(!menuOpen)} ><FaBars /></button>
            </nav>
            <div>
            {menuOpen && <ul className="mobile-nav-item">
                <li className='nav-list'><button onClick={() => navigate('/home')} className='nav-btn'>Home</button></li>
                <li className='nav-list'><button onClick={() => navigate('/popular')} className='nav-btn'>Popular</button></li>
                {/* <li className='nav-list'><button onClick={() => navigate('/categories')} className='nav-btn'>Categories</button></li> */}
                <li className='nav-list'><button 
                style={{color : `${active === "blog" ? "#E20606" : "white"}`,
                textDecoration : `${active === "blog" ? "underline" : "none"}`,
                fontSize : `${active === "blog" ? "18px" : null}`,
                textUnderlineOffset : `${active === "home" ? "8px" : null}`}} 
                onClick={() => navigate('/blog')} className='nav-btn'>Blog</button></li> 
                <li className='nav-list'><button onClick={handleLogout} className='nav-btn'>Logout</button></li>
              </ul> } 
            </div>
          </header>
          {select === null ? (
            <div>
              <div className="latest-news">
                <h2 className='blog-head' style={{fontSize:"28px",fontWeight:500}}>Latest Anime News</h2>
                <div className="news-container">
                    {news?.map((item) => (
                    <div key={item.id} className="news-card">
                        <img src={item.img} alt={item.title} className="news-img" />
                        <div className="news-content">
                            <p className="content-date"><small>{item.date}</small></p>
                            <h3 className='content-head'>{item.title}</h3>
                            <p className='content-p'><small>{item.description}</small></p>
                        </div>
                    </div>
                    ))}
                </div>
              </div>
              <div className="more-btn">
                <h4  style={{fontWeight:500}}>See More...</h4>
              </div>
              <div className="article" onClick={() => {setSelect(getarticle)}}>
                <h2 className='article-header' style={{fontSize:"28px",fontWeight:500}}>Anime Articles</h2>
                <div className="article-container">
                    <div  className="article-card">
                        <img src="../../public/banner/artone.jpeg" className="article-img" />
                        <div className="article-content">
                            <h3 className='article-head'>Top 10 Anime with the Best Storylines</h3>
                            <p className='article-p'>Anime storytelling has evolved over the years, delivering some of the most unforgettable plots filled with depth, twists, and emotional weight. Here are 10 anime with the best storylines that captivate audiences worldwide</p>
                            <p className="article-date"><small>March 04,2025</small></p>
                        </div>
                    </div>
                </div>
              </div>
              <div className="more-btn">
                <h4  style={{fontWeight:500}}>See More...</h4>
              </div>
            </div>
          ) : (
            <div className="artpage">
              <h1 className='art-header'>Top 10 Anime with the Best Storylines</h1>
              <p className="art-des">
                Anime storytelling has evolved over the years, delivering some of the most unforgettable plots filled with depth, twists, and emotional weight. Here are 10 anime with the best storylines that captivate audiences worldwide.
              </p>
              <hr style={{width:"97%",marginBottom:"40px"}}/>
              {show?.map((item) => (
                <div key={item.id} className="art-card">
                  <h1 className='art-head'>{item.title}</h1>
                  <img src={item.img} alt={item.title} className="art-img"/>
                  <div className="art-content">
                      <p className='art-p'>{item.description}</p>
                      <p className='art-rate'> <strong>IMDB Rating :</strong>  {item.rating}</p>
                      <p className='art-sea'><strong>Season :</strong>  {item.seasons}</p>
                      <p className='art-ep'><strong>Episodes :</strong> {item.episodes}</p>
                  </div>
                </div>
              ))}
              <div className="comment-section">
                <form className='comment-form' onSubmit={handlecomment}>
                  <label className='coment-header'>Comment :</label> 
                  {/* <input type="text" name='comname' placeholder='Name'/> */}
                  <input type="text" name="com" id="com" value={comdata} onChange={(e) => {setComdata(e.target.value)}} placeholder='Write a comment'/>
                  <input type="submit" className='comment-btn'  value={editid === null ? "Submit" : "Update" } />
                </form>
                <div className="comment-show">
                  {showall?.map((item) => (
                    <div className='com-div' key={item.id}>User {item.id} : {item.comment} <p> <button onClick={() => {commentupdate(item.id,item.comment)}}><MdEdit /></button> <button onClick={() => {commentdelete(item.id)}}><MdDelete /></button></p></div>
                  ))}
                </div>
              </div>
              <div className='art-back-btn'>
                <button onClick={() => {setSelect(null)}}>Back</button>
              </div>
            </div>
          )}
          <footer className="footer" >
            <div className="footer-container">
              <div className="footer-section links">
                <h3>Quick Links</h3>
                <ul>
                  <li><Link to="/home" className='link'>Home</Link></li>
                  <li><Link to="/popular" className='link'>Popular</Link></li>
                  <li><Link to="/home" className='link'>Categories</Link></li>
                  <li><Link to="/home" className='link'>Blog</Link></li>
                  <li><Link to="/home" className='link'>Contact</Link></li> 
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
  
  export default BlogPage