/* eslint-disable react/prop-types */
import  { useContext } from 'react'
import './EventItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';

const EventItem = ({ image, name, desc , id }) => {

    
    const {cartItems,addToCart,removeFromCart,} = useContext(StoreContext);
    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={image} alt="" />
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p> <button className = 'modified-add-btn'><img  
                                        onClick={() => addToCart()} 
                                        src = {assets.add_icon_green} 
                                        title="Add to eventList"/>
                                        </button>
                </div>
                <p className="food-item-desc">{desc}</p>
            </div>
        </div>
    )
}

export default EventItem
