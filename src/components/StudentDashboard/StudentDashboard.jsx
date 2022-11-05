import React, { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import ViewSlots from "../ViewSlots/ViewSlots";
import "./studentdashboard.css";

const StudentDashboard = () => {
  const [slots, setSlots] = useState([{},{}]);
  const getStudentSlots = async () => {
    try {
      const response = await fetch(
        "https://exquisite-backend-test.herokuapp.com/upcoming",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            studentEmail: localStorage.getItem("studentemail"),
          },
        }
      );
      const json = await response.json();
      console.log(response);
      console.log(json);
      // setSlots(json?.upcomingMeetings);
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("userid")) {
      navigate("/login");
    } else {
      getStudentSlots();
    }
  }, []);

  return (
    <div className="stdashflexxcol">
      <h1>Hello User</h1>
      <h3>
        {" "}
        {slots.length !== 0
          ? "These are Your Booked Slots"
          : "There is no booking till now"}{" "}
      </h3>
      <div className="stdashflexxrow">
        {slots.map((slot, ind) => {
          return <ViewSlots />;
        })}
      </div>
    </div>
  );
};

export default StudentDashboard;
