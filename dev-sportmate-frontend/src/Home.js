import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';

export class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="App">
                    <Header resumeData={resumeData} />
                    <About resumeData={resumeData} />
                    <Testimonials resumeData={resumeData} />
                    <Footer resumeData={resumeData} />
                </div>
            </React.Fragment>
        )
    }
}

export default Home
