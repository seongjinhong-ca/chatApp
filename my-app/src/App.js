import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';

const init_values = {
  init_isSignIn: false,
  init_username : "",
  init_password : "",
  init_email: ""

}
function App() {
  const [isSignIn, setIsSignIn] = useState(false);
  const [username, setUsername] = useState(init_values.init_username);
  const [password, setPassword] = useState(init_values.init_password);
  const [email, setEmail] = useState(init_values.init_email);
  const handleChange = (e) => {
    const {name, value} = e.target;
    if(name === "email"){
      setEmail(value);
    }
    else if(name === "username"){
      setUsername(value);
    }
    else if(name === "password"){
      setPassword(value);
    }
    console.log(value);
  }

  // when IsSignIn state change
  useEffect(()=>{
    setUsername(init_values.init_username);
    setPassword(init_values.init_password);
    setEmail(init_values.init_email);
  }, [isSignIn])
  
  return (
    <>
    <div className="App">
      {isSignIn?
      <div className="SignUpPage">
        <div className="SignUpForm">
          <form>
            <label>email</label>
            <input name="email" value={email} onChange={handleChange}/>
            <br/>
            <label>username</label>
            <input name="username" value={username} onChange={handleChange}/>
            <br/>
            <label>password</label>
            <input name="password" value={password} onChange={handleChange}/>
          </form>
        </div>
        <button>SignUp</button>
      </div> :
        <div className="LoginPage">
          <div className="LoginForm">
            <form>
              <label>username</label>
              <input name="username" value={username} onChange={handleChange}/>
              <br/>
              <label>password</label>
              <input name="password" value={password} onChange={handleChange}/>
            </form>
          </div>
          <button>Login</button>
        </div>
      }
      <button onClick={()=>{setIsSignIn(true)}}>Create Account</button>
      <button onClick={()=>{setIsSignIn(false)}}> Go Back to Login</button>
    </div>
    </>
  );
}


export default App;
