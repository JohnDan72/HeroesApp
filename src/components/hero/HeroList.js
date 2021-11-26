import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { Button, Col, FlexboxGrid } from 'rsuite';
import HeroCard from './HeroCard';



const propTypes = {
    publisher: PropTypes.string
};
const defaultProps = {};


const HeroList = ({ publisher = '' }) => {
    const [counter, setCounter] = useState(0);


    const heroes = useMemo(() => getHeroesByPublisher(publisher) , [publisher]);
    return (

        <FlexboxGrid className="my-2" justify="center">
            {/* Prueba useMemo */}
            {counter} 
            <Button className="my-3" appearance="ghost" onClick={()=> setCounter(counter + 1)}>sumar</Button>

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