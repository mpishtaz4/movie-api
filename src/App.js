import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Route, Redirect, Switch, NavLink} from "react-router-dom";
import './App.css';
import HomeScreen from './components/Home/HomeScreen';
import Login from './components/Login/Login';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch(); 

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      if(userAuth){
        dispatch(
          login({
          uid: userAuth.uid,
          email: userAuth.email,
        })
        );
      } else {
         dispatch(logout());
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div className="app">
      {/* <Router>
        {user ?(
          <Login/>
        ) : (
        <Switch>
          <Route exact path="/">
            <HomeScreen/>
          </Route>
        </Switch> 
        )}
      </Router> */}
          <Router>
            <NavLink to="/"/>
            <NavLink to="login"/>
            <Switch>
            <Route path="/" exact>
              {user ?<HomeScreen/>: <Login/>}
            </Route>
            <Route path="*">
              <Redirect to="login"/>
            </Route>
            </Switch>
          </Router>
    </div>
  );
}

export default App;
