// Import necessary React and other dependencies
import React, { useEffect, useState } from 'react'
import './Orders.css'
import { toast } from 'react-toastify';
import axios from 'axios';
import { assets, url } from '../../assets/assets';

// Define the Order component
const Order = () => {
  // Declare the state to hold the list of orders
  const [orders, setOrders] = useState([]);

  // Function to fetch all the orders from the server
  const fetchAllOrders = async () => {
    // Make a GET request to the server to fetch the orders
    const response = await axios.get(`${url}/api/order/list`)
    
    // Check if the request was successful
    if (response.data.success) {
      // Reverse the order of the orders and update the state
      setOrders(response.data.data.reverse());
      
      // Log the fetched orders to the console
      console.log(response.data.data);
    }
    else {
      // Display an error toast if the request failed
      toast.error("Error")
    }
  }

  // Function to handle the status change of an order
  const statusHandler = async (event,orderId) => {
    // Log the event and order ID to the console
    console.log(event,orderId);
    
    // Make a POST request to the server to update the order status
    const response = await axios.post(`${url}/api/order/status`,{
      orderId,
      status:event.target.value
    })
    
    // Check if the request was successful
    if(response.data.success)
    {
      // Fetch all the orders again to update the UI
      await fetchAllOrders();
    }
  }

  // Fetch all the orders when the component mounts
  useEffect(() => {
    fetchAllOrders();
  }, [])

  // Render the orders in the UI
  return (
    <div className='order add'>
      {/* Heading for the orders page */}
      <h3>Order Page</h3>
      
      {/* Container for the list of orders */}
      <div className="order-list">
        {/* Map over the list of orders and render each order */}
        {orders.map((order, index) => (
          <div key={index} className='order-item'>
            {/* Display the parcel icon */}
            <img src={assets.parcel_icon} alt="" />
            <div>
              {/* Display the list of items in the order */}
              <p className='order-item-food'>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity
                  }
                  else {
                    return item.name + " x " + item.quantity + ", "
                  }
                })}
                </p>
              {/* Display the customer's name */}
              <p className='order-item-name'>{order.address.firstName+" "+order.address.lastName}</p>
              {/* Display the customer's address */}
              <div className='order-item-address'>
                <p>{order.address.street+","}</p>
                <p>{order.address.city+", "+order.address.state+", "+order.address.country+", "+order.address.zipcode}</p>
              </div>
              {/* Display the customer's phone number */}
              <p className='order-item-phone'>{order.address.phone}</p>
            </div>
            {/* Display the number of items in the order */}
            <p>Items : {order.items.length}</p>
            {/* Display the total order amount */}
            <p>${order.amount}</p>
            {/* Dropdown to change the order status */}
            <select onChange={(e)=>statusHandler(e,order._id)} value={order.status} name="" id="">
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

// Export the Order component
export default Order