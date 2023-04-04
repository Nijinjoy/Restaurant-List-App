import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup';
import Operation from "./Operation";


function Viewrest() {
  const urlParams = useParams();
  console.log(urlParams.id);

  const [restaurantlist, setRestaurantlist] = useState([]);

  //create a function for api call
  const getRestaurant = async () => {
    //async await
    await fetch("/restaurants.json") //asychronous call
      .then((data) =>
        data.json().then((result) => setRestaurantlist(result.restaurants))
      );
  };
  console.log(restaurantlist);

  useEffect(() => {
    getRestaurant();
  }, []);
  const viewrest = restaurantlist.find(item => item.id == urlParams.id)
  console.log(viewrest);

  return (
    <div>
      {
        viewrest ? (
          <Row>
            <Col md={3}>
              <Image src={viewrest.photograph} fluid style={{ width: '300px', height: '31rem', padding: '10px', marginLeft: "80px", borderRadius: '20px' }} />
            </Col>
            <Col md={7} className="m-3">
              <h2>{viewrest.name}</h2>
              <ListGroup style={{ padding: '20px', marginRight: '200px', width: '290px' }}>
                <ListGroup.Item variant="primary">Id::{viewrest.id}</ListGroup.Item>
                <ListGroup.Item variant="secondary">Dish::{viewrest.name}</ListGroup.Item>
                <ListGroup.Item variant="danger">Address::{viewrest.address}</ListGroup.Item>
                <ListGroup.Item variant="warning">Cuisine-Type::{viewrest.cuisine_type}</ListGroup.Item>
                <ListGroup.Item variant="info">Neighborhood::{viewrest.neighborhood}</ListGroup.Item>
              </ListGroup>
              <><Operation op={viewrest.operating_hours}  /></>
              <>reviews</>
            </Col>

          </Row>
        ) : 'null'

      }
    </div>
  )
}

export default Viewrest;
