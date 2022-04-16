import React from 'react';
import './Service.css'

const Service = ({service}) => {
    const {name, id,img, description, price} = service;
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h4>{name}</h4>
            <p><strong>Price: {price} BDT</strong></p>
            <p className='service-description'><small>{description}</small></p>
            <button>Book {name}</button>
        </div>
    );
};

export default Service;