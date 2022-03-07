import React from 'react'
import {Carousel} from 'react-bootstrap';
import First from '../images/First.jpg';
import Second from '../images/Second.jpg';
import Third from '../images/Third.jpg';
import carsol from '../Style/carsol.css';
const Carsol = () => {
  return (
<>
    


{/* 
<div className='container'>
      <div className='row'>
        <div className='col-md'>
          <img src={require("../images/logo.png")} className="w-25 h-25" />
          </div>
        </div>
      </div>
 */}





    <Carousel fade className='carsol'>
   
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={First}
        alt="First slide"
      />
     
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={require("../images/Second.jpg")}
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={require("../images/Third.jpg")}
        alt="Third slide"
      />
 
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>



  </>
  )
}

export default Carsol;