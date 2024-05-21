import React, { useEffect } from 'react';
import './Header.css';

const Header = () => {
    useEffect(() => {
        const images = [
            '/header_img.png',
            '/img.png',
            '/img1.png',
            '/img2.png',
            '/img3.png',
            '/img4.png',
            '/img5.png',
            '/img6.png',
            '/img7.png',
            '/img8.png'
        ];
        let currentImageIndex = 0;
        const headerElement = document.querySelector('.header');

        const changeBackgroundImage = () => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            headerElement.style.backgroundImage = `url('${images[currentImageIndex]}')`;
        };

        const intervalId = setInterval(changeBackgroundImage, 3000); // Change image every 3 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    const openNewPage = async () => {
        let port = 5174; // Initial port number
        const maxPort = 5184; // Maximum port number to check
        let urlOpened = false;

        while (port <= maxPort && !urlOpened) {
            try {
                const response = await fetch(`http://localhost:${port}`, { method: 'HEAD' });
                if (response.ok) {
                    window.open(`http://localhost:${port}`);
                    urlOpened = true;
                } else {
                    port++;
                }
            } catch (error) {
                port++;
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
