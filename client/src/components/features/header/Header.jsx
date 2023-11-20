import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import styles from './Header.module.css';

export default function Header() {
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
                        <li><Link to="/login">Вход</Link></li>
                        <li><Link to="/register">Регистрация</Link></li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}