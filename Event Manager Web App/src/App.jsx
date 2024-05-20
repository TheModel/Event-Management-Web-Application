
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavigationBar/NavBar'
import AddToEventList from './Pages/AddToEventList/AddToEventList';
import Home from './Pages/Home/Home';

/* This is the App.jsx file where all our components are embedded for the webapplication to look
good and more presentable
*/

const App = () => {
  return (
    <>
      <div className='app'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/AddToEventList' element={<AddToEventList/>}> </Route>
        </Routes>
      </div>  

    </>
  );
}
export default App



