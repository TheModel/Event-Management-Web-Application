import Sidebar from '../../components/Sidebar/Sidebar'
import { ToastContainer } from 'react-toastify';
import Addform from '../../components/Add/Addform';

const Dashboard_Add = () => {

  return ( 
    <div className='app'>
      <ToastContainer/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Addform/>
      </div>
    </div>
  )
}

export default Dashboard_Add