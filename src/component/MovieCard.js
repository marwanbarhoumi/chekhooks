import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

export const MovieCard = ({mov}) => {
  return (
   <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={mov.posterURl}/>
    <Card.Body>
      <Card.Title>{mov.title}</Card.Title>
      <Card.Text>
        {mov.description}
      </Card.Text>
      <Card.Title> Rating: {mov.rating}</Card.Title>
      <Button variant="primary">Details</Button>
    </Card.Body>
  </Card>
   
  )
}
