import React, { Component } from 'react';


export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
      <div className="row  mx-auto px-auto">
        <div className="container">
          <p className='text-white lead'>Made By Harsh</p>
          {/* <ul className="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item,index)=>{
                return(
                  <li key={index}>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul> */}
        </div>

      </div>
    </footer>
    );
  }
}