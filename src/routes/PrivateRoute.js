import React, { useContext } from 'react';
import { Navigate , useLocation } from 'react-router-dom';
import { GeneralContext } from '../GeneralContext';

export const PrivateRoute = ({ children }) => {
    const { user } = useContext(GeneralContext);
    const location = useLocation();

    const { pathname , search } = location;

    localStorage.setItem('lastPath', `${pathname}${search}`);

    return (user.logged)?children:<Navigate to="/login" />;
}
