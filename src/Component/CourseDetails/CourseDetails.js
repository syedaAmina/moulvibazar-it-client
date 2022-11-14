import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import PDFButton from "../PDFButton/PDFButton";
import "./CourseDetails.css";
const CourseDetails = () => {
  const courseDetails = useLoaderData();
  console.log(courseDetails);
  const { name, Difficulty, Duration, classes, details, image, topics, id } = courseDetails;
  return (
    <div>
      <PDFButton rootElementID={"pageToDownLoad"} DownloadFileName="coursePage"></PDFButton>
      <div className="d-flex container details-container">
        <div className="details-body">
          <h1 className="text-center text-secondary fw-bold ">{name}</h1>
          <p>
            <span className="fw-bold">Difficulty</span> :{Difficulty}
          </p>
          <p>
            <span className="fw-bold">Duration</span> :{Duration}
          </p>
          <p>
            {" "}
            <span className="fw-bold">Classes </span> :{classes}
          </p>
          <p>
            <span className="fw-bold">Topics</span> :{topics}
          </p>
          <p>
            <span className="fw-bold">Course OutCome</span>: {details}
          </p>
          <Link to={`/${id}/premium-access`}>
            <button className="btn btn-lg btn-secondary">Get Premium Access</button>
          </Link>
        </div>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default CourseDetails;
