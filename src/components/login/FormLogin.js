import React, { useContext } from 'react';
// import JSONView from '../ui/JSONView';
import { Button, ButtonToolbar, Col, Divider, FlexboxGrid, Form, Loader, Message } from 'rsuite';
import { useNavigate } from 'react-router-dom'
// icons
import { BiSend } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';


// import PropTypes from 'prop-types';

import TextField from '../textfieldsForm/TexField';

// logo
import logo from "../../media/img/logo.png";
import styles from "./FormLogin.module.css";
import model from '../../models/login/formModel';
import { loginUser } from '../../selectors/loginUser';
import { useForm } from '../../hooks/useForm';
import { GeneralContext } from '../../GeneralContext';
import { types } from '../../types/types';



const propTypes = {};
const defaultProps = {};


const FormLogin = () => {
    const navigate = useNavigate();

    const { formValue, handleInputChange, setFormError, setLoading , resetForm } = useForm({
        email: 'juan1@gmail.com',
        password: 'xdlol1234'
    });
    const { status: status_error, error_msg } = formValue.error;
    const { loading, email, password } = formValue;

    const { dispatch } = useContext(GeneralContext);

    const handleLogin = (formStatus) => {
        if (formStatus) {
            setLoading(true); //load while authenticate

            // NOTA:    tener cuidado con funciones async 
            //          ya que no funciona bien por el cambio 
            //          de state en PublicRoute
            loginUser(email, password)
                .then(userData => {
                    if (userData) {
                        resetForm();
                        dispatch({ type: types.login, payload: userData });

                        const lastPath = localStorage.getItem('lastPath') || '/marvel';

                        navigate(lastPath, {
                            replace: true
                        });
                    }
                    else {
                        setFormError(true, 'Email y/o password incorrectos');
                    }
                });

        }
    }

    return (
        <div className="container mt-5">
            {/* <JSONView formValue={formValue} /> */}
            <FlexboxGrid justify="center">
                {/* logo */}
                <FlexboxGrid.Item as={Col} xs={24}>
                    <img src={logo} className={styles.imgStyle} alt="logo" />
                </FlexboxGrid.Item>
                {/* título */}
                <FlexboxGrid.Item as={Col} xs={24} className="mt-3">
                    <h4 id="id_bienvenida" className={styles.textCenter}>Bienvenido a Heroes App</h4>
                </FlexboxGrid.Item>
                {/* form */}
                <FlexboxGrid.Item as={Col} xs={20} sm={18} md={12} className="mt-5">
                    <Form
                        // ref={formRef}
                        formValue={{ email, password }}
                        onSubmit={handleLogin}
                        fluid
                        model={model}
                    >

                        <TextField name="email"
                            label="Email"
                            value={email}
                            onChange={(value) => handleInputChange({ name: 'email', value })} />
                        <TextField name="password"
                            label="Password"
                            value={password}
                            type="password"
                            autoComplete="off"
                            helpBlock={
                                <span className={styles.forgotDiv}>
                                    <Button appearance="link" size="xs" type="button">
                                        ¿Olvidaste tu contraseña?
                                    </Button>
                                </span>

                            } onChange={(value) => handleInputChange({ name: 'password', value })} />

                        {   //se muestra loading o button si esta cargando
                            loading
                                ? (
                                    <div className={styles.loadingStyle}>
                                        <Loader size="md" />
                                    </div>
                                )
                                : (
                                    <ButtonToolbar className="mt-5">
                                        <Button appearance="primary" type="submit" block className={styles.centerButton}>
                                            Submit
                                            <BiSend style={{ marginLeft: '10px' }} />
                                        </Button>
                                    </ButtonToolbar>
                                )
                        }

                    </Form>
                </FlexboxGrid.Item>
                {/* divider */}
                <FlexboxGrid.Item as={Col} xs={20} sm={18} md={13} className="mt-4" >
                    {
                        status_error &&
                        <Message showIcon type="error">
                            {error_msg}
                        </Message>
                    }
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