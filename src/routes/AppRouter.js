import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// my components
import DashboardRouter from './DashboardRouter';
import LoginScreen from '../components/login/LoginScreen';
import NotFound from '../components/404/NotFound';

import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const propTypes = {};
const defaultProps = {};



const AppRouter = () => {


    return (
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

    );
}

AppRouter.propTypes = propTypes;
AppRouter.defaultProps = defaultProps;

export default AppRouter;