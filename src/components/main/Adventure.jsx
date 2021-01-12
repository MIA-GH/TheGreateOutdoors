import React from 'react';
import {Link} from 'react-router-dom';

function Adventure(){
    return(
        <section className="begin-adventure">
            <div className="container">
                <div className="title-heading">
                    <h3>Let the</h3>
                    <h1>Adventure begin</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, nobis.</p>
                </div>
                <div className="adventure-grid">
                    <div className="adventure-grid-item">
                        <h1>Jungle Exploration</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sunt voluptatem aperiam eveniet! Sunt quia odio corrupti magni a porro, harum fuga labore doloribus facere mollitia laudantium cupiditate cum, assumenda excepturi consequatur et omnis sint aspernatur quibusdam error rerum sit laborum! Quas autem qui quia cum, ea quaerat, deleniti tenetur sed amet culpa expedita eaque unde ratione nesciunt architecto quos nobis, tempora dolorem. Accusamus, eaque, ea doloremque laudantium culpa nostrum a, accusantium officiis cum dicta quod rem reprehenderit aperiam alias!</p>
                    </div>

                    <div className="adventure-grid-item">
                        <h1>Sight seeing</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur sunt voluptatem aperiam eveniet! Sunt quia odio corrupti magni a porro, harum fuga labore doloribus facere mollitia laudantium cupiditate cum, assumenda excepturi consequatur et omnis sint aspernatur quibusdam error rerum sit laborum! Quas autem qui quia cum, ea quaerat, deleniti tenetur sed amet culpa expedita eaque unde ratione nesciunt architecto quos nobis, tempora dolorem. Accusamus, eaque, ea doloremque laudantium culpa nostrum a, accusantium officiis cum dicta quod rem reprehenderit aperiam alias!</p>
                    </div>
                </div>
            </div>
            <Link to="#" className="btn bottom-btn">Book your adventure</Link>
        </section>
    );
}

export default Adventure;
