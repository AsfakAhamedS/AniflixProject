import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './stylepopular.css';
import logo from '../../../public/image/logotwo.png';
import Footer from "../Footer/Footer"


function PopularPage() {
  const navigate = useNavigate();
  const[selected,setSelected] = useState(null)
  console.log(selected)

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
      "gen":"action",
      "image": "../../public/card/cardone.webp",
      "subtitle": "Sub | Dub",
      "description": "A hunter rises from the weakest to the strongest, uncovering hidden truths about the world."
    },
    {
      "id": 2,
      "title": "Naruto",
      "gen":"action",
      "image": "../../public/card/cardtwo.jpg",
      "subtitle": "Sub | Dub",
      "description": "A dystopian future where rebellion and survival collide in a high-tech world."
    },
    {
      "id": 3,
      "title": "Attack on Titan",
      "gen":"action",
      "image": "../../public/card/cardthree.jpg",
      "subtitle": "Sub | Dub",
      "description": "An unpredictable journey filled with mystery and supernatural elements."
    },
    {
      "id": 4,
      "title": "Dragon Ball",
      "gen":"action",
      "image": "../../public/card/cardfour.jpg",
      "subtitle": "Sub | Dub",
      "description": "Follow Goku and his friends on an epic adventure to collect the Dragon Balls."
    },
    {
      "id": 5,
      "title": "Dr. STONE",
      "gen":"action",
      "image": "../../public/card/cardfive.jpg",
      "subtitle": "Sub | Dub",
      "description": "After humanity turns to stone, one genius boy sets out to rebuild civilization with science."
    },
    {
      "id": 6,
      "title": "Even Given",
      "gen":"comedy",
      "image": "../../public/card/cardsix.jpg",
      "subtitle": "Subtitled",
      "description": "A heartfelt story about music, love, and self-discovery."
    },
    {
      "id": 7,
      "title": "Attack on Titan",
      "gen":"comedy",
      "image": "../../public/card/cardseven.jpg",
      "subtitle": "Sub | Dub",
      "description": "Humanity fights for survival against monstrous Titans in a world filled with secrets."
    },
    {
      "id": 8,
      "title": "One Piece",
      "gen":"comedy",
      "image": "../../public/card/cardeight.jpg",
      "subtitle": "Sub | Dub",
      "description": "Join Luffy and his crew on a legendary adventure to find the One Piece."
    },
    {
      "id": 9,
      "title": "Naruto",
      "gen":"comedy",
      "image": "../../public/card/cardnine.jpg",
      "subtitle": "Sub | Dub",
      "description": "A young ninja dreams of becoming the Hokage while facing powerful enemies."
    },
    {
      "id": 10,
      "title": "Bleach",
      "gen":"comedy",
      "image": "../../public/card/cardten.jpg",
      "subtitle": "Sub | Dub",
      "description": "A high school student gains the powers of a Soul Reaper and battles evil spirits."
    },
    {
      "id": 11,
      "title": "Bleach",
      "gen":"adventure",
      "image": "../../public/card/cardonecol.jpg",
      "subtitle": "Sub | Dub",
      "description": "A high school student gains the powers of a Soul Reaper and battles evil spirits."
    },
    {
      "id": 12,
      "title": "Bleach",
      "gen":"adventure",
      "image": "../../public/card/cardtwocol.jpg",
      "subtitle": "Sub | Dub",
      "description": "A high school student gains the powers of a Soul Reaper and battles evil spirits."
    }
    ,
    {
      "id": 13,
      "title": "Possibly",
      "gen":"adventure",
      "image": "../../public/card/cardthreecol.jpg",
      "subtitle": "Sub | Dub",
      "description": "An unpredictable journey filled with mystery and supernatural elements."
    },
    {
      "id": 14,
      "title": "Dragon Ball",
      "gen":"adventure",
      "image": "../../public/card/cardfourcol.jpg",
      "subtitle": "Sub | Dub",
      "description": "Follow Goku and his friends on an epic adventure to collect the Dragon Balls."
    },
    {
      "id": 15,
      "title": "Dr. STONE",
      "gen":"adventure",
      "image": "../../public/card/cardfivecol.jpg",
      "subtitle": "Sub | Dub",
      "description": "After humanity turns to stone, one genius boy sets out to rebuild civilization with science."
    },
    {
      "id": 16,
      "title": "Even Given",
      "gen":"adventure",
      "image": "../../public/card/cardsixcol.jpg",
      "subtitle": "Subtitled",
      "description": "A heartfelt story about music, love, and self-discovery."
    },
    {
      "id": 17,
      "title": "Attack on Titan",
      "gen":"adventure",
      "image": "../../public/card/cardsevencol.jpg",
      "subtitle": "Sub | Dub",
      "description": "Humanity fights for survival against monstrous Titans in a world filled with secrets."
    },
    {
      "id": 18,
      "title": "One Piece",
      "gen":"adventure",
      "image": "../../public/card/cardeigthcol.jpg",
      "subtitle": "Sub | Dub",
      "description": "Join Luffy and his crew on a legendary adventure to find the One Piece."
    },
    {
      "id": 19,
      "title": "Naruto",
      "gen":"adventure",
      "image": "../../public/card/cardninecol.webp",
      "subtitle": "Sub | Dub",
      "description": "A young ninja dreams of becoming the Hokage while facing powerful enemies."
    },
    {
      "id": 20,
      "title": "Bleach",
      "gen":"adventure",
      "image": "../../public/card/cardtencol.jpg",
      "subtitle": "Sub | Dub",
      "description": "A high school student gains the powers of a Soul Reaper and battles evil spirits."
    },
    {
      "id": 21,
      "title": "Bleach",
      "gen":"comedy",
      "image": "../../public/image/onepiece.jpeg",
      "subtitle": "Sub | Dub",
      "description": "A high school student gains the powers of a Soul Reaper and battles evil spirits."
    },
    {
      "id": 22,
      "title": "Bleach",
      "gen":"comedy",
      "image": "../../public/card/cardthree.jpg",
      "subtitle": "Sub | Dub",
      "description": "A high school student gains the powers of a Soul Reaper and battles evil spirits."
    },
    {
      "id": 23,
      "title": "Bleach",
      "gen":"comedy",
      "image": "../../public/card/cardthreecol.jpg",
      "subtitle": "Sub | Dub",
      "description": "A high school student gains the powers of a Soul Reaper and battles evil spirits."
    },
    {
      "id": 24,
      "title": "Bleach",
      "gen":"comedy",
      "image": "../../public/card/cardfour.jpg",
      "subtitle": "Sub | Dub",
      "description": "A high school student gains the powers of a Soul Reaper and battles evil spirits."
    },
    {
      "id": 25,
      "title": "Naruto",
      "gen":"comedy",
      "image": "../../public/card/cardtwo.jpg",
      "subtitle": "Sub | Dub",
      "description": "A dystopian future where rebellion and survival collide in a high-tech world."
    },
    {
      "id": 26,
      "title": "Attack on Titan",
      "gen":"action",
      "image": "../../public/card/cardthree.jpg",
      "subtitle": "Sub | Dub",
      "description": "An unpredictable journey filled with mystery and supernatural elements."
    },
    {
      "id": 27,
      "title": "Dragon Ball",
      "gen":"action",
      "image": "../../public/card/cardfour.jpg",
      "subtitle": "Sub | Dub",
      "description": "Follow Goku and his friends on an epic adventure to collect the Dragon Balls."
    },
    {
      "id": 28,
      "title": "Dr. STONE",
      "gen":"action",
      "image": "../../public/card/cardfive.jpg",
      "subtitle": "Sub | Dub",
      "description": "After humanity turns to stone, one genius boy sets out to rebuild civilization with science."
    },
    {
      "id": 29,
      "title": "Even Given",
      "gen":"action",
      "image": "../../public/card/cardsix.jpg",
      "subtitle": "Subtitled",
      "description": "A heartfelt story about music, love, and self-discovery."
    },
    {
      "id": 30,
      "title": "Attack on Titan",
      "gen":"action",
      "image": "../../public/card/cardseven.jpg",
      "subtitle": "Sub | Dub",
      "description": "Humanity fights for survival against monstrous Titans in a world filled with secrets."
    },
    {
      "id": 31,
      "title": "One Piece",
      "gen":"action",
      "image": "../../public/card/cardeight.jpg",
      "subtitle": "Sub | Dub",
      "description": "Join Luffy and his crew on a legendary adventure to find the One Piece."
    },
    {
      "id": 32,
      "title": "Naruto",
      "gen":"action",
      "image": "../../public/card/cardnine.jpg",
      "subtitle": "Sub | Dub",
      "description": "A young ninja dreams of becoming the Hokage while facing powerful enemies."
    },
    {
      "id": 33,
      "title": "Bleach",
      "gen":"action",
      "image": "../../public/card/cardten.jpg",
      "subtitle": "Sub | Dub",
      "description": "A high school student gains the powers of a Soul Reaper and battles evil spirits."
    },
    {
      "id": 34,
      "title": "Bleach",
      "gen":"action",
      "image": "../../public/card/cardonecol.jpg",
      "subtitle": "Sub | Dub",
      "description": "A high school student gains the powers of a Soul Reaper and battles evil spirits."
    },
    {
      "id": 35,
      "title": "Bleach",
      "gen":"action",
      "image": "../../public/card/cardtwocol.jpg",
      "subtitle": "Sub | Dub",
      "description": "A high school student gains the powers of a Soul Reaper and battles evil spirits."
    }
    ,
    {
      "id": 36,
      "title": "Possibly",
      "gen":"action",
      "image": "../../public/card/cardthreecol.jpg",
      "subtitle": "Sub | Dub",
      "description": "An unpredictable journey filled with mystery and supernatural elements."
    },
    {
      "id": 37,
      "title": "Dragon Ball",
      "gen":"comedy",
      "image": "../../public/card/cardfourcol.jpg",
      "subtitle": "Sub | Dub",
      "description": "Follow Goku and his friends on an epic adventure to collect the Dragon Balls."
    },
    {
      "id": 38,
      "title": "Dr. STONE",
      "gen":"adventure",
      "image": "../../public/card/cardfivecol.jpg",
      "subtitle": "Sub | Dub",
      "description": "After humanity turns to stone, one genius boy sets out to rebuild civilization with science."
    },
    {
      "id": 39,
      "title": "Even Given",
      "gen":"adventure",
      "image": "../../public/card/cardsixcol.jpg",
      "subtitle": "Subtitled",
      "description": "A heartfelt story about music, love, and self-discovery."
    },
    {
      "id": 40,
      "title": "Attack on Titan",
      "gen":"adventure",
      "image": "../../public/card/cardsevencol.jpg",
      "subtitle": "Sub | Dub",
      "description": "Humanity fights for survival against monstrous Titans in a world filled with secrets."
    },
    {
      "id": 41,
      "title": "One Piece",
      "gen":"adventure",
      "image": "../../public/card/cardeigthcol.jpg",
      "subtitle": "Sub | Dub",
      "description": "Join Luffy and his crew on a legendary adventure to find the One Piece."
    },
    {
      "id": 42,
      "title": "Naruto",
      "gen":"comedy",
      "image": "../../public/card/cardninecol.webp",
      "subtitle": "Sub | Dub",
      "description": "A young ninja dreams of becoming the Hokage while facing powerful enemies."
    },
    {
      "id": 43,
      "title": "Bleach",
      "gen":"comedy",
      "image": "../../public/card/cardtencol.jpg",
      "subtitle": "Sub | Dub",
      "description": "A high school student gains the powers of a Soul Reaper and battles evil spirits."
    },
    {
      "id": 44,
      "title": "Bleach",
      "gen":"comedy",
      "image": "../../public/image/onepiece.jpeg",
      "subtitle": "Sub | Dub",
      "description": "A high school student gains the powers of a Soul Reaper and battles evil spirits."
    },
    {
      "id": 45,
      "title": "Bleach",
      "gen":"comedy",
      "image": "../../public/card/cardthree.jpg",
      "subtitle": "Sub | Dub",
      "description": "A high school student gains the powers of a Soul Reaper and battles evil spirits."
    },
    {
      "id": 46,
      "title": "Bleach",
      "gen":"comedy",
      "image": "../../public/card/cardthreecol.jpg",
      "subtitle": "Sub | Dub",
      "description": "A high school student gains the powers of a Soul Reaper and battles evil spirits."
    },
    {
      "id": 47,
      "title": "Bleach",
      "gen":"comedy",
      "image": "../../public/card/cardfour.jpg",
      "subtitle": "Sub | Dub",
      "description": "A high school student gains the powers of a Soul Reaper and battles evil spirits."
    }
    ,
    {
      "id": 48,
      "title": "Bleach",
      "gen":"comedy",
      "image": "../../public/card/cardfour.jpg",
      "subtitle": "Sub | Dub",
      "description": "A high school student gains the powers of a Soul Reaper and battles evil spirits."
    }
  ]

  let filteranime =  animeData.filter((item) => (item.gen == selected))
  console.log(filteranime)

  return (
    <>
      <div className="body">
        <header>
          <nav className='navbar'>
            <div className='nav-menu'>
              <img className='navlogo' src={logo} alt="Logo"/>
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
        <div className='popularcontainer'>
          <div className="header">
            <h1>Most Popular Anime</h1>
            <div className="filters">
              <select onChange={(e) => {setSelected(e.target.value)}}>
                <option value="null">Filter</option>
                <option value="action">Action</option>
                <option value="comedy">Comedy</option>
                <option value="adventure">Adventure</option>
              </select>
            </div>
          </div>

          

          <h2 className="section-title">Popular</h2>
          <div className="anime-list">
            {selected == null? (animeData.map((anime) => (
              <div className="anime-card" key={anime.id}>
                <img src={anime.image} alt={anime.title} />
                <div className="anime-description">
                    <p>{anime.description}</p>
                </div>
                <h3>{anime.title}</h3>
                <p>{anime.subtitle}</p>
              </div>
            ))
            ) : (
              filteranime.map((anime) => (
                <div className="anime-card" key={anime.id}>
                  <img src={anime.image} alt={anime.title} />
                  <div className="anime-description">
                      <p>{anime.description}</p>
                  </div>
                  <h3>{anime.title}</h3>
                  <p>{anime.subtitle}</p>
                </div>
              ))
            )}
          </div>

        </div>
        <Footer />
      </div>
    </>
  );
}

export default PopularPage;
