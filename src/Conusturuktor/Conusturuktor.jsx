import React, { useState } from 'react';
import "../Conusturuktor/Conusturuktor.scss"
import Account from '../Account/Account';
import Login from '../Login/Login';

const Conusturuktor = () => {
    const [conus,setConus] = useState(localStorage.getItem('token'))
    return (
        <div className='Conusturuktor'>
            {
                conus ? <Account /> : <Login />
            }
        </div>
    );
}

export default Conusturuktor;
