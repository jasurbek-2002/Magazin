import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Login/Login.scss"
const Login = () => {
const [get,setGet] = useState(false)
   const emailRef = useRef()
   const passRef = useRef()
  
  const navigate = useNavigate()
  useEffect(() =>{
   const Login =()=>{
      const body = {
         email:emailRef.current.value,
         password:passRef.current.value
      }
      return new Promise((resolve,reject) =>{
         fetch('http://localhost:8080/login',{
            method:'POST',
            headers:{
              "Content-type": "application/json"
            },
            body:JSON.stringify(body)
         }).then(res => res.json())
         .then(res =>{
            localStorage.setItem('token',res.token)
         })
         .catch(err =>{
            console.log(err)
         })
      })
   }
   Login()
   },[get])
  const Hendlersubmit =(e)=>{
     e.preventDefault(); 
    
     let nameEl = document.querySelector('.Login__name')
     
     if(nameEl.value ==0 ){
        alert('Xatolik bor')
     }
     else if(!nameEl.value ==0 ){
       
        localStorage.setItem('name',nameEl.value)
        navigate('/');
     }
     
  }

    return (
        <form onSubmit={Hendlersubmit} className='Login'>
           <h1 className='Login__title'>Login</h1>
           <input placeholder='Name...' className='Login__name' type="text" />
           <input ref={emailRef} placeholder='email...' className='Login__email' type="text" />
           <input ref={passRef} placeholder='password' className='Login__pass' type="password" />
           <button onClick={() =>{setGet(x =>!x)}} type='submit' className='Login__btn'>Login</button>
        </form>
    );
}

export default Login;
