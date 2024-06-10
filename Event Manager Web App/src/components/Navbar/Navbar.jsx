import  { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

// eslint-disable-next-line react/prop-types
const Navbar = () => {
  
    const openNewPage = () => {
        // Navigate to the /admin route
        loggedIn?navigate('/cart'):navigate('/signin');
    };
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount,setToken,loggedIn,logout } = useContext(StoreContext);
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user")
    logout();
    setToken("");
    navigate('/');
    window.location.reload()
  }

  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={() => setMenu("home")} className={`${menu === "home" ? "active" : ""}`}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={`${menu === "menu" ? "active" : ""}`}>Explore</a>
        <a href='#app-download' onClick={() => setMenu("mob-app")} className={`${menu === "mob-app" ? "active" : ""}`}>Mobile app</a>
        <a href='#footer' onClick={() => setMenu("contact")} className={`${menu === "contact" ? "active" : ""}`}>Contact Us</a>
      </ul>
      <div className="navbar-right">
          <img onClick={openNewPage} style={{cursor:'pointer'}} src={assets.basket_icon} alt="" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        {loggedIn ?  <button onClick={logOut}>Log out</button>
          :<button onClick={() => navigate('/signin')}>sign in</button>
          
        }

      </div>
    </div>
  )
}

export default Navbar
