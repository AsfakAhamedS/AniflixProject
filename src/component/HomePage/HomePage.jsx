import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './homestyle.css';
import Footer from "../Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; 

function HomePage() {
  const navigate = useNavigate();
  const[select,setSelect] = useState(null)

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  const animeData = [
    {
      "id": 1,
      "title": "One Piece",
      "image": "../../public/card/cardone.webp",
      "subtitle": "Sub | Dub",
      "description": "A hunter rises from the weakest to the strongest, uncovering hidden truths about the world."
    },
    {
      "id": 2,
      "title": "Naruto",
      "image": "../../public/card/cardtwo.jpg",
      "subtitle": "Sub | Dub",
      "description": "A dystopian future where rebellion and survival collide in a high-tech world."
    },
    {
      "id": 3,
      "title": "Attack on Titan",
      "image": "../../public/card/cardthree.jpg",
      "subtitle": "Sub | Dub",
      "description": "An unpredictable journey filled with mystery and supernatural elements."
    },
    {
      "id": 4,
      "title": "Dragon Ball",
      "image": "../../public/card/cardfour.jpg",
      "subtitle": "Sub | Dub",
      "description": "Follow Goku and his friends on an epic adventure to collect the Dragon Balls."
    },
    {
      "id": 5,
      "title": "Dr. STONE",
      "image": "../../public/card/cardfive.jpg",
      "subtitle": "Sub | Dub",
      "description": "After humanity turns to stone, one genius boy sets out to rebuild civilization with science."
    },
    {
      "id": 6,
      "title": "Even Given",
      "image": "../../public/card/cardsix.jpg",
      "subtitle": "Subtitled",
      "description": "A heartfelt story about music, love, and self-discovery."
    },
    {
      "id": 7,
      "title": "Attack on Titan",
      "image": "../../public/card/cardseven.jpg",
      "subtitle": "Sub | Dub",
      "description": "Humanity fights for survival against monstrous Titans in a world filled with secrets."
    },
    {
      "id": 8,
      "title": "One Piece",
      "image": "../../public/card/cardeight.jpg",
      "subtitle": "Sub | Dub",
      "description": "Join Luffy and his crew on a legendary adventure to find the One Piece."
    },
    {
      "id": 9,
      "title": "Naruto",
      "image": "../../public/card/cardnine.jpg",
      "subtitle": "Sub | Dub",
      "description": "A young ninja dreams of becoming the Hokage while facing powerful enemies."
    },
    {
      "id": 10,
      "title": "Bleach",
      "image": "../../public/card/cardten.jpg",
      "subtitle": "Sub | Dub",
      "description": "A high school student gains the powers of a Soul Reaper and battles evil spirits."
    },
    {
      "id": 11,
      "title": "Bleach",
      "image": "../../public/card/cardonecol.jpg",
      "subtitle": "Sub | Dub",
      "description": "A high school student gains the powers of a Soul Reaper and battles evil spirits."
    },
    {
      "id": 12,
      "title": "Bleach",
      "image": "../../public/card/cardtwocol.jpg",
      "subtitle": "Sub | Dub",
      "description": "A high school student gains the powers of a Soul Reaper and battles evil spirits."
    }
    ,
    {
      "id": 13,
      "title": "Possibly",
      "image": "../../public/card/cardthreecol.jpg",
      "subtitle": "Sub | Dub",
      "description": "An unpredictable journey filled with mystery and supernatural elements."
    },
    {
      "id": 14,
      "title": "Dragon Ball",
      "image": "../../public/card/cardfourcol.jpg",
      "subtitle": "Sub | Dub",
      "description": "Follow Goku and his friends on an epic adventure to collect the Dragon Balls."
    },
    {
      "id": 15,
      "title": "Dr. STONE",
      "image": "../../public/card/cardfivecol.jpg",
      "subtitle": "Sub | Dub",
      "description": "After humanity turns to stone, one genius boy sets out to rebuild civilization with science."
    },
    {
      "id": 16,
      "title": "Even Given",
      "image": "../../public/card/cardsixcol.jpg",
      "subtitle": "Subtitled",
      "description": "A heartfelt story about music, love, and self-discovery."
    },
    {
      "id": 17,
      "title": "Attack on Titan",
      "image": "../../public/card/cardsevencol.jpg",
      "subtitle": "Sub | Dub",
      "description": "Humanity fights for survival against monstrous Titans in a world filled with secrets."
    },
    {
      "id": 18,
      "title": "One Piece",
      "image": "../../public/card/cardeigthcol.jpg",
      "subtitle": "Sub | Dub",
      "description": "Join Luffy and his crew on a legendary adventure to find the One Piece."
    },
    {
      "id": 19,
      "title": "Naruto",
      "image": "../../public/card/cardninecol.webp",
      "subtitle": "Sub | Dub",
      "description": "A young ninja dreams of becoming the Hokage while facing powerful enemies."
    },
    {
      "id": 20,
      "title": "Bleach",
      "image": "../../public/card/cardtencol.jpg",
      "subtitle": "Sub | Dub",
      "description": "A high school student gains the powers of a Soul Reaper and battles evil spirits."
    },
    {
      "id": 21,
      "title": "Bleach",
      "image": "../../public/image/onepiece.jpeg",
      "subtitle": "Sub | Dub",
      "description": "A high school student gains the powers of a Soul Reaper and battles evil spirits."
    },
    {
      "id": 22,
      "title": "Bleach",
      "image": "../../public/card/cardthree.jpg",
      "subtitle": "Sub | Dub",
      "description": "A high school student gains the powers of a Soul Reaper and battles evil spirits."
    },
    {
      "id": 23,
      "title": "Bleach",
      "image": "../../public/card/cardthreecol.jpg",
      "subtitle": "Sub | Dub",
      "description": "A high school student gains the powers of a Soul Reaper and battles evil spirits."
    },
    {
      "id": 24,
      "title": "Bleach",
      "image": "../../public/card/cardfour.jpg",
      "subtitle": "Sub | Dub",
      "description": "A high school student gains the powers of a Soul Reaper and battles evil spirits."
    }
  ]
  return (
    <>
      <header>
        <nav className='navbar'>
          <div className='nav-menu'>
            <img className='navlogo' src="/image/logotwo.png" alt="Logo" />
            <ul className='nav-item'>
              <li className='nav-list'><button onClick={() => navigate('/home')} className='nav-btn'>Home</button></li>
              <li className='nav-list'><button onClick={() => navigate('/popular')} className='nav-btn'>Popular</button></li>
              <li className='nav-list'><button onClick={() => navigate('/categories')} className='nav-btn'>Categories</button></li>
              <li className='nav-list'><button onClick={() => navigate('/blog')} className='nav-btn'>Blog</button></li>
            </ul>
          </div>
          <button onClick={handleLogout} className='logout-btn'>Logout</button>
        </nav>
      </header>

      <div className="homebody">
        <div style={{display: `${select == null ? "block" : "none"}`}} className="homecontainer">
          <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="/image/slideranimeone.jpg" className="d-block w-100 carousel-img" alt="Slide 1" />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className='carsliderh'>One Piece</h5>
                  <p className='carsliderp'>Join Monkey D. Luffy and his pirate crew on a thrilling adventure to find the legendary One Piece and become the Pirate King!</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="/image/slideranimetwo.jpg" className="d-block w-100 carousel-img" alt="Slide 2" />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className='carsliderh'>Naruto</h5>
                  <p className='carsliderp'>Follow Naruto Uzumaki, a young ninja with dreams of becoming the Hokage, as he overcomes hardships and discovers the true meaning of friendship.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="/image/slideranimethree.jpg" className="d-block w-100 carousel-img" alt="Slide 3" />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className='carsliderh'>Attack on Titan</h5>
                  <p className='carsliderp'>Humanity fights for survival behind giant walls as monstrous Titans threaten to wipe them out. Can Eren and the Survey Corps uncover the truth?</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="/image/slideranimefour.jpg" className="d-block w-100 carousel-img" alt="Slide 4" />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className='carsliderh'>Death Note</h5>
                  <p className='carsliderp'>When Light Yagami discovers a mysterious notebook that lets him kill anyone by writing their name, a deadly game of cat and mouse begins.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="/image/slideranimefive.jpg" className="d-block w-100 carousel-img" alt="Slide 5" />
                <div className="carousel-caption d-none d-md-block">
                  <h5 className='carsliderh'>Demon Slayer</h5>
                  <p className='carsliderp'>Tanjiro Kamado joins the Demon Slayer Corps to avenge his family and cure his demon-turned sister, Nezuko, in a breathtaking battle against evil.</p>
                </div>
              </div>
            </div>

            {/* Slider Buttons */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className='popularcontainer'>
            <div className="anime-list" style={{display: `${select == null ? "grid" : "block"}`, padding:`${select == null ? "0px 50px" : "0px"}`}}>
              {select == null ?
              (animeData.map((anime,index) => (
                <div style={{display: `${select == null ? "block" : "none"}`}} className="anime-card" key={anime.id} onClick={() => setSelect(animeData[index])}>
                  <img src={anime.image} alt={anime.title} />
                  <div className="anime-description">
                      <p>{anime.description}</p>
                  </div>
                  <h3>{anime.title}</h3>
                  <p>{anime.subtitle}</p>
                </div>
              ))) : (
                <div className="containertwo">
                   <div className="containercenter">
                      {/* <p>
                        <strong>Release Year:</strong><img src={select.image} alt={select.title} />
                      </p> */}
                      <h2>{select.title}</h2>
                      <p>
                        <strong>Episodes:</strong> {select.subtitle}
                      </p>
                      <p className="des">
                        <strong>Description:</strong> {select.description}
                      </p>
                      <div className="newpagebtn">
                        <button onClick={() => setSelect(null)}>Back</button>
                      </div>
                   </div>
                </div>
              )}
              
            </div>
          </div>
          <Footer style={{display: `${select == null ? "none" : "none"}`}}></Footer>
      </div>
    </>
  );
}

export default HomePage;
