import React, { useState } from "react";
import "./details.css";
import dp from "../../images/dp.jpg";
import { useEffect } from "react";

const Details = (props) => {
  // const biodata = props.data?.bio.split(",");

  const [facultyDetails, setFacultyDetails] = useState({
    pic: props.data?.profilePic,
    name: props.data?.name,
    degree: "B.Tech, IIT Roorkee",
    subject: [],
    message:
      "Teachers don’t discriminate among their students. For a teacher, every student is full of potential to succeed. It is not important what the teacher teaches – it is important how the teacher teaches.",
    ranks: "5th, 6th",
    years: props.data?.expYears,
    count: props.data?.studentsGuided,
    cost: props.data?.pricePerHour,
  });
  useEffect(() => {
    setFacultyDetails({
      pic: props.data?.profilePic,
      name: props.data?.name,
      degree: "B.Tech, IIT Roorkee",
      subject: props.data?.subject,
      message: props.data?.bio,
      ranks: "5th, 6th",
      years: props.data?.expYears,
      count: props.data?.studentsGuided,
      cost: props.data?.pricePerHour,
    });
  }, [props.data]);
  console.log(facultyDetails?.subject);
  return (
    <div className="dflexxcol">
      <img
        className="dpic"
        src={facultyDetails?.pic ? facultyDetails?.pic : dp}
        alt=""
      />
      <h2 className="darkshade name"> {facultyDetails?.name} </h2>
      <p className="lightshade degree">{facultyDetails?.degree} </p>
      <h5 className="lightshade sub">
        <span>{facultyDetails?.subject} </span>
        {/* {facultyDetails?.subject &&
          facultyDetails?.subject.map((item, ind) => {
            return <span>{item}, </span>;
          })}{" "} */}
        Faculty{" "}
      </h5>
      <p className="fmessage lightshade">{facultyDetails?.message} </p>
      <div className="dflexxrow">
        <div className="exp">
          <h3 className="exphead darkshade">{facultyDetails?.ranks} </h3>
          <span className="lightshade">Top </span>
          <span className="lightshade">Ranks </span>
        </div>
        <div className="exp">
          <h3 className="exphead darkshade">{facultyDetails?.years} yrs</h3>
          <span className="lightshade">Total </span>
          <span className="lightshade">Experience </span>
        </div>
        <div className="exp">
          <h3 className="exphead darkshade">{facultyDetails?.count} </h3>
          <span className="lightshade">Students </span>
          <span className="lightshade">Guided</span>
        </div>
      </div>
      <div className="cost">
        <h1 className="costm darkshade">{facultyDetails?.cost} /- </h1>
        <div className="costflex">
          <p className="lightshade">Charges</p>
          <p className="lightshade">per hour</p>
        </div>
      </div>
      <button className="btn1">Scholarship</button>
      <button className="btn2">Demo Lecture</button>
    </div>
  );
};

export default Details;
