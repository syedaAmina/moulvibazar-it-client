import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
const Sidebar = ({course}) => {
    const {name,id} = course
    return (
        <div className='sidebar'>
           <Link to= {`/courses/${id}`}>{name}</Link>
        </div>
    );
};

export default Sidebar;