import React from 'react';
import PropTypes from 'prop-types';
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { Col, FlexboxGrid } from 'rsuite';
import HeroCard from './HeroCard';



const propTypes = {
    publisher: PropTypes.string
};
const defaultProps = {};


const HeroList = ({ publisher = '' }) => {
    const heroes = getHeroesByPublisher(publisher);
    return (

        <FlexboxGrid className="my-2" justify="center">
            {
                heroes.map(hero => (
                    <FlexboxGrid.Item as={Col} className="mt-3" key={hero.id} >
                        <HeroCard {...hero}/>
                    </FlexboxGrid.Item>
                ))
            }
        </FlexboxGrid>

    );
}

HeroList.propTypes = propTypes;
HeroList.defaultProps = defaultProps;

export default HeroList;