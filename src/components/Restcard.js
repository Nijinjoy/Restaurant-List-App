import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Restcard({ restaurant }) {
    console.log(restaurant);
    return (
        <Col sm={12} md={6} lg={4} xl={3} className='m-6 p-3 '>
            <Link to={`viewrest/${restaurant.id}`} style={{ textDecoration: 'none' }}>
                <Card >
                    <Card.Img className='image' variant="top" src={restaurant.photograph} />
                    <Card.Body>
                        <Card.Title className='text'>Dish Name:{restaurant.name}</Card.Title>
                        <Card.Text className='text'>
                            {restaurant.neighborhood}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Col>

    )
}

export default Restcard