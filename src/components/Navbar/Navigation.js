import React, {useEffect, useState} from "react";
// import { useHistory } from "react-router";
import "./Navigation.css"
import { logout } from '../../features/userSlice';
import { useDispatch} from 'react-redux';

const Navigation = () => {
    const [show, handleshow] = useState(false)
    // const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          handleshow(true)
        } else handleshow(false);
      });
      return () => {
        // window.removeEventListener("scroll")
      }
    }, []);
  
    return (
      <div className={`nav ${show && "nav_black"}`}>  
        <img
          className="nav_logo"
          src="https://www.themoviedb.org/assets/1/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png"
          alt="Netflix Logo"
        />
        <button
        className="nav_avatar"
        onClick={()=>dispatch(logout())}
        >
          Sign out</button>
          
      </div>
    )
  }
  
  export default Navigation;