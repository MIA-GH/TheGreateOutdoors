import React from 'react';
import {Link} from 'react-router-dom';

function HeroSection(){
    return(
        <section className="hero">
            <div className="container">
                <div className="main-message">
                    <h3>The great outdoors</h3>
                    <h1>adventure</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dolorum accusantium, et exercitationem minima illo ea in laborum? Vero ullam dolorum neque eligendi distinctio cumque consequuntur voluptatum culpa magni? Explicabo!</p>
                    <div className="cta">
                        <Link to="#" className="btn">Book now</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
