import React from 'react';
import "../PhoneSlayde/Phone.scss"
import phone1 from '../../Assets/img/phone1.jpg'
const Phone = () => {
    return (
        <div className='Slider'>
            <div className='Slider__box'>
                <img className='Slider__box__img' src={phone1} alt="" />
            </div>

            <div className='Slider__box'>
                <img className='Slider__box__img' src={phone1} alt="" />
            </div> 

             <div className='Slider__box'>
                <img className='Slider__box__img' src={phone1} alt="" />
            </div>

            <div className='Slider__box'>
                <img className='Slider__box__img' src={phone1} alt="" />
            </div>

            <div className='Slider__box'>
                <img className='Slider__box__img' src={phone1} alt="" />
            </div>

            <div className='Slider__box'>
                <img className='Slider__box__img' src={phone1} alt="" />
            </div>
            
        </div>

    );
}

export default Phone;
