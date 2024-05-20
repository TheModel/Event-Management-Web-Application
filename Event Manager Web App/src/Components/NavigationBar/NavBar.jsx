import './NavBar.css'
const NavBar = () => {
  return (
    <div className="navbar">
        <img src="./src/assets/eventLogo.png" alt="Logo of Eventify"></img>
        <ul className="navbar-menu">
            <li>Home</li>
            <li>About</li>
            <li>Events</li>
            <li>Contact Us</li>
        </ul>
        <div className='navbar-right'>
            <img src=""></img>
            <div className = "navbar-search-icon">
                <img src=""></img>
                <div className='dot'></div>
            </div>
            <button> SIGN IN</button>
        </div>
    </div>
  )
}

export default NavBar