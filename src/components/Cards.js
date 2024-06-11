
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProductDetails from './ProductDetails'; 

import axios from 'axios';

function Cards() {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9078/api/products')
      .then(response => response.json())
      .then(data => {
        setCardsData(data);
      })
      .catch(error => {
        console.error('Error fetching card data:', error);
      });
  }, []);

  console.log('Details:',cardsData.id);
  console.log('Details:',cardsData.name);
  if (!Array.isArray(cardsData)) {
    return <div>Loading...</div>;
  }

  
/*
function Cards() {
  // Array of card data
  const cardsData = [
    { id: 1, name: 'Card Title 1', description: 'Some quick example text' ,imageurl: 'https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=400',productPrice:'10000' },
    { id: 2, title: 'Card Title 2', text: 'Some quick example text' ,image: 'https://images.pexels.com/photos/5721879/pexels-photo-5721879.jpeg?auto=compress&cs=tinysrgb&w=400'},
    { id: 3, title: 'Card Title 3', text: 'Some quick example text' ,image: 'https://images.pexels.com/photos/9853337/pexels-photo-9853337.jpeg?auto=compress&cs=tinysrgb&w=400'},
    { id: 4, title: 'Card Title 4', text: 'Some quick example text' ,image: 'https://images.pexels.com/photos/3339045/pexels-photo-3339045.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 5, title: 'Card Title 5', text: 'Some quick example text' ,image: 'https://images.pexels.com/photos/3585042/pexels-photo-3585042.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 6, title: 'Card Title 6', text: 'Some quick example text' ,image: 'https://images.pexels.com/photos/5699509/pexels-photo-5699509.jpeg?auto=compress&cs=tinysrgb&w=400' },
    // Add more card data as needed
  ];*/

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
       {Array.isArray(cardsData) && cardsData.map(card => (
          <div key={card.id}>
          <Link to={`/${card.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          
        <Card style={{ flex: '0 0 calc(25% - 10px)',margin: '30px', width: '20rem' }}>
          <Card.Img variant="top" src={card.imageurl} style={{ height: '200px', objectFit: 'cover' }} />
          <Card.Body>
            <Card.Title>{card.name}</Card.Title>
            <Card.Text>{card.description}</Card.Text>
             <Card.Text>{card.productPrice}</Card.Text>
            <Button variant="primary" style={{backgroundColor:'#C7BDBD',border:'none'}}>Add to Cart</Button>
          </Card.Body>
        </Card>
        </Link>
        </div>
      ))}
    </div>
  );
}

export default Cards;
