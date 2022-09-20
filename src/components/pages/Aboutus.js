import React, { useEffect } from 'react';
import '../../App.css';
import'./Aboutus.css';
import Brands from '././Brands';
import image from '../image/about.jpg'

function Home (){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
        <Brands></Brands>
    <img className="image"src={image} alt="pic"></img>
    <div className="info"><p>Our story began in 2001 in a small studio in the middle of nowhere. With only one desk and next to no free time.Our products bring together the finest materials and stunning design to create something very special. We believe in quality, care, and creating unique products that everyone can enjoy. Colorful, creative, and inspired by what we see everyday, each product represents what we love about the world we live in. We hope they’ll inspire you too.</p></div>
      
        </>

    )
}
export default Home;