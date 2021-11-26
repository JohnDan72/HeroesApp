import React from 'react';
import { Breadcrumb, Divider } from 'rsuite';
import styles from "../Common.module.css";
import HeroList from '../hero/HeroList';
import { CustomNavLink } from '../ui/CustomNavLink';
// import PropTypes from 'prop-types';

const propTypes = {};
const defaultProps = {};

const MarvelScreen = () => {
    return (
        <>
            <div className={`${styles.bgImg2} v-a-middle`} >
                <Breadcrumb className={`container ${styles.breadcrumbText}`}>
                    <Breadcrumb.Item as={CustomNavLink} href="/" >
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        Marvel
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="container mt-5">
                <Divider></Divider>
                <HeroList publisher="Marvel Comics" />
            </div>
        </>
    );
}

MarvelScreen.propTypes = propTypes;
MarvelScreen.defaultProps = defaultProps;

export default MarvelScreen;