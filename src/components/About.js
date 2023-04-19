import React, { Component } from 'react';

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section className="ps-sm-5 p-4 pb-0" id="about">
         <div className="row g-0">
            <div className="nine columns main-col">
               <h2>About Me</h2>
               <p className='mb-0'>{resumeData.aboutme1}</p>
               <p className='mb-0'>{resumeData.aboutme2}</p>
               <p>{resumeData.aboutme3}</p>

               <div className="row g-0 g-0">

                  <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}