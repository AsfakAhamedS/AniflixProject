import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Logo from '../../public/image/Logo.png'
import LoginPageImage from '../../public/image/LoginPageImage.jpg'


function LoginPage() {
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  const [loginData,setLoginData]=useState({username:"",password:""})
  const [confirmPassword,setConfirmPassword]=useState('')
  const [loginerror, setLoginerror] = useState('')
  const [error, setError] = useState('')
  const [selected, setSelected] = useState(true);
  const [next, setNext] = useState(true);
  const [formdata,setFormdata] = useState({name:"",email:"",password:""})
  const [inputsValidated,setInputValidated]=useState(true);
  const [disable,setDisable] = useState(false)
  const passref=useRef("");
  const cpassref=useRef("");
  const navigate = useNavigate(); 

  const url = "http://localhost:4500/"

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(loginData)
    axios.post(url+"getuserdata", {email:loginData.username,password:loginData.password})
        .then(res => {
          if(res.status==200){
              localStorage.setItem('isLoggedIn', 'true')
              setLoginerror('')
              navigate('/home')
          }})
        .catch(e => {
          console.log(e.response.data)
          setLoginerror('Invalid username or password')
        }) 
  }

   function validInputs(){
    return formdata.email!=''&&formdata.name!=''&&formdata.password;
   }
  const handleinputchage = (e) => {
    const { name, value } = e.target;
    if(!selected){
      const patterns = {
        name: /^[A-Za-z\s]{2,}$/, 
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
      };
      
      if(patterns[name]){
        if (patterns[name] && value.length > 0 && !patterns[name].test(value)) {
          setError(name)
        }else{
          setError('')
        }
          setFormdata((prev) => ({ ...prev, [name]: value }))
          setDisable(false)
          setInputValidated(!validInputs)
      }
      if(name === "conpassword"){
        setConfirmPassword(value)
        setDisable(value === formdata.password)
        setError(name)
      }
    }else{
      console.log('value',value)
      setLoginData((prev)=>({...prev,[name]:value}))
    }
  }

  function handleCreate(e){
    e.preventDefault();
    console.log(formdata)
    axios.post(url+"createuserdata",formdata)
      .then(res => {
        console.log('res===>',res);
      })
      .catch(e => {
        console(e.response.data.error)
      }) 
    setSelected(!selected);
  }
  
    return (
      <>
        <div className="body">
          <div className="login-navbar">
            <div className="login-logo">
              <img src={Logo} alt="Logo" className="logo-img" />
            </div>
          </div>
          <div className="login-container">
            <div className="login-content">
                <div className="left">
                    <img className='loginpage-img' src={LoginPageImage} alt="" />
                </div>
                <div className="right">
                  <p className='login-head'>{!selected ? "Create" : "Login"}<span> Your Account</span></p>
                  {selected ? (
                    <div>
                      <form onSubmit={handleLogin} className='form'>
                        <div className="form-grp">
                            <label htmlFor="">
                                <span className='input-label'>Username</span>
                            </label>
                            <input type="text" className="username" name='username' value={loginData.username} onChange={handleinputchage} placeholder='Enter Username'/>
                            <div className="error"></div>
                        </div>
                        <div className="form-grp">
                            <label htmlFor="">
                                <span className='input-label'>Password</span>
                            </label>
                            <input type="password" className="password" name='password' value={loginData.password} onChange={handleinputchage} placeholder='Enter Password'/>
                            <div className="error"></div>
                        </div>
                        <div className="error">
                            {loginerror && <div className="error">{loginerror}</div>}
                        </div>
                        <div className="login-btn">
                            <button type='submit'>Login</button>
                        </div>
                        <div className="forget">
                            <a className="forget" href="#">Forgot password?</a>
                        </div>
                      </form>
                      <div className="create">
                        <button onClick={() => {setSelected(!selected)}}>{!selected ? "Already have account? Login":"Create account"}</button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      {next ? (
                        <div>
                          <form className='form'>
                            <div className="form-grp">
                                <label htmlFor="">
                                    <span className='input-label'>Name</span>
                                </label>
                                <input type="text" className="name" name='name' value={formdata.name}  onChange={handleinputchage} placeholder='Enter Name'/>
                                <div className="c-error">{`${error == 'name' ? "Minimum 2 chars" : ""}`}</div>
                            </div>
                            <div className="form-grp">
                                <label htmlFor="">
                                    <span className='input-label'>Email</span>
                                </label>
                                <input type="email" className="email" name='email' value={formdata.email} placeholder='Enter Email' onChange={handleinputchage}/>
                                <div className="c-error">{`${error == 'email' ? "Invalid email" : ""}`}</div>
                            </div>
                          </form>
                          <div className="login-btn">
                            <button onClick={() => {setNext(!next)}}>Next</button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <form className='form' >
                            <div className="form-grp">
                                <label htmlFor="">
                                    <span className='input-label'>Password</span>
                                </label>
                                <input type="password" ref ={passref} className="name" name='password' value={formdata.password} placeholder='Enter password' onChange={handleinputchage}/>
                                <div className="c-error">{`${error == 'password' ? "8+ chars, 1 uppercase, 1 lowercase, 1 number, 1 special char" : ""}`}</div>
                            </div>
                            <div className="form-grp">
                                <label htmlFor="">
                                    <span className='input-label'>Confirm Password</span>
                                </label>
                                <input type="password" ref={cpassref} className="email" name='conpassword' value={confirmPassword} placeholder='confirm password'  onChange={handleinputchage}/>
                                <div className="c-error">{`${error == 'conpassword' ? "Password doesn't match" : ""}`}</div>
                            </div>
                            <div style={{display:`${disable === true ? "block" : "none"}`}} className="login-btn">
                              <button type='submit' disabled={inputsValidated} onClick={handleCreate}>Create</button>
                            </div>
                          </form>
                          <div style={{display:`${disable === false ? "block" : "none"}`}} className="login-btn">
                            <button onClick={() => {setNext(!next)}}>Back</button>
                          </div>
                        </div>
                      )}
                    <div className="already-login">
                      <button onClick={() => {setSelected(!selected)}}>{!selected ? "Already have account? Login":"Create account"}</button>
                    </div>
                  </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default LoginPage