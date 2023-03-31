import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Restcard({ restaurant }) {
    console.log(restaurant);
    return (
        <Col sm={12} md={6} lg={4} xl={3} className='m-5 p-1 ps-3 '>
            <Card >
                <Card.Img className='image' variant="top" src={restaurant.photograph}  />
                <Card.Body>
                    <Card.Title className='text'>Dish Name:{restaurant.name}</Card.Title>
                    <Card.Text className='text'>
                        {restaurant.neighborhood}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Restcard