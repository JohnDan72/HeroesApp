import React from 'react';
import { Breadcrumb, Divider } from 'rsuite';
import HeroList from '../hero/HeroList';
import styles from "../Common.module.css";

const HomePage = () => {
    return (
        <>
            <div className={`${styles.bgImg1} v-a-middle`} >
                <Breadcrumb className="container">
                    <Breadcrumb.Item active className={`${styles.breadcrumbText}`}>
                        Home
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="container mt-5">
                <Divider></Divider>
                <HeroList publisher="" />
            </div>
        </>
    );
}

export default HomePage;