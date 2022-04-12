import React from 'react';
import "../Footer/Footer.scss"
import {Link} from 'react-router-dom'
import phone from "../Assets/img/phoneimg.png"
import tg from "../Assets/img/telegramimg.png"
import insta from "../Assets/img/instaimg.png"
import gmail from "../Assets/img/gmailimg.png"
const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Footer__card card'>
               <div className='card__box'>
               <input placeholder='Enter your card...' className='card__box__input' type="number" />
               <select className='card__box__select select' name="card" id="cardta">
                   <option className='select__option' value="Humo">Humo</option>
                   <option className='select__option' value="Uzkart">Uzkart</option>
                   <option className='select__option' value="Visa">Visa</option>
               </select>
               </div>
               <h1 className='card__title'>My shop</h1>
                <div className='card__link'>
                <a className='card__link__item' href="tel:+998916869917"><img src={phone} alt="" /></a>
                <a className='card__link__item' href="https://t.me/jasurbekblog_uz"><img src={tg} alt="" /></a>
                <a className='card__link__item' href="jasurbek_turgunov001"><img src={insta} alt="" /></a>
                <a className='card__link__item' href="email:jasurbekturgunov25@gmail.com"><img src={gmail} alt="" /></a>
                </div>

            </div>
            <ul className='Footer__nav nav'>
                <h3 className='nav__title'>Site map</h3>
                <Link to='/' className='nav__item'>Home</Link>
                <Link to='/' className='nav__item'>Abaut</Link>
                <Link to='/' className='nav__item'>Category</Link>
                <Link to='/' className='nav__item'>Orders</Link>
                <Link to='/' className='nav__item'>Contacts</Link>

            </ul>

            <ul className='Footer__nav nav'>
                <h3 className='nav__title'>Category</h3>
                <Link to='/' className='nav__item'>Home</Link>
                <Link to='/' className='nav__item'>Home appliances</Link>
                <Link to='/' className='nav__item'>Clothes</Link>
                <Link to='/' className='nav__item'>Tools</Link>
                <Link to='/' className='nav__item'>Accessories</Link>
                <Link to='/' className='nav__item'>Sports</Link>
            </ul>

            <ul className='Footer__bar bar'>
                <h3 className='bar__title'>contact us</h3>
                <a href='tel:+998916869917' className='bar__item'>90 707 07 07</a>
                <a href='tel:+998337253003' className='bar__item'>91 707 07 07</a>
            </ul>

            <iframe className='map' height='92%' width='400px' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1292.141513391956!2d69.23135877235453!3d41.27140497634793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b7d1264f903%3A0x499ccc2b9de57f46!2sIMPACT.T%20technology%20hub!5e0!3m2!1sru!2s!4v1649680107917!5m2!1sru!2s"
></iframe>
        </div>
    );
}

export default Footer;
