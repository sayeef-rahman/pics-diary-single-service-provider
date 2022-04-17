import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {name, id,img, description, price} = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h4>{name}</h4>
            <p className='service-price'><strong>Price: {price} BDT</strong></p>
            <p className='service-description'><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='book-btn'>Book {name}</button>
        </div>
    );
};

export default Service;