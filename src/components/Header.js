import React, { Component } from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <div id="home">
         <nav className="navbar fixed-top navbar-expand-sm pt-sm-0 pb-sm-0 bg-dark justify-content-center">
            <div className="container-fluid">
              <a className="navbar-brand d-none" href="#">Navbar</a>
                <button style={{backgroundColor:'#767676'}}className="navbar-toggler  ms-auto ms-sm-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse  justify-content-center" id="navbarSupportedContent">
              <ul id="nav" className="navbar-nav  justify-content-center">
                <li className="nav-item"><AnchorLink href='#home'>Home</AnchorLink></li>
                <li className="nav-item"><AnchorLink href='#about'>About</AnchorLink></li>
                <li className="nav-item"><AnchorLink href='#resume'>Resume</AnchorLink></li>
                <li className="nav-item"><AnchorLink href='#portfolio'>Works</AnchorLink></li>
                <li className="nav-item"><AnchorLink href='#contact'>Contact</AnchorLink></li>
              </ul>
            </div>
          </div>
         </nav>

         <div className="row g-0 banner  mt-4 pt-5 pb-md-5 mt-md-5 pt-md-5">
            <div className="banner-text">
               <h1 className="responsive-headline   ps-sm-4 pe-sm-4  pt-3 pt-sm-0" style={{color:"#e2e2e2",fontSize: "90px"}}>Hi, I am {resumeData.name}.</h1>
               <h3 className="pt-md-3 ps-sm-5 pe-sm-5 ms-5 me-5 h4" style={{color:'#fff', fontFamily:'monospace '}}>I am a {resumeData.role}.{resumeData.roleDescription}
               </h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>
      </div>
      </React.Fragment>
    );
  }
}