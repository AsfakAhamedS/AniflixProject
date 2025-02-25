import { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css'
import image from '../../public/image/loginpage.jpg'
import logo from '../../public/image/logotwo.png'

const user = [
    {
        "username":"asfak",
        "password":"sheiCk@123"
    }
]

function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [users] = useState(user)
  const navigate = useNavigate(); 


  const handleLogin = (e) => {
    e.preventDefault()

    const validUser = users.find(
      (user) => user.username === username && user.password === password
    )

    if (validUser) {
      localStorage.setItem('isLoggedIn', 'true')
      setError('')
      navigate('/home')
    } else {
      setError('Invalid username or password')
    }
  }

  return (
    <>
      <div className="bodylogin">
        <div className="navbar">
            <div className="loginlogo">
                <img className='logoimg' src={logo} alt="" />
            </div>
        </div>
        <div className="logincontent">
            <div className="logincontainer">
                <div className="left">
                    <img className='logincoverimg' src={image} alt="" />
                </div>
                <div className="right">
                    <p className='logpara'>Login Your Account</p>
                    <form onSubmit={handleLogin} className='loginlabel'>
                        <div className="form-group">
                            <label htmlFor="">
                                <span className='label'>Username</span>
                            </label>
                            <input type="text"  value={username} onChange={(e) => setUsername(e.target.value.trim())} className="loginusername" placeholder='Enter Username'/>
                            <div className="error"></div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">
                                <span className='label'>Password</span>
                            </label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value.trim())} className="loginpassword" placeholder='Enter Password'/>
                            <div className="error"></div>
                        </div>
                        <div className="error">
                            {error && <div className="error">{error}</div>}
                        </div>
                        <div className="loginbtn">
                            <button type='submit'>Login</button>
                        </div>
                        <div className="forget fc">
                            <a className="forget" href="#">Forgot password?</a>
                        </div>
                        <div className="create fc">
                            <a id="create" href="#">Create Account</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage