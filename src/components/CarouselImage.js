import React from 'react'



const CarouselImage = ({ text,imageUrl }) => {
  return (
    <img
      className="d-50 w-100"
      src={imageUrl}
      alt={text}
      style={{ width:'500px', height:'400px' }}
    />
  );
}

export default CarouselImage;


