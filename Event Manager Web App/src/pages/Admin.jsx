
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Admin = () => {
  return (
    <div className='app'>
      <ToastContainer/>
      <hr />
      <div className="app-content">
        <Sidebar/>
      </div>
    </div>
  )
}

export default Admin