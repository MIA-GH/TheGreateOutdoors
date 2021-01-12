import React from 'react';
import HeroSection from './main/HeroSection';
import ExperienceOutdoors from './main/ExperienceOutDoor';
import Testimonial from './main/Testimonial';
import Adventure from './main/Adventure';


function Body(){
    return (
        <main className="main-cotton">
            <HeroSection />
            <ExperienceOutdoors />
            <Testimonial />
            <Adventure />
        </main>
    );
}

export default Body;
