import React, { useState } from 'react';


export function LoginSignUp() {
  const [isSignIn, setIsSignIn] = useState(false);
  return (
    <>
    <div className="App">
      {isSignIn?
      <div className="SignUpPage">
        <div className="SignUpForm">
          <form>
            <label>email</label>
            <input/>
            <br/>
            <label>username</label>
            <input/>
            <br/>
            <label>password</label>
            <input/>
          </form>
        </div>
        <button>SignUp</button>
      </div> :
        <div className="LoginPage">
          <div className="LoginForm">
            <form>
              <label>username</label>
              <input/>
              <br/>
              <label>password</label>
              <input/>
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

// export default loginSignUp;
