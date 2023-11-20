import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import styles from './createTeam.module.css';

export default function createTeam() {
    return (
        <div className={styles['create-form-container']}>
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Име на отбора</Form.Label>
                <Form.Control type="email" placeholder="Въведете име на отбора" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Дата на създаване</Form.Label>
                <Form.Control type="text" placeholder="Въведете дата на създаване" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Добави снимка:</Form.Label>
                <Form.Control type="text" placeholder="Добавете снимка" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Постижения</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Описание на отбора</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button as="input" type="submit" value="Създай" />
        </Form>
        </div>
    );
}