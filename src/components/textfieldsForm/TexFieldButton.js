import React from 'react';
import { Form, InputGroup } from 'rsuite';



const TextFieldButton = ({ id,name, label, accepter, helpBlock, btnType, icon, ...rest }) => {
    return (
        <Form.Group controlId={id}>
            <InputGroup style={{ width: "100%"}}>
                <Form.Control
                    id={id}
                    name={name}
                    accepter={accepter}
                    {...rest}
                />
                <InputGroup.Button type={btnType}>
                    {icon}
                </InputGroup.Button>
            </InputGroup>
            <Form.HelpText>{helpBlock}</Form.HelpText>
        </Form.Group>
    )
}

export default TextFieldButton;