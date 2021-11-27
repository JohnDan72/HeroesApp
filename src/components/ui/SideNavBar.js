import React, { useContext, useState } from 'react';
// import PropTypes from 'prop-types';
import logoPath from '../../media/img/logoCircle.png';

import { IconButton, Nav, Sidebar, Sidenav } from 'rsuite';
import { GeneralContext } from '../../GeneralContext';
import { CustomNavLink } from './CustomNavLink';
import { types } from '../../types/types';
import { useNavigate } from 'react-router-dom';

// styles
import styles from './SideNavBar.module.css';

// icons
import { BsFillHouseFill, BsFillPersonFill, BsSearch } from 'react-icons/bs';
import { GiBatMask, GiMaskedSpider } from 'react-icons/gi';
import { MdColorLens, MdDarkMode, MdLightMode } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { ArrowLeftLine, ArrowRightLine } from '@rsuite/icons';


const SideNavBar = () => {
    const navigate = useNavigate();
    const [expanded, setExpanded] = useState(false);
    const { user , dispatch , setTheme , active , setActive } = useContext(GeneralContext);

    const handleLogout = () => {
        dispatch({
            type: types.logout
        });
        navigate('/login' , {
            replace: true
        });
        
    }

    return (
        <Sidebar className="hideSidebar"
            style={{ display: 'flex', flexDirection: 'column' }}
            width={expanded ? 220 : 56}
            collapsible >


            <Sidenav
                expanded={expanded}
                appearance="inverse"
            >
                <Sidenav.Body>
                    <div className={`v-a-middle ${styles.sideHeader}`}>
                        <img src={logoPath} alt="logo" height="50" />
                        <h5 className={ expanded ? 'ml-2' : 'hide'}>Heroes App</h5>
                    </div>

                    <Nav activeKey={active}
                        onSelect={setActive}>

                        <Nav.Item as={CustomNavLink} href="/" eventKey="" icon={<BsFillHouseFill />}>
                            Home
                        </Nav.Item>
                        <Nav.Item as={CustomNavLink} href="/dc" eventKey="dc" icon={<GiBatMask />}>DC</Nav.Item>
                        <Nav.Item as={CustomNavLink} href="/marvel" eventKey="marvel" icon={<GiMaskedSpider />}>Marvel</Nav.Item>

                        <Nav.Item as={CustomNavLink} href="/search" eventKey="search" icon={<BsSearch />}>Search</Nav.Item>

                        <Nav.Dropdown title="Theme" icon={<MdColorLens />}>
                            <Nav.Dropdown.Item icon={<MdLightMode />} eventKey='light' onClick={() => setTheme('light')}> Mode light</Nav.Dropdown.Item>
                            <Nav.Dropdown.Item icon={<MdDarkMode />} eventKey='dark' onClick={() => setTheme('dark')}> Mode dark</Nav.Dropdown.Item>
                        </Nav.Dropdown>

                        <Nav.Dropdown title={user.name} icon={<BsFillPersonFill />}>
                            <Nav.Dropdown.Item  icon={<FiLogOut />} onClick={handleLogout}>Logout</Nav.Dropdown.Item>
                        </Nav.Dropdown>

                        <IconButton icon={expanded ? <ArrowLeftLine /> : <ArrowRightLine />}
                            onClick={() => setExpanded(!expanded)}
                            appearance="primary"
                            style={{ width: '100%' }} />
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </Sidebar>
    );
}

export default SideNavBar;