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

                    />
                </Form.Group>
                <Form.Group className='mb-3' controlId="formGroupPassword">
                    <Form.Label>Парола:</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name='password'
                        value={values.password}
                        onChange={onChange}
                    />
                </Form.Group>
                <Button as="input" type="submit" value="Submit" />
            </Form>
        </div>
    );
}