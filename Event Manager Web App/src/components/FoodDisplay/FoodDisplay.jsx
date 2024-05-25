/* eslint-disable react/prop-types */
import  { useContext } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../Context/StoreContext'

const FoodDisplay = ({category}) => {

  const {event_list} = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top Events near you</h2>
      <div className='food-display-list'>
        {event_list.map((item)=>{
          if (category==="All" || category===item.category) {
            return <FoodItem key={item._id} image={item.img} name={item.title} desc={item.description} price={item.price} id={item._id}/>
          }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
