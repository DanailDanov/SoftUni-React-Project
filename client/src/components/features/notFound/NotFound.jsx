import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import styles from './NotFound.module.css';

export default function NotFound() {
    return (
        <div className={styles['container']}>
            <div className={styles['not-found-container']}>

                <h1 className={styles['main-heading']} >
                    404
                </h1>
                <h1 className={styles['not-found-heading']}>
                    Страницата не е намерена.
                </h1>
                <Button className={styles['btn']} as={Link} to={'/'} variant="success">Начало</Button>
            </div>
        </div>
    );
}