import React from 'react';
import Thumbnail from '../../images/profile-pic.jpg';

function Testimonial(){
    return(
        <section className="testimonials">
            <div className="container">
                <div className="testimonial">
                    <div class="testimonial-text-box">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nemo quia mollitia necessitatibus aut perspiciatis accusantium qui sit pariatur debitis!</p>
                        <i class="testimonial-icon fa fa-quote-right"></i>
                    </div>

                    <div className="testimonial-customer">
                        <img src={Thumbnail} alt="user thumbnail"/>
                        <h1>Musah Ibrahim Ali</h1>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Testimonial;
