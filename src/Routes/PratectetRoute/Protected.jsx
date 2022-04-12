import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Protected = ({children}) => {
    const navigate = useNavigate()
    useEffect(() =>{
        if(!localStorage.getItem('token')){
            navigate('Login')
        }
    })
    return (
        <>
            {children}
        </>
    );
}

export default Protected;
