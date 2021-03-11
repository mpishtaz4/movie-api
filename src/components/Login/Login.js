import React, {useState} from 'react'
import Signup from '../Signup/Signup';
import "./Login.css"


const Login = () => {
  const [signIn, setSignIn] = useState(false);


  return (
    <div className="login">
      <div className="background">
        <img
        className="login_logo"
        src="https://www.themoviedb.org/assets/1/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png"
        alt="logo"
        />
        <button 
        className="login_button"
        onClick = {()=> setSignIn(true)}
        > 
          Sign in
        </button>

      <div className="background_gradient"></div>
      </div>
      <div className="login_body">
        {signIn ?(
          <Signup/>
        ) : (
          <>
          <h1>Unlimited film, Tv programs and more.</h1>
          <h2> Watch anywhere. Cancel any time.</h2>
          <h3>Ready to watch? Login or Sign up with you Email Address</h3>
          <div>
            
          </div>
          </>
        )} 
     
     </div>
     
    </div>
  )
}

export default Login
