import React from 'react';
import Category from '../../Categoty/Category';
import Carusel from '../../SlaydCompanet/FurnitureSlaye/Carusel';
import Phone from '../../SlaydCompanet/PhoneSlayde/Phone';

const Home = () => {
    return (
        <div className='Home'>
            <Carusel />
            <Category />
        </div>
    );
}

export default Home;
