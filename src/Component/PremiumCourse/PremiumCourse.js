import React, { useContext } from 'react';
import { FaCheck } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/UseContext';
import './PremiumCourse.css'

const PremiumCourse = () => {
    const premiumInfo = useLoaderData();
    const {image,name} = premiumInfo;
    const {user} = useContext(AuthContext)
    // console.log(user);

    return (    
        <div className='d-flex justify-content-center mt-3'>
            <div className='premium'>
            <p className='fs-4 fw-bold mt-2'>Congratulations, <span className='fw-bold text-primary'>{user.displayName}</span>, You got the premium access</p>
            <img src={image} alt="" />
             <div className='left-info mt-3'>
             <p className='fs-4 fw-bold'>Buying Status : <span className='text-success'>Successful</span> <FaCheck className='mb-2 text-success'></FaCheck></p>
             <p className='fs-5'><span className='fs-4 fw-bold'>Course Name :</span> {name}</p>
             <p className='fs-5'><span className='fs-4 fw-bold'>User Email :</span> {user.email}</p>
             <p className='fs-5'><span className='fs-4 fw-bold'>User Name :</span> {user.displayName}</p>
             <p className='fs-5'><span className='fs-4 fw-bold'>Last Login Time :</span> {user.metadata.lastSignInTime}</p>
             </div>
        </div>
        </div>
    );
};

export default PremiumCourse;