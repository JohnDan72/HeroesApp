import React from 'react';
import { Link } from 'react-router-dom';
import { Divider } from 'rsuite';

const NotFound = () => {
    return (
        <div className="container">
            <h3>404 - Page not found</h3>
            <Divider></Divider>
            <Link className="rs-nav-item" to="/">Go Home</Link>
        </div>
    );
}

export default NotFound;