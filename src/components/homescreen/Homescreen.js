import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import TeacherCard from "./TeacherCard";
import Form from "./Form";

import "./Homescreen.css";

function Homescreen() {
  const navigate = useNavigate();
  const [allfaculty, setAllfaculty] = useState([]);

  const getAll = async () => {
    if (localStorage.getItem("userid")) {
      try {
        const response = await fetch(
          "https://exquisite-backend-test.herokuapp.com/api/faculty/getAllProfiles",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response);
        const json = await response.json();
        setAllfaculty(json?.profileData);
        setFiltered(json?.profileData);

        console.log(json?.profileData);
        // console.log(json);
      } catch (error) {
        console.log(error);
      }
    } else {
      navigate("/login");
      //   setUserId(localStorage.getItem("userid"));
    }
  };
  useEffect(() => {
    getAll();
  }, []);
  const [filtered, setFiltered] = useState([]);
  const [filter, setFilter] = useState({
    class: "11",
    board: "CBSE",
    subject: "Physics",
  });
  const addFilter = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };
  //Filter Function
  const searchFaculties = () => {
    let results = allfaculty.filter((item, ind) => {
      let subjectf = item?.topics.map((no) => {
        return no?.Class;
      });
      let boardf = item?.topics.map((no) => {
        //-->Boardf gives array of arrays so we use for loop to get all elements in one array
        return no?.board;
      });
      console.log(subjectf);
      console.log(boardf);
      let allb = [];

      for (let int = 0; int < boardf.length; int++) {
        allb = [...allb, ...boardf[int]];
      }
      console.log(allb);
      console.log(subjectf.includes(filter.class));
      let isBoard = allb.includes(filter.board);
      console.log(isBoard);
      let isClass = subjectf.includes(filter.class);
      return isBoard && isClass && item.subject === filter.subject;
    });
    setFiltered(results);
    console.log(results);
    setSearched(true);
  };
  const [searched, setSearched] = useState(false);
  return (
    <div className="allfflexxcol">
      <div className="header"> </div>
      <div className="main-image__container">
        <img
          src="../../../assets/images/homescreen.png"
          className="main-image"
        />
      </div>
      <div className="homeflexxrow">
        {/* <label for="cars">Choose a car</label> */}

        <select onChange={addFilter} name="class" id="class">
          {/* <option value="">Select Class</option> */}
          <option value="11">class 11</option>
          <option value="12">class 12</option>
        </select>
        <select onChange={addFilter} name="board" id="board">
          {/* <option value="">Select Board/Coaching</option> */}
          <option value="CBSE">CBSE</option>
          <option value="ICSE">ICSE</option>
          <option value="NTSE">NTSE</option>
          <option value="JEE">JEE Advanced</option>
          <option value="Olympiad">Olympiad</option>
          <option value="NEET">NEET</option>
          <option value="JEE">JEE Main</option>
        </select>
        <select onChange={addFilter} name="subject" id="subject">
          {/* <option value="">Select Subject/Category</option> */}
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Maths">Mathematics</option>
          <option value="Biology">Biology</option>
        </select>
        <button className="b2" onClick={searchFaculties}>
          Search
        </button>
        {/* <main className="main"> */}
      </div>
      <h2 className="searchhead">
        {" "}
        {searched ? "Your Search" : "Our Faculties"}{" "}
      </h2>
      <div className="faculty">
        {filtered.map((item, ind) => {
          return (
            <Link key={item?._id} to={`/faculty/${item?._id}`}>
              <TeacherCard key={item?._id} item={item} />;
            </Link>
          );
        })}
      </div>
      {/* </main> */}
    </div>
  );
}

export default Homescreen;
