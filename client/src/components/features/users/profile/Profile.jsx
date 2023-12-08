import { useContext, useEffect } from 'react';

import { AuthContext } from '../../../../contexts/AuthContext';

import Card from 'react-bootstrap/Card';
import styles from './Profile.module.css';

export default function Profile() {

    const { auth } = useContext(AuthContext)

    useEffect(() => {
        document.title = 'Профил';
    });
    return (
        <div className={styles['container']}>
            <Card style={{ width: '25rem', border: '2px solid #3B91C1', boxShadow: '5px 5px 5px gray' }}>
                <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg" />
                <Card.Body>
                    <Card.Title>Потребителско име: <span style={{ color: '#3B91C1' }}>{auth.username}</span> </Card.Title>
                    <Card.Title> E-mail адрес: <span style={{ color: '#3B91C1' }}>{auth.email}</span></Card.Title>
                    {/* <Card.Text>
                        E-mail адрес: 
                    </Card.Text> */}
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div>
    );
}