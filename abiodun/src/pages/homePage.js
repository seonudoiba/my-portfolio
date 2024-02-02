import React from 'react';
import Home from '../components/Home/Home.js';
import About from '../components/About/About.js';
import Service from '../components/Service/Service.js';
import Project from '../components/Project/Project.js';
import Contact from '../components/Contact/Contact.js';
import Articles from './home/container/Articles.jsx'
import CTA from './home/container/CTA.jsx'

function HomePage() {
    return (
        <div>
            <Home />
            <About />
            <Service />
            <Project />
            <Articles/>
            <CTA/>
            <Contact />            
        </div>
    );
}

export default HomePage;
