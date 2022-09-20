import React from 'react'
import "./SlideShow.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import image1 from '././image/image1.jpg'
import image2 from '././image/image2.jpg'
import image3 from '././image/image4.jpg'
import image4 from '././image/image3.png'
const SlideShow = () => {
    return (
      
      
      <Carousel> 
  <Carousel.Item interval={3000}>
    <img
      className="d-block"
      src="https://c.stocksy.com/a/fpZ500/z9/1329383.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block"
      src={image2}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block"
      src={image3}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block"
      src={image4}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
       
       
    )
}

export default SlideShow;