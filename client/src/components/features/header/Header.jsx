import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import * as authApi from '../../../API/authApi';
import { AuthContext } from '../../../contexts/AuthContext';


import Dropdown from 'react-bootstrap/Dropdown';
import styles from './Header.module.css';

export default function Header() {

    const navigate = useNavigate();

    const { auth, setAuth } = useContext(AuthContext);

    async function logoutHandler() {
        try {
            await authApi.logout();

            console.log('danchoooooo');
            setAuth(null);

            navigate('/');
        } catch (error) {

            setAuth(null);

            navigate('/login')
        }
    }

    return (
        <header className={styles['main-header']}>
            <div className={styles.container} >
                <div className={styles['logo-heading']}>
                    <div className={styles.logo}>
                        <Link to="/">
                            <img src="https://bamf.bg/assets/img/img-client/main_logo-min.png" alt="" />
                        </Link>
                    </div>
                    <h1 className={styles['main-heading']}>Българска асоциация мини футбол</h1>
                </div>


                <nav className={styles['main-nav']}>
                    <ul className={styles['nav-ul']}>

                        {auth ?
                            <>
                                <li><Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Новини
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item as={Link} to="/allNews">Всички новини</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/createNews">Създай новина</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown></li>
                                <li><Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Отбори
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item as={Link} to="/allTeams">Всички отбори</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/createTeam">Създай отбор</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown></li>
                                <li onClick={logoutHandler}><Link >Изход</Link></li>

                            </>
                            // GUEST
                            : <>
                                <li><Link to="/allNews">Новини</Link></li>
                                <li><Link to="/allTeams">Всички отбори</Link></li>

                                <li><Link to="/login">Вход</Link></li>
                                <li><Link to="/register">Регистрация</Link></li>
                            </>
                        }
                    </ul>
                </nav>

            </div>
        </header>
    )
}