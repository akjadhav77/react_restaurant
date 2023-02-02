import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdImageSearch, MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className='app_navbar'>
      <div className='app_navbar-logo'>
        <a href="#home"><img src={images.gericht} alt="app logo" /></a>
      </div>
      <ul className='app_navbar-links'>
        <li className='p_opensans'><a href="#home">Home</a></li>
        <li className='p_opensans'><a href="#home">About Us</a></li>
        <li className='p_opensans'><a href="#home">Menu</a></li>
        <li className='p_opensans'><a href="#home">Awards</a></li>
        <li className='p_opensans'><a href="#home">Contact Us</a></li>
      </ul>
      <div className="app_navbar-login">
        <a href="#login" className='p_opensans'>Log In / Register</a>
        <div/>
        <a href="/" className='p_opensans'>Book Table</a>
      </div>
      <div className="app_navbar-smallscreen">
        <GiHamburgerMenu color='#fff' fontSize={26} onClick={()=> setToggleMenu(true)}/>

        {/*if true then show or render, we are showing this div only if this togglemenu is true*/}
        {toggleMenu && ( 

        <div className='app_navbar-smallscreen_overlay flex_center slide-bottom'>
          <MdOutlineRestaurantMenu color='#fff' fontSize={26} className='overlay_close' onClick={()=> setToggleMenu(false)}/>

          <ul className='app_navbar-smallscreen_links'>
            <li className='p_opensans'><a href="#home">Home</a></li>
            <li className='p_opensans'><a href="#home">About Us</a></li>
            <li className='p_opensans'><a href="#home">Menu</a></li>
            <li className='p_opensans'><a href="#home">Awards</a></li>
            <li className='p_opensans'><a href="#home">Contact Us</a></li>
          </ul>
        </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;
