import React, { useState } from 'react'
import './navbar.css'

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.png'

const Menu = () => (
  <>
  <p><a href="#destinations">Our tours</a></p>
  <p><a href="#opinions">What People Say</a></p>
  <p><a href="#discover">Discover Georgia</a></p>
  <p><a href="#wherefind">Where To Find Us</a></p>
  <p><a href="#contact">Contact Us</a></p>
  </>
)

const Navbar = () => {
  const [ toggleMenu, setToggleMenu ]   = useState(false);

  return (
    <div className="travel__navbar">
      <div className="travel__navbar-links">
        <div className="travel__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="travel__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#aboutus">About Us</a></p>
          <div className="travel__navbar-links_container-menu">
            <p><a href="#destinations">Our tours</a></p>
            <p><a href="#opinions">What People Say</a></p>
            <p><a href="#discover">Discover Georgia</a></p>
            <p><a href="#wherefind">Where To Find Us</a></p>
            <p><a href="#contact">Contact Us</a></p>
          </div>
        </div>
      </div>
      <div className="travel__navbar-menu"> 
        {toggleMenu
          ? <RiCloseLine color="#184D47" size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color="#184D47" size={27} onClick={() => setToggleMenu(true)}/> 
        }
        {toggleMenu && (
        <div className="travel__navbar-menu_container scale-up-center"> 
          <div className="travel__navbar-menu_container-links"> 
            <Menu />
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar