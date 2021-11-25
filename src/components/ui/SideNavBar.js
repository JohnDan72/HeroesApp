import React, { useContext, useState } from 'react';
// import PropTypes from 'prop-types';
import { IconButton, Nav, Sidebar, Sidenav } from 'rsuite';
import { GeneralContext } from '../../GeneralContext';
import { CustomNavLink } from './CustomNavLink';

// styles
import styles from './SideNavBar.module.css';

// icons
import { Icon } from '@rsuite/icons';
import { BsFillHouseFill, BsFillPersonFill , BsSearch } from 'react-icons/bs';
import { GiBatMask, GiDominoMask, GiMaskedSpider, GiSpiderMask } from 'react-icons/gi';
import { MdColorLens, MdDarkMode, MdLightMode } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { ArrowLeftLine, ArrowRightLine } from '@rsuite/icons';


const SideNavBar = () => {
    const [expanded, setExpanded] = useState(false);
    const { setTheme, active, setActive } = useContext(GeneralContext);

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
                        <Icon as={GiSpiderMask} style={{ fontSize: '36px' }} />
                        <h5 className={expanded ? '' : 'hide'}>Heroes App</h5>
                    </div>

                    <Nav activeKey={active}
                        onSelect={setActive}>

                        <Nav.Item as={CustomNavLink} href="/" eventKey="" icon={<BsFillHouseFill />}>
                            Home
                        </Nav.Item>
                        <Nav.Item as={CustomNavLink} href="/dc" eventKey="dc" icon={<GiBatMask />}>DC</Nav.Item>
                        <Nav.Item as={CustomNavLink} href="/marvel" eventKey="marvel" icon={<GiMaskedSpider />}>Marvel</Nav.Item>
                        <Nav.Item as={CustomNavLink} href="/hero" eventKey="hero" icon={<GiDominoMask />}>Hero</Nav.Item>
                        
                        <Nav.Item as={CustomNavLink} href="/search" eventKey="search" icon={<BsSearch />}>Search</Nav.Item>

                        <Nav.Dropdown title="Theme" icon={<MdColorLens />}>
                            <Nav.Dropdown.Item icon={<MdLightMode />} eventKey='light' onClick={() => setTheme('light')}> Mode light</Nav.Dropdown.Item>
                            <Nav.Dropdown.Item icon={<MdDarkMode />} eventKey='dark' onClick={() => setTheme('dark')}> Mode dark</Nav.Dropdown.Item>
                        </Nav.Dropdown>

                        <Nav.Dropdown title="Account" icon={<BsFillPersonFill />}>
                            <Nav.Dropdown.Item as={CustomNavLink} href="/login" icon={<FiLogOut />}>Logout</Nav.Dropdown.Item>
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