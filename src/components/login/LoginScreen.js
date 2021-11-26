import React from 'react';
import { Carousel, Col, CustomProvider, FlexboxGrid } from 'rsuite';
// import PropTypes from 'prop-types';

import FormLogin from './FormLogin';

// styles
import styles from './LoginScreen.module.css';



const LoginScreen = () => {

    return (
        <CustomProvider theme="dark">
            <FlexboxGrid className={styles.allHeighWidth} justify="center">
                <FlexboxGrid.Item className="h-100" as={Col} xsHidden smHidden md={12} lg={14} >
                    <Carousel className="h-100 custom-slider" autoplay >
                        <div className={styles.carousel1} >
                            <div className="v-a-middle allHeightWidth" justify="center" >
                                <h4> Heroes App </h4>
                            </div>
                        </div>
                        <div className={styles.carousel5} >
                            <div className="v-a-middle allHeightWidth" justify="center" >
                                <h4> Los héroes que todo el mundo conoce al alcance de un click </h4>
                            </div>
                        </div>
                        <div className={styles.carousel6} >
                            <div className="v-a-middle allHeightWidth" justify="center" >
                                <h4> Lo mejor de Marvel y DC </h4>
                            </div>
                        </div>
                        <div className={styles.carousel2} >
                            <div className="v-a-middle allHeightWidth"
                                justify="center" >
                                <h4> Busca y encuentra las características de tu héroe favorito </h4>
                            </div>
                        </div>
                    </Carousel>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item as={Col} xs={22} md={12} lg={10} >
                    <FormLogin />
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </CustomProvider>


    );
}


export default LoginScreen;