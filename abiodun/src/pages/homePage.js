import React from 'react';
import Home from '../components/Home/Home.js';
import About from '../components/About/About.js';
import Service from '../components/Service/Service.js';
import Project from '../components/Project/Project.js';
import Blog from '../components/Blog/Blog.js';
import Contact from '../components/Contact/Contact.js';

function HomePage() {
    return (
        <div>
            <Home />
            <About />
            <Service />
            <Project />
            <Blog />
            <Contact />            
        </div>
    );
}

export default HomePage;
