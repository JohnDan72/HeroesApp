import React from 'react';
import { Button, ButtonToolbar, Col, Divider, FlexboxGrid, Form } from 'rsuite';
// icons
import { BiSend } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';
import { MdAccountCircle } from 'react-icons/md';


// import PropTypes from 'prop-types';

import TextField from './TexField';

// logo
import logo from "../../media/img/logo.png";
import styles from "./FormLogin.module.css";
import model from '../../models/login/formModel';



const propTypes = {};
const defaultProps = {};


const FormLogin = () => {
    const handleLogin = (status) => {
        console.log("Login!!!");
        console.log(status);
    }

    return (
        <div className="container mt-5">
            <FlexboxGrid justify="center">
                {/* logo */}
                <FlexboxGrid.Item as={Col} xs={24}>
                    <img src={logo} className={styles.imgStyle} alt="logo" />
                </FlexboxGrid.Item>
                {/* título */}
                <FlexboxGrid.Item as={Col} xs={24} className="mt-3">
                    <h4 className={styles.textCenter}>Bienvenido a Heroes App</h4>
                </FlexboxGrid.Item>
                {/* form */}
                <FlexboxGrid.Item as={Col} xs={20} sm={18} md={12} className="mt-5">
                    <Form
                        // ref={formRef}
                        // onChange={setFormValue}
                        // onCheck={setFormError}
                        // formValue={formValue}
                        onSubmit={handleLogin}
                        fluid
                        model={model}
                    >

                        <TextField name="email" label="Email" autoComplete="off" />
                        <TextField name="password"
                            label="Password"
                            type="password"
                            autoComplete="off"
                            helpBlock={
                                <span className={styles.forgotDiv}>
                                    <Button appearance="link" size="xs" type="button">
                                        ¿Olvidaste tu contraseña?
                                    </Button>
                                </span>

                            } />

                        <ButtonToolbar className="mt-5">
                            <Button appearance="primary" type="submit" block className={styles.centerButton}>
                                Submit
                                <BiSend style={{ marginLeft: '10px' }} />
                            </Button>

                        </ButtonToolbar>
                    </Form>
                </FlexboxGrid.Item>
                {/* divider */}
                <FlexboxGrid.Item as={Col} xs={20} sm={18} md={13} className="mt-4" >
                    <Divider> ó </Divider>
                </FlexboxGrid.Item>
                {/* google sign */}
                <FlexboxGrid.Item as={Col} xs={24} className={`mt-4 ${styles.googleDiv}`} >
                    <Button appearance="link" type="button">
                        <FcGoogle />
                        Sign with Google
                    </Button>
                </FlexboxGrid.Item>
                {/* create account */}
                <FlexboxGrid.Item as={Col} xs={24} className={`mt-4 ${styles.googleDiv}`} >
                    <span className={styles.newAccount}>
                    Nuevo en Heroes App?
                        <Button appearance="link" size="sm" type="button">
                        Crea una cuenta
                        </Button>
                    </span>
                    
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </div>
    )
}


FormLogin.propTypes = propTypes;
FormLogin.defaultProps = defaultProps;

export default FormLogin;