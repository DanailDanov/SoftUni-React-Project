import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authApi from '../../../../API/authApi';

import { AuthContext } from '../../../../contexts/AuthContext';
import useForm from '../../../../hooks/useForm';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import styles from './login.module.css'

const loginInitialState = {
    email: '',
    password: '',
};

// const LoginFormKyes = {
//     Email: 'email',
//     Password: 'password',
// };

export default function Login() {

    const navigate = useNavigate();

    const { setAuth } = useContext(AuthContext);

    // const { loginSubmitHandler } = useContext(AuthContext);

    // const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    //     [LoginFormKyes.Email]: '',
    //     [LoginFormKyes.Password]: '',
    // });

    const [formValues, setFormValues] = useState(loginInitialState);
    const [errors, setErrors] = useState({});
    const [hasServerError, setHasServerError] = useState(false);
    const [serverError, setServerError] = useState({});

    const resetFormHandler = () => {
        setFormValues(loginInitialState);
        setErrors({});
    };

    const loginSubmitHandler = (values) => {

        authApi.login(values)
            .then(user => {
                console.log(user, 'dancho');
                setAuth(user);
                navigate('/');
            })
            .catch(error => {
                setHasServerError(true);
                setServerError(error.message)
                console.log(error.message);
            });

        resetFormHandler();
    };

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const emailValidator = () => {
        if (!validateEmail(values.email)) {
            setErrors(state => ({
                ...state,
                email: 'Email адреса не е валиден'
            }))
        } else {
            if (errors.email) {
                setErrors(state => ({ ...state, email: '' }));
            }
        }
    };

    const passwordValidator = () => {
        if(values.password.length < 5) {
            setErrors(state => ({
                ...state,
                password: 'Паролата трябва да бъде минимум 5 символа',
            }));
        } else {
            if (errors.password) {
                setErrors(state => ({ ...state, password: ''}));
            }
        }
    }
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, formValues);

    // console.log(values);

    return (
        <div className={styles['login-form-container']}>
            <Form method='POST' onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Е-мейл адрес:</Form.Label>
                    <Form.Control
                        type="email"
                        name='email'
                        placeholder="Enter email"
                        value={values.email}
                        onChange={onChange}
                        onBlur={emailValidator}
                    />
                    {errors.email && (
                        <p className={styles.errorMessage}>{errors.email}</p>
                    )}
                </Form.Group>
                <Form.Group className='mb-3' controlId="formGroupPassword">
                    <Form.Label>Парола:</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name='password'
                        value={values.password}
                        onChange={onChange}
                        onBlur={passwordValidator}
                    />
                      {errors.password && (
                        <p className={styles.errorMessage}>{errors.password}</p>
                    )}
                </Form.Group>
                <Button as="input" type="submit" value="Submit"
                disabled={(Object.values(errors).some(x => x) 
                    || (Object.values(values).some(x => x == '')))}
                />

                {hasServerError && (
                    <p className={styles.serverError}>{serverError}</p>
                )}
            </Form>
        </div>
    );
}