import React from "react";

import "./TeacherCard.css";

function TeacherCard(props) {
  return (
    <div className="card tccard">
      <div className="teacher-image">
        <img
          src={props.item.profilePic}
          className="teachercardimg"
          alt="Image of teacher"
        />
      </div>
      <div className="tcdetails">
        <div className="teacher-description">
          <h2 className="teacher-name"> {props.item?.name}</h2>
          <p className="teacher-college">B.Tech, IIT Bombay </p>
        </div>
        <div className="teacher-credentials">
          <div className="teacher-details">
            <p>
              Top Ranks :{" "}
              {props.item?.bestRanks.map((item, ind) => {
                return <span> {item}th, </span>;
              })}{" "}
            </p>
            <p>Experience : {props.item?.expYears} years </p>
            <p>Price : {props.item?.pricePerHour}/hr </p>
          </div>
          <div className="student-details">
            <p className="number">{props.item?.studentsGuided} +</p>
            <p className="general-text">Students Guided</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherCard;
