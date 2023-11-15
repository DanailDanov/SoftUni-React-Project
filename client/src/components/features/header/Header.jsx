import { Link } from 'react-router-dom';

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
                        <li><Link className='nav-li-link' to="/login">Новини</Link></li>
                        <li><Link className='nav-li-link' to="/login">Създай Отбор</Link></li>
                        <li><Link className='nav-li-link' to="/login">Вход</Link></li>
                        <li><Link className='nav-li-link' to="/login">Регистрация</Link></li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}