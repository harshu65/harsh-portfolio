import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

export default class Porfolio extends Component {
  render() {
   // let resumeData = this.props.resumeData;

   //pause="hover" itll stop sliding the slide if someone hovers over it
    return (
      <Carousel variant="dark" style={{width: "98%"}} className=' mx-auto mb-xl-2 mb-3'>
      <Carousel.Item pause="hover">
        <img className="d-block w-100" src="https://raw.githubusercontent.com/harshu65/harsh-portfolio/main/images/todo.jpg" alt="First slide"/>
        <Carousel.Caption className="text-white">
          <h2 className='skinc'>Todo App</h2>
          <p className='mb-0'>It's a Todo List App built Using ReactJS.</p>
          <a className="text-decoration-none" href='https://harshu65.github.io/react-todo/'><p><kbd className="h6 text-white">https://harshu65.github.io/react-todo/</kbd></p></a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item pause="hover"> 
        <img className="d-block w-100" src="https://raw.githubusercontent.com/harshu65/harsh-portfolio/main/images/techtonic.jpg" alt="Second slide"/>
        <Carousel.Caption  className="text-white">
          <h2 className='skinc'>Techtonic</h2>
          <p className='mb-0'>It is a fully responsive static-website built using w3css.</p>
          <a className="text-decoration-none" href='https://github.com/harshu65/techtonic'><p><kbd className="h6 text-white">https://github.com/harshu65/techtonic</kbd></p></a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item pause="hover">
        <img className="d-block w-100" src="https://raw.githubusercontent.com/harshu65/harsh-portfolio/main/images/cal.jpg" alt="Third slide"/>
        <Carousel.Caption  className="text-white">
          <h2 className='skinc'>Calculator App</h2>
          <p className='mb-0'>Calculator App Using ReactJS</p>
          <a className="text-decoration-none" href='https://harshu65.github.io/cal-reactjs/'><p><kbd className="h6 text-white">https://harshu65.github.io/cal-reactjs/</kbd></p></a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        );
  }
}