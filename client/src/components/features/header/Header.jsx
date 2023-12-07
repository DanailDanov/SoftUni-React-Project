import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import * as authApi from '../../../API/authApi';
import { AuthContext } from '../../../contexts/AuthContext';
import { ADMIN_ID } from '../../../core/environments/constants';

import Dropdown from 'react-bootstrap/Dropdown';
import styles from './Header.module.css';

export default function Header() {

    const navigate = useNavigate();

    const { auth, setAuth } = useContext(AuthContext);

    const [showDropdownNews, setShowDropdownNews] = useState(false);
    const [showDropdownTeams, setShowDropdownTeams] = useState(false);

    async function logoutHandler() {
        try {
            await authApi.logout();

            setAuth(null);

            navigate('/login');
        } catch (error) {

            setAuth(null);

            navigate('/login')
        }
    }

    const handleMouseEnterNews = () => {
        setShowDropdownNews(true);
    };

    const handleMouseLeaveNews = () => {
        setShowDropdownNews(false);
    };

    const handleMouseEnterTeams = () => {
        setShowDropdownTeams(true);
    };

    const handleMouseLeaveTeams = () => {
        setShowDropdownTeams(false);
    };

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
                            // AUTH
                            <>
                                <li><Dropdown style={{marginTop: '-0.2em'}} show={showDropdownNews} onMouseEnter={handleMouseEnterNews} onMouseLeave={handleMouseLeaveNews}>
                                    <Dropdown.Toggle style={{ backgroundColor: 'white', color: 'black', border: 'none', fontSize: '1em'}}  id="dropdown-basic">
                                        Новини
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item as={Link} to="/allNews">Всички новини</Dropdown.Item>
                                        {ADMIN_ID === auth?._id && (
                                            <Dropdown.Item as={Link} to="/createNews">Създай новина</Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown></li>
                                <li><Dropdown style={{marginTop: '-0.2em'}} show={showDropdownTeams} onMouseEnter={handleMouseEnterTeams} onMouseLeave={handleMouseLeaveTeams}>
                                    <Dropdown.Toggle style={{ backgroundColor: 'white', color: 'black', border: 'none', fontSize: '1em'}}>
                                        Отбори
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item as={Link} to="/allTeams">Всички отбори</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/createTeam">Създай отбор</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown></li>
                                <li><Link to={'/profile'}>Профил</Link></li>
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