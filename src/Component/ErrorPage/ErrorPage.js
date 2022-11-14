import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ErrorPage.css'
const ErrorPage = () => {
    return (
        <div className='container d-flex error-body'>
          <div>
            <h2 className='error'>
              <span className='sr-only'>Error</span>404
            </h2>
            <p className='page'>
             <span className='oops'>Ooopppps</span>, This page is not found !!
            </p>
            <Link to='/'> <Button className='btn-lg'>Back To Home</Button> </Link>
          </div>
    </div>
    );
};

export default ErrorPage;