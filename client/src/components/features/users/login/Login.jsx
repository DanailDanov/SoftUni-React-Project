import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import styles from './login.module.css'

export default function Login() {
    return (
        <div className={styles['login-form-container']}>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Е-мейл адрес:</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className='mb-3' controlId="formGroupPassword">
                    <Form.Label>Парола:</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className={styles['submit-btn']} as="input" type="submit" value="Submit" />
            </Form>
        </div>
    );
}