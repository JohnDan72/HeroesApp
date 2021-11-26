import React, { useMemo } from 'react';
import styles from "./HeroScreen.module.css";
import { useParams, Navigate , useNavigate } from 'react-router-dom';
import { Button, Col, Divider, FlexboxGrid, Panel } from 'rsuite';
import { getHeroesById } from "../../selectors/getHeroesById";
// import PropTypes from 'prop-types';


const propTypes = {};
const defaultProps = {};

const HeroScreen = () => {
    // const [counter, setCounter] = useState(0);

    const navigate = useNavigate();
    const params = useParams();
    const { id_hero } = params;

    
    const heroInfo = useMemo(() => getHeroesById(id_hero), [id_hero]);

    if (!heroInfo) {
        return <Navigate to="/" />;
    }
    const { id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters } = heroInfo;
    let logoPath = `/assets/`
    logoPath += (publisher.startsWith('Marvel')) ? `marvelLogo.png`: `dcLogo.png`;
    
    const handleReturn = () => {
        navigate(-1 , {replace:false});
    }
    return (
        <div className="container my-5">
            
            {/* Prueba useMemo
            {counter} 
            <Button className="my-3" appearance="ghost" onClick={()=> setCounter(counter + 1)}>sumar</Button> */}


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
                                    <img src={logoPath} className={styles.logoImg} alt={superhero}/>
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
                                    <h4>Characters </h4>
                                    <p className="mb-4" >{characters}</p>
                                    <Button     color="blue" 
                                                appearance="ghost" 
                                                onClick={handleReturn}>regresar</Button>
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