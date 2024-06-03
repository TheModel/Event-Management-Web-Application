import  { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'


const Cart = () => {

  const {cartItems,removeFromCart} = useContext(StoreContext);
  

  return (
    <div className='cart'>
      <p className='title'>My Event List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <p>Image</p> <p>Title</p>  <p>description</p> <p>Category</p>  <p>Remove</p>
        </div>
        <br />
        <hr />
        {cartItems && cartItems.map((item)=>{
          
            return (
              <div key={item._id} className="list-table-format title">
                <img src={item.img}/>
                <span>{item.title}</span>
                <span>{item.description}</span>
                <span>{item.category}</span>
                <span className='cart-btn'>X</span>
              </div>
              
            ) 
          
        })}
        
       
      </div>
    </div>
  )
}

export default Cart
