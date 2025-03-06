import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Logo from '../../public/image/Logo.png'
import { MdEdit,MdDelete } from "react-icons/md";
import { use } from 'react';

  const url = "http://localhost:4500/"

function AdminPage(){
    const navigate = useNavigate();
    const [selected,setSelected] = useState(true)
    const [adminlogin,setAdminlogin] = useState({username:"",password:""})
    const [loginerror,setLoginerror] = useState(true)
    const [manage,setManage] = useState(true)
    const [anime,setAnime] = useState(null)

    useEffect(() => {
        getmovie()
    },[])


    function handlelogout(){
        localStorage.removeItem('isLoggedIn')
        navigate('/')
    }

    function handleinput(e){
        console.log(e.target.name)
        setAdminlogin((data) => ({...data,[e.target.name]:e.target.value}))
    }

    function handleadminlogin(e){
        e.preventDefault()
        axios.post(url+"getadmindata", {email:adminlogin.username,password:adminlogin.password})
        .then(res => {
          if(res.status==200){
              setLoginerror('')
              setSelected(false)
          }})
        .catch(e => {
          console.log()
          setLoginerror(e.response.data)
        }) 
    }

    function getmovie(){
        console.log("function call")
        axios.get(url+"getmoviedata", {})
          .then(res => {
            if(res.status==200){
                setAnime(res.data)
                console.log(res.data)
            }})
          .catch(e => {
            console.log(e.response.data)
          }) 
    }

    function handleadmindelete(index){
        console.log(index)
        axios.post(url+"admindeletedata", {id:index})
          .then(res => {
            if(res.status==200){
                console.log("Success")
                getmovie()
            }})
          .catch(e => {
            console.log(e.response.data)
          })
    }

    return(
        <>
        <header>
            <nav className="navbar">
                <div className="nav-menu">
                    <img src={Logo} alt="logo" className="nav-logo"/>
                </div>
                <button onClick={() => {setSelected(true)}} className='admin-logout-btn'>Logout</button>
                <button onClick={handlelogout} className='admin-logout-btn'>User</button>
            </nav>
        </header>
        {selected === true ? (
            <div className='adminlogin-container'>
                <div className="admin">
                    <h2 className='admin-head'>Admin Login</h2>
                    <form onSubmit={handleadminlogin} className='form'>
                        <div className="form-grp">
                            <label htmlFor="">
                                <span className='input-label'>Username</span>
                            </label>
                            <input type="text" className="username" name='username' onChange={handleinput} placeholder='Enter Username'/>
                            <div className="error"></div>
                        </div>
                        <div className="form-grp">
                            <label htmlFor="">
                                <span className='input-label'>Password</span>
                            </label>
                            <input type="password" className="password" name='password'  onChange={handleinput} placeholder='Enter Password'/>
                            <div className="error"></div>
                        </div>
                        <div className="error">
                            {loginerror && <div className="error">{loginerror}</div>}
                        </div>
                        <div className="login-btn">
                            <button type='submit'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        ) : (
            <div className='admin-container'>
                <div className='admin-menu'>
                    <span className='menu-item'> <button onClick={() => {setManage(true)}}>Manage Anime</button> </span>
                    <span className='menu-item'> <button onClick={() => {setManage(false)}}>Add Item</button></span>
                </div>
                {manage ? (
                    <div className='manage-anime'>
                        <div> 
                            <h1 className='manage-head'>Manage <span style={{color:"red"}}>Anime</span></h1>
                        </div>
                        <div className="manage-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Sno</th>
                                        <th>Title</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {anime?.map(item => (
                                        <tr key={item.id}>
                                            <td style={{color:"white"}}>{item.id}</td>
                                            <td style={{color:"white"}}>{item.title}</td>
                                            <td style={{color:"white"}}> <button className='m-icon'><MdEdit /></button><button onClick={() => {handleadmindelete(item.id)}} className='m-icon'><MdDelete /></button> </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    <div className='manage-anime'>
                        <div className="manage-form">
                            <form className='m-form'>
                                <div className="form-grp m-grp">
                                    <label className='input-label' htmlFor="">Title </label>
                                    <input type="text" className='title' />
                                </div>
                                <div className="form-grp m-grp">
                                    <label className='input-label' htmlFor="">Image </label>
                                    <input type="text" className='image'/>
                                </div>
                                <div className="form-grp m-grp">
                                    <label className='input-label' htmlFor="">Rating </label>
                                    <input type="text" className='rating'/>
                                </div>
                                <div className="form-grp m-grp">
                                    <label className='input-label' htmlFor="">Season </label>
                                    <input type="text" className='season'/>
                                </div>
                                <div className="form-grp m-grp">
                                    <label className='input-label' htmlFor="">Episode </label>
                                    <input type="text" className='episode'/>
                                </div>
                                <div className="form-grp m-grp">
                                    <label className='input-label' htmlFor="">Subtitle </label>
                                    <input type="text" className='subtitle'/>
                                </div>
                                <div className="form-grp m-grp">
                                    <label className='input-label' htmlFor="">Gen </label>
                                    <input type="text" className='gen'/>
                                </div>
                                <div className="form-grp m-grp">
                                    <label className='input-label' htmlFor="">Description </label>
                                    <input type="text" className='description'/>
                                </div>
                                <div className="form-grp m-grp">
                                    <label className='input-label' htmlFor="">Description Brift </label>
                                    <input type="text" className='descriptionbrift'/>
                                </div>
                                <div className="form-grp">
                                    <label className='input-label' htmlFor="">Audio </label>
                                    <input type="text" className='audio'/>
                                </div>
                                <div className="form-grp m-grp">
                                    <label className='input-label' htmlFor="">Subtitles </label>
                                    <input type="text" className='subtitles'/>
                                </div>
                                <div className="form-grp m-grp">
                                    <label className='input-label' htmlFor="">Duration </label>
                                    <input type="text" className='duration'/>
                                </div>
                                <div className="form-grp m-grp">
                                    <label className='input-label' htmlFor="">Genres </label>
                                    <input type="text" className='genres'/>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
                
            </div>
        )}
        </>
    )
}

export default AdminPage