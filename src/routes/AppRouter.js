import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// my components
import DashboardRouter from './DashboardRouter';
import LoginScreen from '../components/login/LoginScreen';
import NotFound from '../components/404/NotFound';

import { GeneralContext } from '../GeneralContext';

const propTypes = {};
const defaultProps = {};

const AppRouter = () => {
    const [user, setUser] = useState({});
    const [active, setActive] = useState('')
    const [theme, setTheme] = useState('dark');

    return (
        <GeneralContext.Provider value={{
            user, setUser,
            theme, setTheme,
            active, setActive,
        }}
        >

            <Router>
                <Routes>
                    <Route exact path="/login" element={<LoginScreen />} />
                    <Route exact path="/*" element={<DashboardRouter />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>

        </GeneralContext.Provider >
    );
}

AppRouter.propTypes = propTypes;
AppRouter.defaultProps = defaultProps;

export default AppRouter;