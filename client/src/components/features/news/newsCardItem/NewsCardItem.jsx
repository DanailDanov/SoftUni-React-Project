import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function TeamCardItem({
    newsId,
    newsHeader,
    img,
    createdOn,
}) {
    return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{newsHeader}</Card.Title>
                     <Card.Text>
                       Добавена на: {createdOn}
                    </Card.Text>
                    <Button as={Link} to={`/detailsNews/${newsId}`} variant="primary">Виж повече</Button>
                </Card.Body>
            </Card>
    );
}