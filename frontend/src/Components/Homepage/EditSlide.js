import React from 'react';
import { Carousel } from "react-bootstrap";
import slide1 from './slideshow1.png';
import slide2 from './slideshow2.png';
import slide3 from './slideshow3.png';

export default function EditSlide () { 
  const handleClick = () => {
    document.location.href = '#';
    // console.log("Go to /products/" + item.id);
  }
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" onClick={handleClick} src={slide1} alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" onClick={handleClick} src={slide2} alt="Second slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" onClick={handleClick} src={slide3} alt="Third slide"/>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
