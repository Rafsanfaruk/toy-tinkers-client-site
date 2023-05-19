// import React from 'react';

import About from "../About/About";
import Banner from "../Banner/Banner";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Gallery from "../Gallery/Gallery";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Gallery></Gallery>
           <FeaturedProducts></FeaturedProducts>
        </div>
    );
};

export default Home;