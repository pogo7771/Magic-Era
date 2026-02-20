import React from 'react';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import HomeAbout from '../components/HomeAbout';
import Courses from '../components/Courses';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const Home = () => {
    return (
        <div className="overflow-hidden">
            <Hero />
            <Brands />
            <HomeAbout />
            <Courses />
            <Testimonials />
            <Newsletter />
        </div>
    );
};

export default Home;
