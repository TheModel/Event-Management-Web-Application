import React from 'react';
import './Header.css';

const Header = () => {
    const openNewPage = () => {
        // Open the specified URL in a new tab or window
        window.open('http://localhost:5174/');
    };

    return (
        <div className='header'>
            <div className='header-contents'>
                <h2>Your Events Start Here!</h2>
                <p>Events are exquisite orchestrations of time, space, and human connection, where moments unfold like delicate petals in a blossoming garden of experiences. Each gathering is a tapestry woven with threads of anticipation, excitement, and celebration, creating a symphony of memories that linger in the hearts of attendees. </p>
                <button onClick={openNewPage}>Add Event</button>
            </div>
        </div>
    );
};

export default Header;