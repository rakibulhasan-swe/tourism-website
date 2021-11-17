import React from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "../../images/slide1.png";
import slide2 from "../../images/slide2.jpg";
import slide3 from "../../images/slide3.jpg";

const Slider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item className='overlay' interval={1000}>
          <img className="d-block w-100" src={slide2} alt="First slide" />
          <Carousel.Caption className="caption-title">
            <h3 className='title'>TRIPER TRAVEL STORIES</h3>
            <p className='fs-5'>Find the gust behind your next adventure</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='overlay' interval={500}>
          <img className="d-block w-100" src={slide1} alt="Second slide" />
          <Carousel.Caption className="caption-title">
            <h3 className='title'>TRIPER TRAVEL STORIES</h3>
            <p className='fs-5'>Find the gust behind your next adventure</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='overlay'>
          <img className="d-block w-100" src={slide3} alt="Third slide" />
          <Carousel.Caption className="caption-title">
            <h3 className='title'>TRIPER TRAVEL STORIES</h3>
            <p className='fs-5'>Find the gust behind your next adventure</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
