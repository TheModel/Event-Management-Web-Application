/* eslint-disable react/prop-types */
import { useContext } from 'react'
import './EventItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';

const EventItem = ({ image, name, desc, event }) => {
    const { addToCart } = useContext(StoreContext);

    const handleAddToCart = () => {
        console.log("Add to cart clicked for event:", event);
        addToCart(event);
    };

    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img 
                    className='food-item-image' 
                    src={image} 
                    alt={name || "Event image"}
                    onError={(e) => {
                        console.error("Image failed to load:", image);
                        e.target.style.display = 'none';
                    }}
                />
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <button 
                        className='modified-add-btn'
                        onClick={handleAddToCart}
                        title="Add to eventList"
                    >
                        <img src={assets.add_icon_green} alt="Add to cart" />
                    </button>
                </div>
                <p className="food-item-desc">{desc}</p>
            </div>
        </div>
    )
}

export default EventItem