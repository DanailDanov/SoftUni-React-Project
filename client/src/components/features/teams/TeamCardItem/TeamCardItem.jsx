import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function TeamCardItem({
    teamId,
    name,
    img,
    createdOn,
}) {

    return (
        <div>
            <Card style={{
                width: '18rem',
                height: '28rem',
                overflow: 'hidden',
                border: 'solid #3B91C1',
                borderRadius: '20px solid red',
                boxShadow: '5px 5px 5px gray'
            }}>
                <Card.Img style={{
                    width: '100%',
                    height: '240px',
                    maxHeight: '240px',
                    borderBottom: '1px solid black',
                }}
                    variant="top" src={img} />
                <Card.Body>
                    <Card.Title style={{
                        fontSize: '1.5em',
                        marginBottom: '1em',
                        marginTop: '0.5em'
                    }}>{name}</Card.Title>
                    <Card.Text style={{
                        marginBottom: '2em'
                    }}>
                        Добавен на: {createdOn}
                    </Card.Text>
                    <Button as={Link} to={`/detailsTeam/${teamId}`} variant="primary">Виж повече</Button>
                </Card.Body>
            </Card>
        </div>
    );
}