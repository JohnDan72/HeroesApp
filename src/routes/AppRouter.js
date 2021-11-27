import React, { useEffect, useReducer, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// my components
import DashboardRouter from './DashboardRouter';
import LoginScreen from '../components/login/LoginScreen';
import NotFound from '../components/404/NotFound';

import { GeneralContext } from '../GeneralContext';
import { authReducer } from '../auth/authReducer';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const propTypes = {};
const defaultProps = {};

const init = () => {
    return JSON.parse(localStorage.getItem('userSession')) || { logged: false };
}

const AppRouter = () => {
    const [user, dispatch] = useReducer(authReducer, {}, init);

    const [active, setActive] = useState('')
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        if (!user) return;
        localStorage.setItem('userSession', JSON.stringify(user));
    }, [user])

    return (
        <GeneralContext.Provider value={{
            user, dispatch,
            theme, setTheme,
            active, setActive,
        }}
        >

            <Router>
                <Routes>
                    <Route exact
                        path="/login"
                        element={
                            <PublicRoute>
                                <LoginScreen />
                            </PublicRoute>
                        } />
                    <Route exact
                        path="/*"
                        element={
                            <PrivateRoute>
                                <DashboardRouter />
                            </PrivateRoute>
                        } />
                    <Route path="*"
                        element={<NotFound />} />
                </Routes>
            </Router>

        </GeneralContext.Provider >
    );
}

AppRouter.propTypes = propTypes;
AppRouter.defaultProps = defaultProps;

export default AppRouter;