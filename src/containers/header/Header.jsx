import React from 'react'
import './header.css'
import header_bg from '../../assets/header_bg.jpg'

const Header = () => {
  return (
    <div className="travel__header section__padding" id="home">
      <div className="travel__header-content">
        <h1>Explore Georgia</h1>
        <div className="travel__header-image">
          <img src={header_bg} alt="background-img"/>
        </div>
      </div>
    </div>
  )
}

export default Header