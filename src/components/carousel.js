import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import Carousel from 'react-bootstrap/Carousel';
//import CarouselImage from 'components/CarouselImage';
import CarouselImage from './CarouselImage';

function CarouselFade() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <CarouselImage text="First slide" imageUrl="https://images.pexels.com/photos/46794/camera-photos-photograph-paper-prints-46794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Carousel.Caption>
          <h3 style={{fontFamily:'Amatic SC',fontWeight:'bold'}}>Revive the past, adorn the present</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage text="Second slide" imageUrl="https://images.pexels.com/photos/1425146/pexels-photo-1425146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Carousel.Caption>
          <h3 style={{fontFamily:'Amatic SC',fontWeight:'bold'}}>Elevate your style with vintage flair</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage text="Third slide" imageUrl="https://images.pexels.com/photos/2422255/pexels-photo-2422255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=11" />
        <Carousel.Caption>
          <h3 style={{fontFamily:'Sacramento',fontWeight:'bold'}}>Where every piece tells a story</h3>
        
        
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;