/* eslint-disable react/prop-types */
import  { useContext } from 'react'
import './EventDisplay.css'
import EventItem from '../EventItem/EventItem'
import { StoreContext } from '../../Context/StoreContext'

const EventDisplay = ({category}) => {

  const {event_list} = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top Events near you</h2>
      <div className='food-display-list'>
        {event_list.map((item)=>{
          if (category==="All" || category===item.category) {
            return <EventItem key={item._id} image={item.img} name={item.title} desc={item.description} price={item.price} id={item._id}/>
          }
        })}
      </div>
    </div>
  )
}

export default EventDisplay
