import React from "react";
import Booking from "../../Booking/Booking";
import Details from "../../facultydetails/Details";
import "./faculty.css";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
const Faculty = () => {
  const location = useLocation();
  console.log(location);
  console.log(location.pathname.split("/"));
  const idparams = location.pathname.split("/")[2];
  console.log(idparams);
  const navigate = useNavigate();
  const [facultydata, setFacultydata] = useState({});

  const getFaculty = async () => {
    if (localStorage.getItem("userid")) {
      try {
        const response = await fetch(
          `https://exquisite-backend-test.herokuapp.com/api/faculty/getProfile/${idparams}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const json = await response.json();
        console.log(response);
        console.log(json);
        setFacultydata(json?.profileData);
        console.log(json?.profileData);
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate("/login");
      //   setUserId(localStorage.getItem("userid"));
    }
  };
  useEffect(() => {
    getFaculty();
  }, []);
  return (
    <div className="flexxrow">
      <Details data={facultydata} />
      <Booking data={facultydata} />
    </div>
  );
};

export default Faculty;
