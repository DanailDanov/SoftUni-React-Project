import styles from './LatestNews.module.css'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function LatestNews() {
    return (
        <div className={styles['main-container']}>
            <div className={styles['container']}>
                <div className={styles['latest-news-heading']}>
                    <h2>Последни новини</h2>
                </div>
                
                <div className={styles['card-items']}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://safenews.bg/wp-content/uploads/2023/11/395618224_368052452650996_6645346618426846369_n-jpg.webp" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </div>
              
            </div>
        </div>
    );
}