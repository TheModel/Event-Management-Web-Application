/* eslint-disable react/prop-types */
import { useContext } from 'react'
import './EventDisplay.css'
import EventItem from '../EventItem/EventItem'
import { StoreContext } from '../../Context/StoreContext'

const EventDisplay = ({ category }) => {
    const { event_list } = useContext(StoreContext);

    console.log("EventDisplay - event_list:", event_list);
    console.log("EventDisplay - category:", category);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top Events near you</h2>
            <div className='food-display-list'>
                {event_list.map((item) => {
                    console.log("EventDisplay - Processing item:", item);
                    
                    const event = {
                        _id: item._id,
                        title: item.title,
                        description: item.description,
                        category: item.category,
                        image: item.image,
                        price: item.price
                    };

                    if (category === "All" || category === item.category) {
                        return (
                            <EventItem 
                                key={item._id} 
                                image={item.image} 
                                name={item.title} 
                                desc={item.description} 
                                id={item._id} 
                                event={event}
                            />
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    )
}

export default EventDisplay