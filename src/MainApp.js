import React , { useEffect , useState , useReducer } from 'react';

import { authReducer } from './auth/authReducer';
import { GeneralContext } from './GeneralContext';
import AppRouter from './routes/AppRouter';


const init = () => {
    return JSON.parse(localStorage.getItem('userSession')) || { logged: false };
}

const MainApp = () => {
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
            <AppRouter />
        </GeneralContext.Provider>
    );
}

export default MainApp;