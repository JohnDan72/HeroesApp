import React from 'react';
// import PropTypes from 'prop-types';
import { Container, Content, Header } from 'rsuite';
import MiNavBar from './components/ui/MiNavBar';
import { Outlet } from 'react-router-dom';
import SideNavBar from './components/ui/SideNavBar';

const propTypes = {};
const defaultProps = {};


const HeroesApp = () => {
    return (
        <Container>

            <SideNavBar />
        
            <Container>
                <Header className="hideNav">
                    <MiNavBar />
                </Header>
                <Content>
                    <Outlet />
                </Content>
            </Container>
        </Container>
    );
}

HeroesApp.propTypes = propTypes;
HeroesApp.defaultProps = defaultProps;

export default HeroesApp;