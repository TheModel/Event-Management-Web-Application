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
          const event = {
            title: item.title,
            description: item.description,
            category:item.category,
            img: item.img
          }
          if (category==="All" || category===item.category) {
            return <EventItem key={item._id} image={item.img} name={item.title} desc={item.description}  id={item._id} event = {event}/>
          }
        })}
      </div>
    </div>
  )
}

export default EventDisplay
