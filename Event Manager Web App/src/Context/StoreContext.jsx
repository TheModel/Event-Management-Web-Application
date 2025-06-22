/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { food_list, menu_list } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const url = "https://event-management-web-application.onrender.com"
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

    const fetchEventList = () => {
    const basePath = "/events/";
    const allImages = [
        "birthday.png", "birthday (2).png", "birthday (3).png",
        "martialarts.png", "martialarts2.png", "martialarts3.png", "martialarts4.png", "martialarts5.png",
        "meeting (2).png", "meeting (3).png", "meeting (4).png", "meeting (5).png", "meeting (6).png", 
        "meeting (7).png", "meeting (8).png", "meeting (9).png", "Meeting.png", "meeting6.png",
        "party.png", "party (2).png", "party (3).png", "party (4).png", "party (5).png", "Party3.png",
        "political.png", "political (2).png", "political (3).png", "political (4).png", "political (5).png", "political (6).png",
        "religious.png", "religious (2).png", "religious (3).png", "religious1.png",
        "sports (2).png", "sports (3).png", "sports4.png", "sports5.png",
        "wedding.png", "wedding (2).png", "wedding (3).png", "wedding (4).png"
    ];

    // categorize based on filename keywords
    const categorized = allImages.map(file => {
        let category = "other";
        const lower = file.toLowerCase();

        if (lower.includes("birthday")) category = "birthday";
        else if (lower.includes("wedding")) category = "wedding";
        else if (lower.includes("sports")) category = "sports";
        else if (lower.includes("meeting")) category = "meeting";
        else if (lower.includes("party")) category = "party";
        else if (lower.includes("martial")) category = "martialarts";
        else if (lower.includes("religious")) category = "religious";
        else if (lower.includes("political")) category = "political";

        return {
            title: file.replace(/\.[^/.]+$/, ""), // Remove extension
            category,
            image: basePath + file,
        };
    });

    setEventList(categorized);
    console.log("Local Event List:", categorized);
};


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
        await axios.get(url + '/api/auth/logout')
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
                    await axios.post(url + '/api/auth/token',{token:token},{headers})
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