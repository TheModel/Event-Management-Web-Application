import './List.css'
import  { useContext } from 'react'
import {StoreContext} from '../../Context/StoreContext'
const List = () => {

  const {event_list,user} = useContext(StoreContext);

  return (
    <div className='list add flex-col'>
        <p className='my-paragraph'>My Added Events</p>

        <div className='list-table'>
        <div className="list-table-format title">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Action</b>
          </div>
          {event_list.map((item)=>{
          if (item.email === user) {
            return (
              <div key={item._id} className="list-table-format title">
                <img src={item.img}/>
                <span>{item.title}</span>
                <span>{item.description}</span>
                <span>{item.category}</span>
              </div>
              
            ) 
          }
        })}
         
        </div>
    </div>
    
  )
}

export default List
