import React from 'react';
import styles from "./HeroScreen.module.css";
import { useParams, Navigate } from 'react-router-dom';
import { Col, Divider, FlexboxGrid, Panel } from 'rsuite';
import { getHeroesById } from "../../selectors/getHeroesById";
// import PropTypes from 'prop-types';


const propTypes = {};
const defaultProps = {};

const HeroScreen = () => {
    const params = useParams();
    const { id_hero } = params;
    const heroInfo = getHeroesById(id_hero);
    const { id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters } = heroInfo;

    if (!heroInfo) {
        return <Navigate to="/" />;
    }

    let logoPath = `/assets/`
    logoPath += (publisher.startsWith('Marvel')) ? `marvelLogo.png`: `dcLogo.png`;

    console.log(heroInfo)
    return (
        <div className="container my-5">
            <Panel style={{ width: "100%" }} bodyFill>
                <FlexboxGrid justify="center">
                    <FlexboxGrid.Item as={Col}  className={styles.heroImgDiv}>
                        <img className={`${styles.heroImg}`} src={`/assets/${id}.jpg`} alt={superhero} />
                    </FlexboxGrid.Item>
                    <FlexboxGrid.Item as={Col} xs={22} sm={20} md={10} className={`${styles.heroContent} `}>
                        <div className={`container my-4`} >
                            <FlexboxGrid align="middle" >
                                <FlexboxGrid.Item as={Col} xs={16}>
                                    <h2>{superhero}</h2>
                                    <h5>{publisher}</h5>
                                    <Divider className={styles.bgDivider}></Divider>
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item as={Col} xs={8} className={styles.logoDiv}>
                                    <img src={logoPath} className={styles.logoImg}/>
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item as={Col} xs={24}>
                                    <h4>Primera aparición </h4>
                                    <h5>{first_appearance}</h5>
                                    <Divider className={styles.bgDivider}></Divider>
                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item as={Col} xs={24}>
                                    <h4>Alter Ego </h4>
                                    <h5>{alter_ego}</h5>
                                    <Divider className={styles.bgDivider}></Divider>

                                </FlexboxGrid.Item>
                                <FlexboxGrid.Item as={Col} xs={24}>
                                    <h4>Characters </h4>
                                    <p>{characters}</p>
                                </FlexboxGrid.Item>
                            </FlexboxGrid>
                        </div>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </Panel>
        </div>
    );
}

HeroScreen.propTypes = propTypes;
HeroScreen.defaultProps = defaultProps;

export default HeroScreen;