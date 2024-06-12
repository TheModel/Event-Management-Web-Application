/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { food_list, menu_list } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const url = "http://localhost:3000"
    const [event_list, setEventList] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [cartId,setCartId] = useState(0);
    const [token, setToken] = useState("")
    const [loggedIn,setloggedIn] = useState(false)
    const [user,setUser] = useState("")
    const addToCart = async (event) => {
        console.log(event)
        if (token) {
            
            try{
                await axios.post(url + "/api/cart/events", {email:user, event:event }).then(()=>{
                    toast.success("Successfully added event to cart");
                   const  new_cart = cartItems;
                   new_cart.push(event);
                   setCartItems(new_cart)
                })
                    
                    
                    console.log("Successfully added to cart");
                    
            }catch(error){
                    toast.error('Failed to add event to cart');
                    console.error("Error Couldn't add event to cart:", error)
                }
            
            
        }
    }

    
      
    const removeFromCart = async (event_title) => {
        
        if (token) {
            await axios.delete(url + "/api/cart/events/" + cartId + "/" + event_title).then(()=>{
                toast.success('Event Deleted from Cart!')
                let new_cart = cartItems.filter((item)=>{return item.title !== event_title});
                setCartItems(new_cart);

            })
            .catch(
                (error)=>{
                    toast.error('Could not delete Event from Cart!')
                    console.error(error.message)
                })
            
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const fetchEventList = async () => {
        const response = await axios.get(url + "/api/events/");
        const data = response.data;
        setEventList(data)
        console.log(event_list)
    }

    const deleteEventlist = async (event_id)=>{
        
        await axios.delete( url + '/api/events/' + event_id).then(()=>{
            toast.success('Event Deleted!')
            fetchEventList();
        })
        .catch(
            (error)=>{
                toast.error('Could not delete Event!')
                console.error(error.message)
            })
    }

    

    const loadCartData = async (email) => {
        const res  = await axios.get(url + `/api/cart/events/` + email)
        const cartlist = res.data[0];
        console.log(cartlist)
        
        try{
            if(cartlist !== undefined){
            setCartId(cartlist._id);
            setCartItems(cartlist.events);
            }
           
        }catch(err){
            console.log(err.message)
            setCartItems([])
        }
        
    }

    

    const logout =  async () =>{
        await axios.get('http://localhost:3000/api/auth/logout')
    }
    useEffect(() => {
        async function loadData() {
            await fetchEventList();
            setUser(localStorage.getItem('user'))
            console.log(user)
             if (user) {
                 await loadCartData(user)
             }
             
        }
        async function validateToken(){
             console.log(localStorage.getItem('token'))
             setToken(localStorage.getItem('token'))
             const token = localStorage.getItem('token')
             const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            };

                if(token !== null){
                    await axios.post('http://localhost:3000/api/auth/token',{token:token},{headers})
                    .then((res)=>{
                        console.log(res.data);
                        const {valid} = res.data
                        setloggedIn(valid)
                    }).catch((err)=>{
                        console.error(err)
                    })
                }
               
            
           
        }
        loadData();
        validateToken();
       
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token,user])


    const contextValue = {
        url,
        event_list,
        menu_list,
        cartItems,
        addToCart,
        removeFromCart,
        deleteEventlist,
        getTotalCartAmount,
        token,
        setToken,
        fetchEventList,
        loadCartData,
        setCartItems,
        loggedIn,
        setloggedIn,
        logout,
        user,
        setUser
    };


    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}


export default StoreContextProvider;