import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Courses.css'
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
const Courses = () => {
    const courses = useLoaderData();
    return (
        <Container className='mt-5'>
        <Row>
            <Col lg="4" className='d-lg-block side-body'>
                {
                    courses.map(course => <Sidebar
                    key={course.id}
                    course = {course}
                    ></Sidebar>)
                }
            </Col>
            <Col lg="8" className='course-body'>
            {
                courses.map ( course => <Course
                key={course.id}
                course = {course}
                ></Course>)
            }
            </Col>
        </Row>
    </Container>
    
    );
};

export default Courses;