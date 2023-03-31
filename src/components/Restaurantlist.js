import React, { useEffect, useState } from "react";
import Restcard from "./Restcard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Restaurantlist() {
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

  return (
    //data passing from restaurantlist to restcard
    <Row>
      {
       
        
           restaurantlist.map((item) =>(
          <Restcard restaurant={item} />

          ))
      }
 
      
    </Row>
  );
}

export default Restaurantlist;
