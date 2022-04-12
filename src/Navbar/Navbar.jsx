import React from 'react';
import "../Navbar/Navbar.scss"
import Logo from "../Assets/img/Logoimg.webp"
import account from "../Assets/svg/acccontimg.jpg"
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='Navbar'>
            <h1 className='Navbar__logo'><img src={Logo} alt="" />My shop</h1>
            <NavLink className={(props) =>props ? 'Navbar__Home--active' : 'Navbar__Home'} to='/'>Home</NavLink>
           <form className='Navbar__form'>
           <input placeholder='Search...' className='Navbar__form__input' type="search" />
           <button className='Navbar__form__btn' type='search'>Search</button>
           </form>
            <Link to='/Conusturuktor' className='Navbar__account'><img src={account} alt="" /></Link>
        </div>
    );
}

export default Navbar;
