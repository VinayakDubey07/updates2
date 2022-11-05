import React, { useState, useEffect } from "react";
import "./profile.css";
import { useNavigate } from "react-router-dom";
// import axios from 'axios';

function Profile() {
  const [userId, setUserId] = useState("");
  const [profileData, setProfileData] = useState([{}, {}]);
  const navigate = useNavigate();

  // const api = axios.create({
  //   baseURL: 'https://exquisite-backend-test.herokuapp.com/',
  //   headers: {'X-Custom-Header': 'foobar', 'id': localStorage.getItem("userid")},
  //   timeout: 10000
  // })

  const getUser = async () => {
    // const data = await api.post("api/auth/getuser");
    try {
      const response = await fetch(
        "https://exquisite-backend-test.herokuapp.com/api/auth/getuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            id: localStorage.getItem("userid"),
          },
        }
      );
      const json = await response.json();
      console.log(response);
      console.log(json);
      setProfileData(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userid")) {
      getUser();
    } else {
      navigate("/login");
      //   setUserId(localStorage.getItem("userid"));
    }
  }, []);
  return (
    <div className="profile">
      {/* <img src="https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"></img> */}

      <h1 className="prhead">Personal Details</h1>
      <h3>Id: {localStorage.getItem("userid")} </h3>

      <div className="details">
        <div className="profileflexxrow">
          <label htmlFor="name">Name</label>
          <h5 id="name">{profileData[0].name} </h5>
        </div>
        <div className="profileflexxrow">
          <label htmlFor="email">Email</label>
          <h5 id="email">{profileData[0].email} </h5>
        </div>
        <div className="profileflexxrow">
          <label htmlFor="phone">Phone Number</label>
          <h5 id="phone">{profileData[1].mobile} </h5>
        </div>
        <div className="profileflexxrow">
          <label htmlFor="dob">DOB</label>
          <h5 id="dob">
            {" "}
            {profileData[1].dob ? profileData[1].dob.slice(0, 10) : ""}{" "}
          </h5>
        </div>
        <div className="profileflexxrow">
          <label htmlFor="board">Board</label>
          <h5 id="board"> {profileData[1].board}</h5>
        </div>
        <div className="profileflexxrow">
          <label htmlFor="class">Class</label>
          <h5 id="class"> {profileData[1].Class}</h5>
        </div>
        <div className="profileflexxrow">
          <label htmlFor="interests">Interests</label>
          <h5 id="class" className="intereststflexxcol">
            {" "}
            {profileData[1]?.interests?.length === 0
              ? "You don't have any Interests till now "
              : profileData[1]?.interests?.map((item, ind) => {
                  return (
                    <p className="instu" key={ind}>
                      {" "}
                      {item}{" "}
                    </p>
                  );
                })}
          </h5>
        </div>
        {/* <article>
          <div>
            <h4>Name: {profileData[0].name}</h4>
          </div>
        </article>

        <article>
          <div>
            <h4>Email Id: {profileData[0].email} </h4>
          </div>
        </article>
        <article>
          <div>
            <h4>Contact: {profileData[1].mobile}</h4>
          </div>
        </article>
        <article>
          <div>
            <h4>
              {" "}
              DOB: {profileData[1].dob ? profileData[1].dob.slice(0, 10) : ""}
            </h4>
          </div>
        </article>
        {/* <article>
          <div>
            <h4>Adress: </h4>
          </div>
        </article>
        <article>
          <div>
            <h4>Program: </h4>
          </div> */}
        {/* </article> */}
        {/* <article>
          <div>
            <h4>Board : {profileData[1].board}</h4>
          </div>
        </article>
        <article>
          <div>
            <h4>Class: {profileData[1].Class} </h4>
          </div>
        </article>  */}
      </div>
    </div>
  );
}

export default Profile;
