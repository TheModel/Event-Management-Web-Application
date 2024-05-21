import React from 'react';
import './Header.css';

const Header = () => {
    const openNewPage = async () => {
        const currentPort = parseInt(window.location.port, 10);
        if (isNaN(currentPort)) {
            alert('Unable to determine current port. Please ensure the website is running.');
            return;
        }

        const basePort = currentPort + 5;
        const maxAttempts = 5; // Maximum number of attempts
        let attempt = 0;
        let urlOpened = false;

        while (attempt < maxAttempts && !urlOpened) {
            try {
                const port = basePort + attempt;
                await fetch(`http://localhost:${port}`);
                window.open(`http://localhost:${port}`);
                urlOpened = true;
            } catch (error) {
                attempt++;
            }
        }

        if (!urlOpened) {
            alert('Unable to open the URL. All specified ports are in use.');
        }
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
