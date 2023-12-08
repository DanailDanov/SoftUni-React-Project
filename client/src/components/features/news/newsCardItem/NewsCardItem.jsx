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
        <div>
            <Card style={{
                width: '25rem',
                height: '35rem',
                overflow: 'hidden',
                border: 'solid #3B91C1',
                borderRadius: '20px solid red',
                boxShadow: '5px 5px 5px gray',

            }}>
                <Card.Img style={{
                    width: '100%',
                    height: '240px',
                    maxHeight: '240px',
                    borderBottom: '1px solid black',
                }} variant="top" src={img} />

                <Card.Body as={'div'} style={{ display: 'flex', flexDirection: 'column', }}>
                    <Card.Title style={{
                        fontSize: '1.5em',
                        marginBottom: '1em',
                        marginTop: 'auto'
                    }} >{newsHeader}</Card.Title>
                    <Card.Text style={{ marginTop: 'auto' }}>
                        Добавена на: {createdOn}
                    </Card.Text>
                    <Button style={{ marginTop: 'auto', width: '40%', }} as={Link} to={`/detailsNews/${newsId}`} variant="primary">Виж повече</Button>
                </Card.Body>
            </Card>
        </div>
    );
}