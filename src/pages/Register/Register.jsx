import './register.css'

function Login() {
  return (
    <div className='login'>
        <h2 className="formTitle">Register</h2>
      <form  className="loginForm">
      <label className='loginLabel'>UserName</label>
        <input type="text" className='loginInput' placeholder='enter your username ...' />
    
        <label className='loginLabel'>Email</label>
        <input type="text" className='loginInput' placeholder='enter your eamil address ...' />
        <label className='loginLabel' >Password</label>
        <input type="text" placeholder='enter your password 
        ....'  className='loginInput' />
        <button className="loginButton">
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        Register 
      </button>
    </div>
  )
}

export default Login
