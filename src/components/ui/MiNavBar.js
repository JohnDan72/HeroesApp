import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { Nav, Navbar } from 'rsuite';
import { CustomNavLink } from './CustomNavLink';
import { GeneralContext } from '../../GeneralContext';

// react icons
import { BsFillPersonFill } from "react-icons/bs";
import { SiLooker } from "react-icons/si";
import { GiBatMask, GiMaskedSpider } from 'react-icons/gi';
import { MdColorLens, MdDarkMode, MdLightMode } from 'react-icons/md';



const propTypes = {};
const defaultProps = {};

const MiNavBar = () => {
    const { setTheme, active, setActive } = useContext(GeneralContext);

    return (

        <Navbar >
            <div className="container">
                <Navbar.Brand as={CustomNavLink} href="/">
                    Heroes App
                </Navbar.Brand>
                <Nav activeKey={active} onSelect={setActive}>
                    <Nav.Item as={CustomNavLink} href="/dc" eventKey="dc" icon={<GiBatMask />}>DC</Nav.Item>
                    <Nav.Item as={CustomNavLink} href="/marvel" eventKey="marvel" icon={<GiMaskedSpider />}>Marvel</Nav.Item>
                    <Nav.Item as={CustomNavLink} href="/search" eventKey="search" icon={<SiLooker />}>Search</Nav.Item>

                </Nav>
                <Nav pullRight activeKey={active} onSelect={setActive}>
                    <Nav.Dropdown title="Theme" icon={<MdColorLens />}>
                        <Nav.Dropdown.Item as={CustomNavLink} icon={<MdLightMode />} eventKey='light' onClick={() => setTheme('light')}> Mode light</Nav.Dropdown.Item>
                        <Nav.Dropdown.Item as={CustomNavLink} icon={<MdDarkMode />} eventKey='dark' onClick={() => setTheme('dark')}> Mode dark</Nav.Dropdown.Item>
                    </Nav.Dropdown>
                    <Nav.Item as={CustomNavLink} href="/login" icon={<BsFillPersonFill />}>Logout</Nav.Item>
                </Nav>

            </div>
        </Navbar>
    );
}

MiNavBar.propTypes = propTypes;
MiNavBar.defaultProps = defaultProps;

export default MiNavBar;