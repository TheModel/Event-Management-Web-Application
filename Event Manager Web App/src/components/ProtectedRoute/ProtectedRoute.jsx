import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'

const PrivateRoute = () => {
    const {loggedIn} = useContext(StoreContext)
    console.log(loggedIn)
    return(
        loggedIn ? <Outlet/> : <Navigate to="/signin"/>
    )
}

export default PrivateRoute