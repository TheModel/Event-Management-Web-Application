import{  useState } from 'react'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import LoginPopup from './components/LoginPopup/LoginPopup'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard_Add from './pages/Dashboard/Dashboard_Add'
import ListDashBoard from './pages/ListDashBoard/ListDashBoard'
import Login from './pages/Login/Login'
import Signup from './pages/SignUp/Signup'

const App = () => {
  
  const [showLogin,setShowLogin] = useState(false);



  return (
    <>
    <ToastContainer/>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
        <Routes >
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/add' element={<Dashboard_Add />}/>
          <Route path='/list' element={<ListDashBoard/>}/>
          <Route path='/signin' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
