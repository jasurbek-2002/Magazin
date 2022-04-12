import React from 'react';
import "../Categoty/Category.scss"
import {Link} from 'react-router-dom'
import Home from "../Assets/img/homeimg.png"
import applines from "../Assets/img/washimg.jpg"
import clothes from "../Assets/img/clothesimg.jpg"
import tools from "../Assets/img/Toolsimg.png"
import Acsses from "../Assets/img/accsesimg.jpg"
import sports from "../Assets/img/sportsimg.jpg"

const Category = () => {
    
    return (
        <div className='Category'>
            <h2 className='Category__title'>categorya</h2>
            <Link to='/'  className='Category__box'>
                <img className='Category__box__img' src={Home} alt="" />
                <h4 className='Category__box__title'>Home</h4>
                </Link>
                <Link to='/'  className='Category__box'>
                <img className='Category__box__img' src={applines} alt="" />
                <h4 className='Category__box__title'>Home appliances</h4>
                </Link>
                <Link to='/'  className='Category__box'>
                <img className='Category__box__img' src={clothes} alt="" />
                <h4 className='Category__box__title'>Clothes</h4>
                </Link>
                <Link to='/'  className='Category__box'>
                <img className='Category__box__img' src={tools} alt="" />
                <h4 className='Category__box__title'>Tools</h4>
                </Link>
                <Link to='/'  className='Category__box'>
                <img className='Category__box__img' src={Acsses} alt="" />
                <h4 className='Category__box__title'>Accessories</h4>
                </Link> <Link to='/'  className='Category__box'>
                <img className='Category__box__img' src={sports} alt="" />
                <h4 className='Category__box__title'>Sports</h4>
                </Link>

           
        </div>
    );
}

export default Category;
