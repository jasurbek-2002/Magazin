import React from 'react';
import "../Account/Account.scss"
import acimg from "../Assets/svg/acccontimg.jpg"
import {Link, useNavigate} from 'react-router-dom'
const Account = () => {
    const navigate = useNavigate()
    const hendlerLog = () =>{
        localStorage.clear()
        navigate('/Conusturuktor')
    }
    return (
        <form className='Account'>
            <img className='Account__img' src={acimg} alt="" />
            <h2 className='Account__name'>{localStorage.getItem('name')}</h2>
            <hr className='Account__drop' />
            <button onClick={hendlerLog} type='submit' className='Account__log'>Logout</button>
            <Link to='/' className='Account__korzina'>Shopping</Link>
            <Link to='/' className='Account__lenguage'>Lenguage</Link>

        </form>
    );
}

export default Account;
