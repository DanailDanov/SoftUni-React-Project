import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles['main-header']}>
            <div className={styles.container} >
                <div className={styles['logo-heading']}>
                    <div className={styles.logo}>
                        <img src="https://bamf.bg/assets/img/img-client/main_logo-min.png" alt="" />
                    </div>
                    <h1 className={styles['main-heading']}>Българска асоциация мини футбол</h1>
                </div>
               
                <nav className={styles['main-nav']}>
                    <ul className={styles['nav-ul']}>
                        <li>Създай отбор</li>
                        <li>Вход</li>
                        <li>Регистрация</li>
                    </ul>
                </nav>
                
            </div>
        </header>
    )
}