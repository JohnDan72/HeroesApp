import React from 'react';
import { Form } from 'rsuite';



const TextField = ({name, label, accepter, helpBlock, ...rest}) => {
    return (
        <Form.Group>
            <Form.ControlLabel>{label}</Form.ControlLabel>
            <Form.Control name={name} accepter={accepter} {...rest} />
            <Form.HelpText>{helpBlock}</Form.HelpText>
        </Form.Group>
    )
}

export default TextField;