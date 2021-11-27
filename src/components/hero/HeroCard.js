import React from 'react';
import styles from "./HeroCard.module.css";
import PropTypes from 'prop-types';
import { Button, Panel } from 'rsuite';
import { useNavigate } from 'react-router-dom';

const propTypes = {
    id: PropTypes.string,
    superhero: PropTypes.string,
    publisher: PropTypes.string,
    alter_ego: PropTypes.string,
    first_appearance: PropTypes.string,
    characters: PropTypes.string,
};
const defaultProps = {};

const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        return navigate(`/hero/${id}`)
    }

    const imagPath = `/assets/${id}.jpg`;
    return (
        <Panel bodyFill className={`${styles.rsPanel} animate__animated animate__fadeIn`}>
            <img src={imagPath} className={styles.imgCard} alt={superhero} />
            <Panel>
                <Button appearance="subtle" onClick={handleClick}>{superhero}</Button>
            </Panel>
        </Panel>
    );
}


HeroCard.propTypes = propTypes;
HeroCard.defaultProps = defaultProps;
// #endregion

export default HeroCard;