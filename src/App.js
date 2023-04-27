import React, { Component,Suspense,lazy } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
//import Portfolio from './components/Portfolio'; importing in 10th line
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';

const Portfolio = lazy(()=> import('./components/Portfolio'));
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Suspense fallback={<div className='text-center'>Loading....</div>}>
          <Portfolio resumeData={resumeData}/>
        </Suspense>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;