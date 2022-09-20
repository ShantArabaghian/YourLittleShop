
import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import './Navbar.css';
import { onAuthStateChanged} from "firebase/auth";
import { auth } from "../firebase-config";
import { Squeeze as Hamburger } from 'hamburger-react'
function Navbar() {
  const [click, setClick] = useState(false);
  const [, setButton] = useState(true);
  const [user, setUser] = useState(null);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
 
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
   
      });
  }, []);

  window.addEventListener('resize', showButton);  
 
  

  
  function logout() {
  return auth.signOut()
  }
return(
  <>
  <nav className="navbar">
  <p to="/" className="navbar-logo">Your Little Shop</p>

    <div className="navbar-container">
      <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/aboutus" className="nav-links" onClick={closeMobileMenu}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cart" className="nav-links-cart"  onClick={closeMobileMenu}>
           My Cart <i className='fas fa-shopping-bag'></i>
            </Link>
          </li>
          {user ?
              <li >
                {user.email.slice(0,user.email.search("@"))}
                <Link to="/"className="account-btn" onClick={logout}>
                  Log out
                </Link>
              </li>
              :
              <li>
                <Link to="/login" className="account-btn" onClick={closeMobileMenu}>
                  Sign in/Sign Up
                </Link>
              </li>
            }
        
            
          
            
           
          
          
          </ul>
       
    </div>
  </nav>
  </>
)
}
export default Navbar;