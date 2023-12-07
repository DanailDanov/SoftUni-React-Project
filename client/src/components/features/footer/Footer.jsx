import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles['main-footer']}>
            <div  className={styles['container']}>
                <div className={styles['footer-top']}>
                    <img className={styles['footer-top-logo']} src="https://www.minifootball.eu/wp-content/themes/emfold/Content/images/emf-footer-logo.png" alt="EMF logo" />

                    <h3 className={styles['footer-top-title']}>Follow <strong>BAMF on</strong></h3>
                    <ul className={styles['footer-top-ul']}>
                        <li><a href="https://www.facebook.com/B.A.Minifootball" ><img src="https://www.minifootball.eu/wp-content/themes/emfold/Content/images/social/facebook.svg" alt="facebook" /></a></li>
                        <li><a href="https://www.instagram.com/bamfbg/" ><img src="https://www.minifootball.eu/wp-content/themes/emfold/Content/images/social/instagram.svg" alt="instagram" /></a></li>
                        <li><a href="https://www.youtube.com/@BAMFTV"><img src="https://www.minifootball.eu/wp-content/themes/emfold/Content/images/social/youtube.svg" alt="youtube" /></a></li>
                    </ul>
                </div>
                    <hr />
                <div className={styles['footer-bottom']}>
                    <div className={styles['footer-bottom-left']}>
                        <ul className={styles['footer-bottom-left-ul']}>
                            <li><a href="https://www.minifootball.eu/"><img src="https://www.minifootball.eu/wp-content/themes/emfold/Content/images/emf-logo.svg   " alt="" /></a></li>
                            <li><a href="https://www.minifootball.com/"><img src="https://www.minifootball.eu/wp-content/themes/emfold/Content/images/wmf-logo.svg" alt="" /></a></li>
                            <li><a href="https://www.hugedomains.com/domain_profile.cfm?d=futbalito.com"><img src="https://www.minifootball.eu/wp-content/themes/emfold/Content/images/futbalito-logo.svg" alt="" /></a></li>
                        </ul>
                    </div>
                    <div className={styles['footer-bottom-right']}>
                        <div className={styles['copyright']}>
                            <p>© Danail Danov. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}