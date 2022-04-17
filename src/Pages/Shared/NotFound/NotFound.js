import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../../images/banner/notfound.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
            <img src={notFound}/>
            <button><Link to='/'>Go Home</Link></button>
        </div>
    );
};

export default NotFound;