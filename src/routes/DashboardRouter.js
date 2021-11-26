import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
// context
import { GeneralContext } from '../GeneralContext';
// my components
import DCScreen from '../components/dc/DCScreen';
import HomePage from '../components/home/HomePage';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SearchScreen from '../components/search/SearchScreen';
import HeroScreen from '../components/hero/HeroScreen';
import HeroesApp from '../HeroesApp';
import { CustomProvider } from 'rsuite';

const DashboardRouter = () => {
    const { theme } = useContext(GeneralContext)

    return (
        <CustomProvider theme={theme}>
            <Routes>
                <Route path="" element={<HeroesApp />}>
                    <Route index element={<HomePage />} />
                    <Route path="dc" element={<DCScreen />} />
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="search" element={<SearchScreen />} />
                    <Route path="hero/:id_hero" element={<HeroScreen />} />
                </Route>
            </Routes>
        </CustomProvider>
    );
}

export default DashboardRouter;