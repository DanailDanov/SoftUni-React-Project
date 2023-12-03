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

    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, formValues);

    return (
        <div className={styles['login-form-container']}>
            <Form method='POST' onSubmit={onSubmit}>
                <Form.Group className='mb-3' controlId="formGroupUsername">
                    <Form.Label>Потребителско име:</Form.Label>
                    <Form.Control
                        type="text"
                        // placeholder="Password"
                        name='username'
                        value={values.username}
                        onChange={onChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Е-мейл адрес:</Form.Label>
                    <Form.Control
                        type="email"
                        name='email'
                        // placeholder="Enter email"
                        value={values.email}
                        onChange={onChange}

                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId="formGroupPassword">
                    <Form.Label>Парола:</Form.Label>
                    <Form.Control
                        type="password"
                        // placeholder="Password"
                        name='password'
                        value={values.password}
                        onChange={onChange}
                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId="formGroupRePassword">
                    <Form.Label>Повтори парола:</Form.Label>
                    <Form.Control
                        type="password"
                        // placeholder="Password"
                        name='rePassword'
                        value={values.rePassword}
                        onChange={onChange}
                    />
                </Form.Group>
                <Button as="input" type="submit" value="Submit" />
            </Form>
        </div>
    );
}