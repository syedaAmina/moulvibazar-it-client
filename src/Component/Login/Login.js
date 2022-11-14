import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UseContext";
import "./Login.css";
import { FaGoogle, FaGithub } from "react-icons/fa";
const Login = () => {
  const { signIn, signWithPopUp, signInWithGitHub } = useContext(AuthContext);

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    //login area
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
        setError("");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  const handleGoogle = () => {
    signWithPopUp()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGithub = () => {
    signInWithGitHub()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="login-container">
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="login-form">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" placeholder="Your email address" />
        </div>
        <div className="login-form">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" placeholder="Your password" />
        </div>
        <p className="text-danger">{error}</p>
        <button className="submit-button">Submit</button>
      </form>
      <p className="login-text">
        New to MoulviBazar IT?{" "}
        <Link to="/signup" className="login-text">
          Create a New Account
        </Link>
      </p>
      <button className="google-button" onClick={handleGoogle}>
        <FaGoogle /> Continue With Google
      </button>
      <button className="google-button" onClick={handleGithub}>
        <FaGithub /> Continue With Github
      </button>
    </div>
  );
};

export default Login;
