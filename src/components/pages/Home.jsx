import React from 'react';
import Body from '../Body';
import Footer from '../Footer/Footer';

function Home(){
    return (
        <>
            <Body />
            <Footer year={new Date().getFullYear()}/>
        </>
    );
}

export default Home;
