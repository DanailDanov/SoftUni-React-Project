import styles from './Footer.module.css';

export default function Footer () {
    return (
        <footer className={styles['main-footer']}>
            <div className='container'>
            <div className="footer__top">
			<img className="logo" src="https://www.minifootball.eu/wp-content/themes/emfold/Content/images/emf-footer-logo.png" alt="EMF logo"/>
			
			<h3>Follow <strong>EMF on</strong></h3>
			<ul>
				<li><a href="https://www.facebook.com/eurominifootball/" ><img src="https://www.minifootball.eu/wp-content/themes/emfold/Content/images/social/facebook.svg" alt="facebook"/></a></li>
				<li><a href="https://twitter.com/EMFFOOTBALL" ><img src="https://www.minifootball.eu/wp-content/themes/emfold/Content/images/social/twitter.svg" alt="twitter"/></a></li>
				<li><a href="https://www.instagram.com/minifootballeurope/" ><img src="https://www.minifootball.eu/wp-content/themes/emfold/Content/images/social/instagram.svg" alt="instagram"/></a></li>
				<li><a href="https://www.youtube.com/channel/UCPffV6AiSNwet6Om-7P2YJA"><img src="https://www.minifootball.eu/wp-content/themes/emfold/Content/images/social/youtube.svg" alt="youtube"/></a></li>
			</ul>
		</div>
        
                <div className='footer-bottom'>
                    
                </div>
            </div>
        </footer>
    );
}