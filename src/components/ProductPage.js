import React from 'react';
import ProductDetails from './ProductDetails'; 
//import {login} from './assets/login.jpg';
import loginImage from '../assets/login.jpg';
const ProductPage = () => {
  
  const productData = {
      id:1,
     
    images: [
      {
        original: 'https://png.pngtree.com/thumb_back/fh260/background/20230424/pngtree-photo-of-a-vinyl-record-image_2559141.jpg',
        thumbnail: 'thumbnail1.jpg',
      },
      
    ],
    title: 'Product Title',
    reviews: '150',
    availability: true,
    brand: 'Brand Name',
    category: 'Category Name',
    sku: 'SKU123',
    price: 450,
    previousPrice: 599,
    description: 'Product description goes here',
    size: ['XS', 'S', 'M', 'L', 'XL'],
    color: ['gray', 'violet', 'red'],
  };

  return (
    <div>
      
      <ProductDetails product={productData} />
    </div>
  );
};

export default ProductPage;
