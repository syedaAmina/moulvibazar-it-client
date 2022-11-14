import React from "react";
import "./Home.css";
import heading1 from "../../Images/heading-1.png";
const Home = () => {
  return (
    <div className="get-started d-flex  justify-content-center align-items-center">
      <div className="heading-info">
        <h1>Hello Dear Developer</h1>
        <p>Welcome to Our Knowledgehut. Learn to code and become a Web Developer in 2022 with HTML, CSS, Javascript, React, Node.js, Machine Learning & more!</p>
      </div>
      <div className="heading2">
        <img src={heading1} alt="" />
      </div>
    </div>
  );
};

export default Home;
