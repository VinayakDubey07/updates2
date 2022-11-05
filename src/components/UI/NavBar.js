import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const NavBar = () => {
  const Logingout = () => {
    localStorage.removeItem("userid");
    localStorage.removeItem("studentemail");
    console.log("loggedo");
    window.location.reload();
  };
  const [popup, setPopup] = useState(false);
  const showOptions = () => {
    setPopup(!popup);
  };
  if (localStorage.getItem("userid")) {
    return (
      <>
        <nav className="nav">
          <a href="/" className="title">
            {/* BRAND.{" "} */}
          </a>
          <ul>
            <li>
              <a href="/Pricing">Courses</a>
            </li>
            <li>
              <a href="/About">Book a Demo</a>
            </li>
            <li>
              <a href="#" className="ptblink">
                PTB
              </a>
            </li>
            <li>
              <a href="/About">Scholorship Exam</a>
            </li>
            <li className="userprofile" onClick={showOptions}>
              <i class="fa-solid fa-circle-user"> </i>
            </li>
          </ul>
        </nav>
        {popup && (
          <div className="editpopupflexxcol">
            <Link to="/createprofile">
              <p> Edit Profile</p>
            </Link>
            <Link to="/profile">
              <p>Profile</p>
            </Link>
            <button className="b2" onClick={Logingout}>
              Logout
            </button>
          </div>
        )}
      </>
    );
  }
};

export default NavBar;
