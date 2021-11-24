import React, { useContext, useState } from 'react';
// import PropTypes from 'prop-types';
import { Divider, IconButton, Nav, Sidebar, Sidenav } from 'rsuite';
import { GeneralContext } from '../../GeneralContext';
import { CustomNavLink } from './CustomNavLink';

// styles
import styles from './SideNavBar.module.css';

// icons
import { Icon } from '@rsuite/icons';
import { BsFillHouseFill, BsFillPersonFill } from 'react-icons/bs';
import { SiLooker } from 'react-icons/si';
import { GiBatMask, GiMaskedSpider, GiSpiderMask } from 'react-icons/gi';
import { MdColorLens, MdDarkMode, MdLightMode } from 'react-icons/md';
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
            >
                <Sidenav.Body>
                    <div className={`v-a-middle ${styles.sideHeader}`}>
                        <Icon as={GiSpiderMask} style={{ fontSize: '36px' }} />
                        <h5 className={ expanded ? '':'hide'}>Heroes App</h5>
                    </div>
                    <Divider></Divider>
                    <Nav    activeKey={active}
                            onSelect={setActive}>

                        <Nav.Item as={CustomNavLink} href="/" eventKey="" icon={<BsFillHouseFill />}>
                            Home
                        </Nav.Item>
                        <Nav.Item as={CustomNavLink} href="/dc" eventKey="dc" icon={<GiBatMask />}>DC</Nav.Item>
                        <Nav.Item as={CustomNavLink} href="/marvel" eventKey="marvel" icon={<GiMaskedSpider />}>Marvel</Nav.Item>
                        <Nav.Item as={CustomNavLink} href="/search" eventKey="search" icon={<SiLooker />}>Search</Nav.Item>

                        <Nav.Dropdown title="Theme" icon={<MdColorLens/>}>
                            <Nav.Dropdown.Item icon={<MdLightMode />} eventKey='light' onClick={() => setTheme('light')}> Mode light</Nav.Dropdown.Item>
                            <Nav.Dropdown.Item icon={<MdDarkMode />} eventKey='dark' onClick={() => setTheme('dark')}> Mode dark</Nav.Dropdown.Item>
                        </Nav.Dropdown>

                        <Nav.Item as={CustomNavLink} href="/login" icon={<BsFillPersonFill />}>Logout</Nav.Item>
                        <IconButton icon={expanded ? <ArrowLeftLine /> : <ArrowRightLine />}
                            onClick={() => setExpanded(!expanded)}
                            appearance="subtle"
                            style={{ width: '100%' }} />
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </Sidebar>
    );
}

export default SideNavBar;