import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

export default class Porfolio extends Component {
  render() {
   // let resumeData = this.props.resumeData;

   //pause="hover" itll stop sliding the slide if someone hovers over it
    return (
      <Carousel variant="dark" className='w-50 mx-auto mb-xl-2 mb-3'>
      <Carousel.Item pause="hover">
        <img className="d-block w-100" src="https://raw.githubusercontent.com/harshu65/harsh-portfolio/main/images/todo.jpg" alt="First slide"/>
        <Carousel.Caption className="text-white">
          <h2 className='skinc'>Todo App</h2>
          <p className='mb-0'>It's a Todo List App built Using ReactJS.</p>
          <a className="text-decoration-none" href='https://harshu65.github.io/react-todo/'><kbd className="h6 text-white">https://harshu65.github.io/react-todo/</kbd></a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item pause="hover"> 
        <img className="d-block w-100" src="https://raw.githubusercontent.com/harshu65/harsh-portfolio/main/images/techtonic.jpg" alt="Second slide"/>
        <Carousel.Caption  className="text-white">
          <h2 className='skinc'>Techtonic</h2>
          <p className='mb-0'>It is a fully responsive static-website built using w3css.</p>
          <a className="text-decoration-none" href='https://github.com/harshu65/techtonic'><kbd className="h6 text-white">https://github.com/harshu65/techtonic</kbd></a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item pause="hover">
        <img className="d-block w-100" src="https://raw.githubusercontent.com/harshu65/harsh-portfolio/main/images/cal.jpg" alt="Third slide"/>
        <Carousel.Caption  className="text-white">
          <h2 className='skinc'>Calculator App</h2>
          <p className='mb-0'>Calculator App Using ReactJS</p>
          <a className="text-decoration-none" href='https://harshu65.github.io/cal-reactjs/'><kbd className="h6 text-white">https://harshu65.github.io/cal-reactjs/</kbd></a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      /*<section id="portfolio">
      <div className="row g-0 g-0">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="ps-5 bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href="#modal-01">
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>*/
        );
  }
}