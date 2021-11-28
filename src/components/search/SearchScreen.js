import React, { useMemo, useRef } from 'react';
import { Col, Divider, FlexboxGrid } from 'rsuite';
import queryString from "query-string";
import { useLocation, useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';
import HeroCard from '../hero/HeroCard';
import FormSearch from './FormSearch';

import { useForm } from '../../hooks/useForm';
import { getHeroesByText } from '../../selectors/getHeroesByText';

// icons
import { Icon } from '@rsuite/icons';
import { BiSearchAlt2 } from 'react-icons/bi';


const propTypes = {};
const defaultProps = {};

const SearchScreen = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { query = '' } = queryString.parse(location.search);

    const formRef = useRef();
    const { formValue, handleInputChange } = useForm({ search: query, input_2: '' , input_3: '' });
    const results = useMemo(() => getHeroesByText(query), [query]);


    const handleSearch = (status) => {
        // console.log(`Status: ${status}`);
        // console.log("search: " + formValue.search);
        if (status) {
            navigate(`?query=${formValue.search}`);
        }
    }

    return (
        <div className="container my-5">
            <Divider><Icon as={BiSearchAlt2} style={{ fontSize: '26px' }} /></Divider>
            <FlexboxGrid justify="center">
                <FlexboxGrid.Item as={Col} >
                    <h4>Búsqueda</h4>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item as={Col} xs={20}>
                    <FormSearch
                        formRef={formRef}
                        formValue={formValue}
                        handleSearch={handleSearch}
                        handleInputChange={handleInputChange} />
                </FlexboxGrid.Item>
            </FlexboxGrid>
            {
                (results.length > 0)
                    ? (<h5>Resultados ({results.length})</h5>)
                    : <h5>Sin Resultados</h5>
            }

            {
                results.map(hero => (
                    <FlexboxGrid.Item as={Col} className="mt-3" key={hero.id} >
                        <HeroCard {...hero} />
                    </FlexboxGrid.Item>
                ))
            }
        </div>
    );
}

SearchScreen.propTypes = propTypes;
SearchScreen.defaultProps = defaultProps;

export default SearchScreen;