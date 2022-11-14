import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./FAQ.css";
const FAQ = () => {
  return (
    <Accordion defaultActiveKey="0" className="mt-5 container text-start mb-5">
      <h1 className="text-center mb-5  fw-bold">Frequently Asked Questions</h1>
      <Accordion.Item eventKey="0">
        s
        <Accordion.Header>
          <span className="fs-3 fw-bold ">What are the main challenges of machine learning?</span>
        </Accordion.Header>
        <Accordion.Body className="fs-5 fw-bold">Common issues in Machine Learning Inadequate Training Data Poor quality of data. Non-representative training data.Overfitting and Underfitting.Monitoring and maintenance.Getting bad recommendations.Lack of skilled resources.Customer Segmentation.</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <span className="fs-3 fw-bold ">What is the limitations of machine learning?</span>
        </Accordion.Header>
        <Accordion.Body className="fs-5 fw-bold">What is the limitations of machine learning? Image result Poor transfer learning ability, reusability of modules, and integration. Systems are opaque, making them very hard to debug. Performance cannot be audited or guaranteed at the 'long tail' They encode correlation, not causation or ontological relationships.</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <span className="fs-3 fw-bold ">What is the future of machine learning?</span>
        </Accordion.Header>
        <Accordion.Body className="fs-5 fw-bold">Machine Learning is a subfield of Artificial Intelligence. From predicting the spread of the COVID-19 virus to supporting cutting-edge cancer research, AI & ML can disrupt and transform every single segment of society.</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <span className="fs-3 fw-bold ">What is Node? How does Node work?</span>
        </Accordion.Header>
        <Accordion.Body className="fs-5 fw-bold">What is this node? Image result for What is Node? How does Node work? Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser.Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default FAQ;
