import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';

function Review({review}) {
  const [open, setOpen] = useState(false);

  return (

    review.map(item => (
      <Card style={{ width: '18rem' }} className='border m-4'>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{item.date}</Card.Subtitle>
          <Card.Text>
       
         <Button className='btn btn-dark'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
       Comments
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
        {item.comments}
        </div>
      </Collapse>
          </Card.Text>
          
        </Card.Body>
      </Card>
    ))
  )
}

export default Review