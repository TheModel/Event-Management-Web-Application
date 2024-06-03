/* eslint-disable no-unused-vars */
import express from 'express'
import { Event } from '../models/event.model.js';
import {Cart} from '../models/cart.model.js'
const router = express.Router();
// Add an event to the cart
router.post('/events', async (req, res) => {
    const { event,email } = req.body;
  
    try {
      let cart = await Cart.findOne({email:email});
      console.log(cart)
      if (!cart) {
        cart = new Cart();
        cart.email = email;
      }
  
      cart.events.push(event);
      cart.total += 1;
  
      await cart.save();
  
      res.status(201).json({ message: 'Event added to cart successfully', cart });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  });
router.get('/events/:email',async(req,res)=>{
    const email = req.params.email;
    console.log(email);
    try{
        let cart_list  =  await Cart.find({email:email})
        res.status(201).json({ message: 'User Cart Items', cart_list });
    }catch(error){
        res.status(500).json({ message: 'Server error', error });
    }
   

})
  // Delete an event from the cart
router.delete('/cart/events/:eventId', async (req, res) => {
    const { eventId } = req.params;
  
    try {
      let cart = await Cart.findOne();
      if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
      }
  
      cart.events.id(eventId).remove();
      cart.total -= 1;
  
      await cart.save();
  
      res.status(200).json({ message: 'Event removed from cart successfully', cart });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  });

  export{
    router
}