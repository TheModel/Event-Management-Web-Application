import './List.css'


const List = () => {

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
        </div>
    </div>
    
  )
}


export default List
