import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact" className='ps-5'>
          <div className="row g-0 ">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row g-0">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4 className='fw-bold'>LinkedIn&#129133;<br></br>
                  <a href="https://www.linkedin.com/in/harsh-kureel"className='fw-normal text-white text-decoration-none'>{resumeData.linkedinId}</a>
                </h4>
                <h4 className='fw-bold'>Github&#129133;<br></br>
                <a href="https://github.com/harshu65"className='fw-normal text-white text-decoration-none'>{resumeData.website}</a>
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}