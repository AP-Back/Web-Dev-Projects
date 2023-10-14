import React from 'react'
import { useHistory } from 'react-router-dom';
import "./navbar.css";
import icon from "./favicon.ico";

export default function Navbar({ user, setUser }) {

  let history = useHistory();

  const logout = () => {  //Method to log out
    localStorage.setItem("user", null);  //Removing user from localstorage
    setUser(null);  //Setting user back to null
    history.push("/"); //Going back to login screen
  }

  return (  //Navigation bar with a welcome message if logged in and log out button. If not logged in we ask user to log in


    <div className={user ? "userset" : "usernotset"}>
      {user ? (
        <div className='navbar-user'>
          <p>{user.email.substr(0, user.email.indexOf("@"))}</p><br /><br />
          <button className='btn-2' onClick={logout}>Log out</button>
        </div>
      ) : (
        <div className='navbar-content'>
          <img src={icon} alt="" className='image' />
        </div>
      )}
      <p className='appname'>EnConnect</p>
      <p></p>
    </div>

  )
}
