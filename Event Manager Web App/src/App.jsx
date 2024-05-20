/* This is the App.jsx file where all our components are embedded for the webapplication to look
good and more presentable
*/
import React from 'react';
import ReactDOM  from 'react-dom';
import NavBar from './Components/NavigationBar/NavBar';
import {Routes, Route} from 'react-router-dom';
import AddToEventList from './Pages/AddToEventList/AddToEventList';
import Home from './Pages/Home/Home'



const App = () => {
  return (
    <div className='app'>
      <NavBar/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/AddToEventList' element={<AddToEventList/>}/> 
      </Routes>
    </div>
  );
}
export default App



