import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UseContext";
import "./SignUp.css";
const SignUP = () => {
  const [error, setError] = useState(null);
  const { createUser, updateUserProfile } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    const photoURL = form.photoURL.value;
    const name = form.name.value;

    //creating user
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("after signup", user);
        form.reset();
        handleProfile(name, photoURL);
        console.log(name, photoURL);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="login-container">
      <h1 className="title">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="login-form">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="" placeholder="Your email address" />
        </div>
        <div className="login-form">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" placeholder="Your email address" />
        </div>
        <div className="login-form">
          <label htmlFor="photoURL">Photo URL</label>
          <input type="url" name="photoURL" id="" placeholder="Your Photo URl" />
        </div>
        <div className="login-form">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" placeholder="Your password" />
        </div>
        <div className="login-form">
          <label htmlFor="Confirm">Confirm Password</label>
          <input type="password" name="Confirm" id="" placeholder="Your password" />
        </div>
        <p className="text-error">{error}</p>
        <button className="submit-button">Submit</button>
      </form>
      <p className="login-text">
        Already Have an account?{" "}
        <Link className="login-text" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUP;
