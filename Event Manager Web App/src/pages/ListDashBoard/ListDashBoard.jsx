import Sidebar from '../../components/Sidebar/Sidebar'
import { ToastContainer } from 'react-toastify';
import List from '../../components/List/List';


const ListDashBoard = () => {

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