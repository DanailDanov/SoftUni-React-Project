import { useContext } from 'react';

import { AuthContext } from '../../../../contexts/AuthContext';

import Card from 'react-bootstrap/Card';
import styles from './Profile.module.css';

export default function Profile() {

    const { auth } = useContext(AuthContext)

    console.log(auth);
    return (
        <div className={styles['container']}>
            <Card style={{ width: '23rem' }}>
                <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" />
                <Card.Body>
                    <Card.Title>Потребителско име: {auth.username}</Card.Title>
                    <Card.Title> E-mail адрес: {auth.email}</Card.Title>
                    {/* <Card.Text>
                        E-mail адрес: 
                    </Card.Text> */}
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div>
    );
}