import React, { useEffect, useState } from 'react'

function Restaurantlist() {
  const [restaurantlist,setRestaurantlist]= useState([])

  //create a function for api call
  const getRestaurant=async()=>{
  //async await
 await fetch('/restaurants.json')//asychronous call
 .then((data)=>data.json()
  .then((result)=>
    setRestaurantlist(result.restaurants))
  )
 }
console.log(restaurantlist);
  
 useEffect(()=>{
  getRestaurant()
 },[])

  return (
    <div>Restaurantlist</div>
  )
}

export default Restaurantlist