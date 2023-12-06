import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function TeamCardItem({
    teamId,
    name,
    img
}) {


    // console.log(productId);
    return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    {/* <Card.Text>
                        {description}
                    </Card.Text> */}
                    <Button as={Link} to={`/detailsTeam/${teamId}`} variant="primary">Виж повече</Button>
                </Card.Body>
            </Card>
    );
}