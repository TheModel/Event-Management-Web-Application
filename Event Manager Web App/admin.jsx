import Sidebar from '../components/Sidebar/Sidebar';
import Add from './Add/Add';
import { useState } from 'react';

const Admin = () => {
  const [showAdd, setShowAdd] = useState(false);

  return ( 
    <div className='admin-container'>
      <Sidebar setShowAdd={setShowAdd} />
      {showAdd && <Add />}
    </div>
  );
}

export default Admin;
