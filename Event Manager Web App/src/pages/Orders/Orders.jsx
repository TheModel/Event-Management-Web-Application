import React, { useEffect, useState } from 'react'
import './Orders.css'
import { toast } from 'react-toastify';
import axios from 'axios';
import { assets, url } from '../../assets/assets';

const Order = () => {

  // State to hold the list of orders
  const [orders, setOrders] = useState([]);

  // Function to fetch all the orders from the server
  const fetchAllOrders = async () => {
    const response = await axios.get(`${url}/api/order/list`)
    if (response.data.success) {
      setOrders(response.data.data.reverse());
      console.log(response.data.data);
    }
    else {
      toast.error("Error")
    }
  }

  // Function to handle the status change of an order
  const statusHandler = async (event,orderId) => {
    console.log(event,orderId);
    const response = await axios.post(`${url}/api/order/status`,{
      orderId,
      status:event.target.value
    })
    if(response.data.success)
    {
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
      // Heading for the orders page
      <h3>Order Page</h3>
      
      // Container for the list of orders
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className='order-item'>
            // Display the parcel icon
            <img src={assets.parcel_icon} alt="" />
            <div>
              // Display the list of items in the order
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
              // Display the customer's name
              <p className='order-item-name'>{order.address.firstName+" "+order.address.lastName}</p>
              // Display the customer's address
              <div className='order-item-address'>
                <p>{order.address.street+","}</p>
                <p>{order.address.city+", "+order.address.state+", "+order.address.country+", "+order.address.zipcode}</p>
              </div>
              // Display the customer's phone number
              <p className='order-item-phone'>{order.address.phone}</p>
            </div>
            // Display the number of items in the order
            <p>Items : {order.items.length}</p>
            // Display the total order amount
            <p>${order.amount}</p>
            // Dropdown to change the order status
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

export default Order