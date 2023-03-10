import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation()
    if(loading){
        return <h1>Loading...</h1>
    }
    if(user && user.uid){
        return children;
    }
  return <Navigate to="/login"></Navigate>
//   return <Navigate state={{from:location}} replace></Navigate>
}

export default PrivateRoute