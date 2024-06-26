import { useContext } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Header = () => {
    const navigate = useNavigate();
    const {loggedIn} = useContext(StoreContext)
    const openNewPage = () => {
        // Navigate to the /admin route
        loggedIn?navigate('/add'):navigate('/signin');
    };

    return (
        <div className='header'>
            <div className='header-contents'>
                <h2>Your Events Start Here!</h2>
                <p>
                    Events are exquisite orchestrations of time, space, and human connection, where moments unfold 
                    like delicate petals in a blossoming garden of experiences. Each gathering is a tapestry woven 
                    with threads of anticipation, excitement, and celebration, creating a symphony of memories that 
                    linger in the hearts of attendees.
                </p>
                <button className='btn' onClick={openNewPage}>Add Event</button>
            </div>
        </div>
    );
};

export default Header;
