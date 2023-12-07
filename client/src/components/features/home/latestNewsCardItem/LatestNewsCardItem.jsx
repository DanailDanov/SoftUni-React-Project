import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function LatestNewsCardItem({
    newsId,
    newsHeader,
    img,
    createdOn,
}) {
    return (
        <Card style={{
            width: '18rem',
            height: '28rem',
            overflow: 'hidden'
        }}>
            <Card.Img style={{
                width: '100%',
                height: '200px',
                maxHeight: '200px',
                borderBottom: '1px solid black   '
            }} variant="top" src={img} />
            <Card.Body>
                <Card.Title style={{ textOverflow: 'ellipsis' }}>{newsHeader}</Card.Title>
                <Card.Text style={{ fontSize: '0.8em' }}>
                    Добавена на: {createdOn}
                </Card.Text>
                <Button as={Link} to={`/detailsNews/${newsId}`} variant="primary">Виж повече</Button>
            </Card.Body>
        </Card>
    );
}