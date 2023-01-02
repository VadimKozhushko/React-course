import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectAuth } from '../store/profile/selectors';


export const PublicRoute = ({ component }) => {
 
  return component ? component : <Outlet />;
};
