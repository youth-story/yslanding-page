import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import c1 from './c1.jpg';
import c3 from './c3.jpg';

const data = [
  {
    image: c1,/*"https://images.ctfassets.net/hrltx12pl8hq/3AnnkVqrlhrqb9hjlMBzKX/693a8e5d40b4b6c55a7673ca4c807eef/Girl-Stock"*/
    caption: "Introducing D2D",
    description: "D2D is an all-in-one platform for Youth"
  },
  {
    image: c3,/*"https://images.ctfassets.net/hrltx12pl8hq/3AnnkVqrlhrqb9hjlMBzKX/693a8e5d40b4b6c55a7673ca4c807eef/Girl-Stock",*/
    caption: "Youth ka Apna Space",
    description: "Find success stories, resources, magazines and much more..."
  }
]

function ImageCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {data.map((slide, i) => {
        return (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              style={{ width: '100%', maxWidth: '100%' }} // Add these styles
              src={slide.image}
              alt="slider image"
            />
            <Carousel.Caption style={{color: 'red'}}>
              <h3>{slide.caption}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}
    </Carousel>
  );
}

export default ImageCarousel;
