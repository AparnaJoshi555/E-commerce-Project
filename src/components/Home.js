import React from 'react'
//import nav from './nav.js'
//import LoginHeader from './LoginHeader';
//import CarouselImage from './CarouselImage';

import NavComponent from './nav';
import CarouselFade from './carousel';
import Cards from './Cards';
//import ProductDetails from "./components/ProductDetails";



const Home = () => {
    return (
        <div>
        <NavComponent />
    
            <CarouselFade />
            <Cards />
             
            
        </div>
    );
}


 export default Home;

 