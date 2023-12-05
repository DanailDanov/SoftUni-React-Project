import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authApi from '../../../../API/authApi';

import { AuthContext } from '../../../../contexts/AuthContext';
import useForm from '../../../../hooks/useForm';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import styles from './register.module.css'

const registerInitialState = {
    username: '',
    email: '',
    password: '',
    rePassword: '',
};

export default function Register() {
    const navigate = useNavigate();

    const { setAuth } = useContext(AuthContext);

    const [formValues, setFormValues] = useState(registerInitialState);
    const [errors, setErrors] = useState({});
    const [hasServerError, setHasServerError] = useState(false);
    const [serverError, setServerError] = useState({});

    const resetFormHandler = () => {
        setFormValues(registerInitialState);
        setErrors({});
    };

    const registerSubmitHandler = (values) => {

        authApi.register(values)
            .then(user => {
                setAuth(user);
                navigate('/');
            })
            .catch(error => {
                setHasServerError(true);
                setServerError(error.message);
            });

        resetFormHandler();
    }

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

    const usernameValidator = () => {
        if (values.username.length < 5) {
            setErrors(state => ({
                ...state,
                username: 'Потребителското име трябва да бъде минимум 5 символа',
            }));
        } else {
            if (errors.username) {
                setErrors(state => ({ ...state, username: '' }));
            }
        }
    }

    const passwordValidator = () => {
        if (values.password.length < 5) {
            setErrors(state => ({
                ...state,
                password: 'Паролата трябва да бъде минимум 5 символа',
            }));
        } else {
            if (errors.password) {
                setErrors(state => ({ ...state, password: '' }));
            }
        }
    };


    const rePasswordValidator = () => {
        if (values.rePassword != values.password) {
            setErrors(state => ({
                ...state,
                rePassword: 'Паролите не съвпадат',
            }));
        } else {
            if (errors.rePassword) {
                setErrors(state => ({ ...state, rePassword: '' }));
            }
        }
    }

    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, formValues);

    return (
        <div className={styles['register-form-container']}>
            <Form method='POST' onSubmit={onSubmit}>
                <Form.Group className='mb-3' controlId="formGroupUsername">
                    <Form.Label>Потребителско име:</Form.Label>
                    <Form.Control
                        type="text"
                        // placeholder="Password"
                        name='username'
                        value={values.username}
                        onChange={onChange}
                        onBlur={usernameValidator}
                    />
                    {errors.username && (
                        <p className={styles.errorMessage}>{errors.username}</p>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Е-мейл адрес:</Form.Label>
                    <Form.Control
                        type="email"
                        name='email'
                        // placeholder="Enter email"
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
                        // placeholder="Password"
                        name='password'
                        value={values.password}
                        onChange={onChange}
                        onBlur={passwordValidator}
                    />
                    {errors.password && (
                        <p className={styles.errorMessage}>{errors.password}</p>
                    )}
                </Form.Group>
                <Form.Group className='mb-3' controlId="formGroupRePassword">
                    <Form.Label>Повтори парола:</Form.Label>
                    <Form.Control
                        type="password"
                        // placeholder="Password"
                        name='rePassword'
                        value={values.rePassword}
                        onChange={onChange}
                        onBlur={rePasswordValidator}
                    />
                    {errors.rePassword && (
                        <p className={styles.errorMessage}>{errors.rePassword}</p>
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