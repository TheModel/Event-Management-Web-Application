
import React from 'react';
import { ReactDOM } from 'react-dom';
import NavBar from './Components/NavigationBar/NavBar';
import {Routes, Route} from 'react-router-dom';
import AddToEventList from './Pages/AddToEventList/AddToEventList';
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'



const App = () => {
  return (
    <>
      <div className='app'>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/AddToEventList' element={<AddToEventList/>}/> 
        </Routes>
      </div>  
      <Footer/>
    </>
  );
}
export default App



