import React from "react";
import { useState, useRef } from "react";
import "./facultycreateprofile.css";
import Filebase from "react-file-base64";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const FacultyCreateProfile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage?.getItem("userid")) {
      //-->To be made as facultyid
      navigate("/login");
    }
  }, []);
  const rankref = useRef();

  const handleSubmit = async () => {
    if (
      facultyProfile?.bestRanks.length === 0 ||
      facultyProfile?.name.length === 0 ||
      facultyProfile?.bio.length === 0 ||
      facultyProfile?.cvLink.length === 0 ||
      facultyProfile?.dob === "" ||
      facultyProfile?.email.length === 0 ||
      facultyProfile?.expYears.length === 0 ||
      facultyProfile?.mimetype.length === 0 ||
      facultyProfile?.phone === "" ||
      facultyProfile?.pricePerHour === "" ||
      facultyProfile?.studentsGuided === "" ||
      facultyProfile?.subject.length === 0
    ) {
      alert("Enter all Mandatory Fields");
    } else {
      try {
        const response = await fetch(
          "https://exquisite-backend-test.herokuapp.com/api/faculty/addProfile",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              id: localStorage.getItem("facultyid"),
            },
            body: JSON.stringify(facultyProfile),
          }
        );
        const json = await response.json();
        console.log(json);
        console.log(response);
        alert("Your Profile has been created Successfully");
      } catch (error) {
        console.log(error);
        alert("Couldn't Create Profile");
      }
    }
  };
  function checknum(e) {
    var ch = String.fromCharCode(e.which);
    if (!/[0-9]/.test(ch)) {
      e.preventDefault();
    }
  }
  const [facultyProfile, setFacultyProfile] = useState({
    name: "",
    dob: "",
    bio: "",
    phone: "",
    email: "",
    cvLink: "",
    bestRanks: [],
    expYears: "",
    subject: "",
    pricePerHour: "",
    mimetype: "",
    studentsGuided: "",
  });
  const [newRank, setNewRank] = useState("");
  const addRanks = () => {
    if (newRank.length === 0) {
    } else {
      setFacultyProfile({
        ...facultyProfile,
        bestRanks: [...facultyProfile?.bestRanks, newRank],
      });
      setNewRank("");
      rankref.focus();
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "bestRanks") {
      setNewRank(value);
    } else {
      setFacultyProfile({ ...facultyProfile, [name]: value });
    }
  };
  return (
    <div className="cpflexxcolfac">
      <h1>Create Profile</h1>
      <div className="cpfield useridclass">
        <h3>User Id</h3>
        <h3 className="userid">{localStorage.getItem("facultyid")} </h3>
      </div>
      <div className="cpfield">
        <label htmlFor="name">Name</label>
        <div className="cpwrap">
          <input onChange={handleChange} type="text" name="name" id="name" />
        </div>
      </div>
      <div className="cpfield">
        <label htmlFor="bio">Bio</label>
        <div className="cpwrap">
          <input onChange={handleChange} type="text" name="bio" id="bio" />
        </div>
      </div>
      <div className="cpfield">
        <label htmlFor="email">Email</label>
        <div className="cpwrap">
          <input onChange={handleChange} type="email" name="email" id="email" />
        </div>
      </div>
      <div className="cpfield">
        <label htmlFor="pricePerHour">PricePerHour in Rs</label>
        <div className="cpwrap">
          <input
            onChange={handleChange}
            type="text"
            onKeyPress={checknum}
            name="pricePerHour"
            id="pricePerHour"
          />
        </div>
      </div>
      <div className="cpfield">
        <label htmlFor="studentsGuided">studentsGuided</label>
        <div className="cpwrap">
          <input
            onChange={handleChange}
            onKeyPress={checknum}
            type="text"
            name="studentsGuided"
            id="studentsGuided"
          />
        </div>
      </div>
      <div className="cpfield">
        <label htmlFor="expYears">Experience in Years</label>
        <div className="cpwrap">
          <input
            type="number"
            onChange={handleChange}
            name="expYears"
            id="expYears"
          />
        </div>
      </div>
      <div className="cpfield">
        <label htmlFor="cvLink">cvLink</label>
        <div className="cpwrap">
          <input type="url" onChange={handleChange} name="cvLink" id="cvLink" />
        </div>
      </div>
      <div className="cpfield">
        <label htmlFor="cvLink">profilepic</label>
        <div className="cpwrap">
          <Filebase
            multiple={false}
            onDone={({ base64 }) => {
              setFacultyProfile({ ...facultyProfile, mimetype: base64 });
            }}
          />
        </div>
      </div>
      {/* <div className="cpfield">
        <label htmlFor="gender">Gender</label>
        <div className="cpwrap">
          <select
          value={studentDetails?.gender}
          onChange={handleChange}
          name="gender"
          id="gender"
        >
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        </div>
      </div> */}
      <div className="cpfield">
        <label htmlFor="phone">Phone Number</label>
        <div className="cpwrap">
          <input
            onChange={handleChange}
            // value={studentDetails?.mobile}
            // onChange={handleChange}
            name="phone"
            type="text"
            id="phone"
            onKeyPress={checknum}
          />
        </div>
      </div>
      <div className="cpfield">
        <label htmlFor="subject">Subject</label>
        <div className="cpwrap">
          <select
            onChange={handleChange}
            //   value={studentDetails?.Class}
            //   onChange={handleChange}
            name="subject"
            id="subject"
          >
            <option value="Physics">Physics</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Maths">Maths</option>
            <option value="Biology">Biology</option>
          </select>
        </div>
      </div>
      {/* <div className="cpfield">
        <label htmlFor="board">Board</label>
      <div className="cpwrap">
        <select
          value={studentDetails?.board}
          onChange={handleChange}
          name="board"
          id="board"
        >
          <option value="cbse">CBSE</option>
          <option value="state">State</option>
          <option value="icse">ICSE</option>
        </select>
      </div>
      </div> */}
      <div className="cpfield">
        <label htmlFor="bestRanks">BestRanks</label>
        <div className="cpwrapcol">
          <div className="inflexxcol">
            {facultyProfile?.bestRanks?.map((item, ind) => {
              return (
                <p className="interestlist" key={ind}>
                  {item}{" "}
                </p>
              );
            })}{" "}
          </div>
          <input
            ref={rankref}
            value={newRank}
            onChange={handleChange}
            // value={newinterest}
            // onChange={handleChange}
            name="bestRanks"
            type="text"
            id="bestRanks"
          />
          <button className="b2" onClick={addRanks}>
            Add
          </button>
        </div>
      </div>
      <div className="cpfield">
        <label htmlFor="dob">DOB</label>
        <div className="cpwrap">
          <input
            //   value={studentDetails?.dob}
            //   onChange={handleChange}
            name="dob"
            type="date"
            id="dob"
            onChange={handleChange}
          />
        </div>{" "}
      </div>
      <button className="b2" onClick={handleSubmit}>
        Create Profile
      </button>
    </div>
  );
};

export default FacultyCreateProfile;
