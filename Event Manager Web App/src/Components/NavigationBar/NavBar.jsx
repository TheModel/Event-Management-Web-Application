/* This code is for the navigation Bar and contains 
--> Logo, to the left
--> Navigation bar menu, in the middle
--> Right menu, that contains the AddToEventList, the Search and SignIN button
*/

import { useState } from 'react'
import './NavBar.css'
const NavBar = () => {
  const [menu, setMenu] = useState("Home")

  return (
    <div className="navbar">
        <img src="./src/assets/eventLogo.png" alt="Logo of Eventify" className='logo'></img> 
        <ul className="navbar-menu">
            <li onClick={() => setMenu("Home")} className={menu === "Home"?"active":" "}>Home</li>
            <li onClick={() => setMenu("About")} className={menu === "About"?"active":" "}>About</li>
            <li onClick={() => setMenu("Events")} className={menu === "Events"?"active":" "}>Events</li>
            <li onClick={() => setMenu("Contact-Us")} className={menu === "Contact-Us"?"active":" "}>Contact Us</li>
        </ul>
        <div className='navbar-right'>
            <img src="./src/assets/Search.png" className='search'></img>
            <div className = "navbar-search-icon">
                <img src="./src/assets/event.png" className='event'></img>
                <div className='dot'></div>
            </div>
            <button> SIGN IN</button>
        </div>
    </div>
  )
}

export default NavBar