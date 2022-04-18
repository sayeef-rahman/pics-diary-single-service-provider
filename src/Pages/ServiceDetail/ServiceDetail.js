import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceID } = useParams();
    console.log("In Service Detail: ",serviceID);
    return (
        <div className='text-center mt-3'>
            <h1>You have selected service number: {serviceID}</h1>
            <div className='m-3'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;