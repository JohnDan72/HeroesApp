import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'rsuite';

import TextFieldButton from '../textfieldsForm/TexFieldButton';
// form model
import searchModel from '../../models/search/searchModel';
// icons
import { Search } from '@rsuite/icons';


const propTypes = {
    handleSearch: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
};
const defaultProps = {};

const FormSearch = ({ handleSearch , handleInputChange , formRef , formValue}) => {

    return (
        <Form   ref={formRef}
                model={searchModel} 
                onSubmit={handleSearch} >
            <TextFieldButton
                name="search"
                value={formValue.search}
                icon={<Search />}
                placeholder="Busca tu héroe favorito"
                btnType="submit"
                onChange={(value) => handleInputChange({ name:"search" , value })} />

        </Form>
    );
}

FormSearch.propTypes = propTypes;
FormSearch.defaultProps = defaultProps;

export default FormSearch;