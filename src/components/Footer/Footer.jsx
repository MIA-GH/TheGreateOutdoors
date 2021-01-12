import React from 'react';

function Footer(props){
    return(
        <footer className="main-footer">
            <p>&copy; {props.year} outdoors. All rights reserved || miastudios inc</p>
        </footer>
    );
}

export default Footer;
