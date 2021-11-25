import React from 'react';
import { Routes, Route } from 'react-router-dom';
// my components
import DCScreen from '../components/dc/DCScreen';
import HomePage from '../components/home/HomePage';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SearchScreen from '../components/search/SearchScreen';
import HeroScreen from '../components/hero/HeroScreen';
import HeroesApp from '../HeroesApp';

const DashboardRouter = () => {
    return (
        <Routes>
            <Route path="" element={<HeroesApp />}>
                <Route index element={<HomePage /> }/>
                <Route path="dc" element={<DCScreen />} />
                <Route path="marvel" element={<MarvelScreen />} />
                <Route path="search" element={<SearchScreen />} />
                <Route path="hero" element={<HeroScreen />} />
            </Route>
        </Routes>
    );
}

export default DashboardRouter;