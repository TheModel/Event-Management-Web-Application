import { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import EventDisplay from '../../components/EventDisplay/EventDisplay'
import AboutUs from '../../components/AppDownload/AboutUs'

const Home = () => {

  const [category,setCategory] = useState("All")
  
  return (
    <>
      <Header/>
      <ExploreMenu setCategory={setCategory} category={category}/>
      <EventDisplay category={category}/>
      <AboutUs/>
    </>
  )
}

export default Home
