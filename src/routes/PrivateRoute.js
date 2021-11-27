import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { GeneralContext } from '../GeneralContext';

export const PrivateRoute = ({ children }) => {
    const { user } = useContext(GeneralContext);

    return (user.logged)?children:<Navigate to="/login"/>;
}
