import Sidebar from '../../components/Sidebar/Sidebar'
import { ToastContainer } from 'react-toastify';
import List from '../../components/List/List';
import { useLocation } from 'react-router-dom';


const ListDashBoard = () => {

  useLocation();
  return ( 
    <div className='app'>
      <ToastContainer/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <List/>
      </div>
    </div>
  )
}

export default ListDashBoard