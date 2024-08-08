import { Navigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function ProtectedRoute({ isLoggedIn, children}) {
    if(!isLoggedIn){
        return <Navigate to="/Login"/>
    }

    return children
}

export default ProtectedRoute