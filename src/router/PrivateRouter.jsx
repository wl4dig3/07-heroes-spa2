import {useContext} from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../auth'

export const PrivateRouter = ({children}) => {
    const {logged} = useContext(AuthContext);
    const {pathname, search} = useLocation();
    const lastPath = pathname + search;
    console.log('re-render');

    localStorage.setItem('lastPath', lastPath);
  return (logged) 
  ? children
  : <Navigate to="/login" />

}
