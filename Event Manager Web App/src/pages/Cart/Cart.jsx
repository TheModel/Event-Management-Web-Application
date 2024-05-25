import  { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {cartItems, event_list, removeFromCart,getTotalCartAmount,url} = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <p className='title'>My Event List</p>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Event</p> <p>Title</p> <p>Number of Reminders</p> <p>Remove</p>
        </div>
        <br />
        <hr />
        {event_list.map((item, index) => {
          if (cartItems[item._id]>0) {
            return (<div key={index}>
              <div className="cart-items-title cart-items-item">
                <img src={+item.img} alt="" />
                <p>{item.title}</p>
                <div>{cartItems[item._id]}</div>
                <p className='cart-items-remove-icon' onClick={()=>removeFromCart(item._id)}>x</p>
              </div>
              <hr />
            </div>)
          }
        })}
      </div>
    </div>
  )
}

export default Cart
