import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {

    let auth = JSON.parse(localStorage.getItem('profile'));

    return(
        auth?.result ? <Outlet/> : <Navigate to="/loginPage"/>
    )
}

export default PrivateRoutes