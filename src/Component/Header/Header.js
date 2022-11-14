import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import { AuthContext } from "./../../context/UseContext";
import { FaSun, FaUserCircle, FaMoon } from "react-icons/fa";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import { Button } from "react-bootstrap";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="header">
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand}>
          <Container fluid>
            <img className="logo" src={logo} alt="" />
            <Navbar.Brand href="#" className="fs-2 fw-bold ">
              MoulviBazar IT
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 nav">
                  <Link to="/">Home</Link>
                  <Link to="/courses">Courses</Link>
                  <Link to="/FAQ">FAQ</Link>
                  <Link to="/Blog">Blog</Link>
                  <Link className={`Header ${theme}`} onClick={toggleTheme}>
                    <Button style={{ borderRadius: "10%" }} variant={theme}>
                      {theme} {theme === "light" ? <FaSun className="mb-1 yellow-sun"></FaSun> : <FaMoon className="mb-1"></FaMoon>}
                    </Button>
                  </Link>
                  {user?.uid ? (
                    <Tippy content={<span className="fw-bold">{user.displayName}</span>}>
                      <img className="fs-2 me-3 userImg" src={user.photoURL} alt="" />
                    </Tippy>
                  ) : (
                    <FaUserCircle className="fs-2 me-3"></FaUserCircle>
                  )}
                  {user?.uid ? (
                    <div className="logout">
                      <button className="btn btn-primary fw-bold me-3" onClick={logOut}>
                        Log Out
                      </button>
                    </div>
                  ) : (
                    <>
                      <Link to="/login">Login</Link>
                    </>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default Header;
