import React from 'react';
import PropTypes from 'prop-types';
import JSONTree from 'react-json-tree';
// const { Paragraph } = Placeholder;


const propTypes = {
    formValue: PropTypes.object.isRequired
};

const defaultProps = {
    formValue: {
        name: 'Juan',
        email: 'juan@gmail.com',
        password: '123456'
    }
};

/**
 * 
 */
const JSONView = ({formValue}) => {
    return (
            <JSONTree data={formValue} />
    );
}

JSONView.propTypes = propTypes;
JSONView.defaultProps = defaultProps;
// #endregion

export default JSONView;