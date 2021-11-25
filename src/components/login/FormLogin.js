import React from 'react';
import { Button, ButtonToolbar, Col, FlexboxGrid, Form } from 'rsuite';
// import PropTypes from 'prop-types';

import TextField from './TexField';

// logo
import logo from "../../media/img/logo.png";
import style from "./FormLogin.module.css";
import model from '../../models/login/formModel';



const propTypes = {};
const defaultProps = {};


const FormLogin = () => {
    const handleLogin = () => {

    }

    return (
        <div className="container mt-5">
            <FlexboxGrid justify="center">
                <FlexboxGrid.Item as={Col} xs={24}>
                    <img src={logo} className={style.imgStyle} alt="logo" />
                </FlexboxGrid.Item>
                <FlexboxGrid.Item as={Col} xs={24} className="mt-3">
                    <h4 className={style.textCenter}>Bienvenido a Heroes App</h4>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item as={Col} xs={24} className="mt-3">
                    <Form
                        // ref={formRef}
                        // onChange={setFormValue}
                        // onCheck={setFormError}
                        // formValue={formValue}
                        model={model}
                    >
                        <TextField name="email" label="Email" />
                        <TextField name="password" label="Password" type="password" autoComplete="off" />

                        <ButtonToolbar>
                            <Button appearance="primary" type="submit" >
                                Submit
                            </Button>

                        </ButtonToolbar>
                    </Form>
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </div>
    )
}


FormLogin.propTypes = propTypes;
FormLogin.defaultProps = defaultProps;

export default FormLogin;