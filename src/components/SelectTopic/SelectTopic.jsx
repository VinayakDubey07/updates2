import React from "react";
import { useState } from "react";
import "./selecttopic.css";

const SelectTopic = ({ data, setTopic, setShow, topic }) => {
  const handleClick = (name) => {
    setTopic(name);
    console.log(name);
  };
  const [showTop, setShowTop] = useState(false);
  const changeShowTop = () => {
    setShowTop(!showTop);
  };
  return (
    <div className="topicflexx">
      {/* <label for="cars">Choose a car:</label> */}

      {/* <select onChange={handleChange} name="cars" id="cars">
        <option value="">Select Your Topic</option>
        {data?.topics?.map((topic, ind) => {
          return (
            <option value={topic?.name}>
              {" "}
              <div className="selectflexxcol">
                <p>{topic?.name}</p>
                <p>
                  {" "}
                  <span> {data?.pricePerHour}/Hour </span> ||
                  <span> 16 Classes Required </span>{" "}
                </p>
              </div>{" "}
            </option>
          );
        })}
      </select> */}

      <div className="dropdownflexxcol">
        <div onClick={changeShowTop} className="maindrop">
          {topic.length === 0 ? "Select your topic" : topic}
          {showTop ? (
            <i class="fa-solid fa-chevron-up"></i>
          ) : (
            <i class="fa-solid fa-chevron-down"></i>
          )}
        </div>
        <div className={showTop ? "drops" : "drops-false"}>
          {/* <div className="dropnames">
            <p>Modern Physics</p>
            <div className="dropflexxrow">
              <span>4K per Class | </span>
              <span>16 Classes Required </span>
            </div>
          </div> */}
          {data?.topics?.map((topic, ind) => {
            return (
              <div
                name={topic?.name}
                onClick={() => {
                  handleClick(topic?.name); //-->Pass name of topic to the clickfnc and which will set the topic as the name of the chosen one
                }}
                className="dropnames"
              >
                <p>{topic?.name} </p>
                <div className="dropflexxrow">
                  <span> Rs {data?.pricePerHour} per Class&nbsp; | &nbsp;</span>
                  <span>{"16 Classes Required"}</span>
                </div>
              </div>
            );
          })}
          {/* <div className="dropnames">
            <p>Physical World</p>
            <div className="dropflexxrow">
              <span>4K per Class || </span>
              <span>16 Classes Required </span>
            </div>
          </div>
          <div className="dropnames">
            {" "}
            <p>Units and Measurements</p>
            <div className="dropflexxrow">
              <span>4K per Class || </span>
              <span>16 Classes Required </span>
            </div>
          </div>
          <div className="dropnames">
            {" "}
            <p>Motion in Plane</p>
            <div className="dropflexxrow">
              <span>4K per Class || </span>
              <span>16 Classes Required </span>
            </div>
          </div>
          <div className="dropnames">
            {" "}
            <p>Laws of Motion</p>
            <div className="dropflexxrow">
              <span>4K per Class || </span>
              <span>16 Classes Required </span>
            </div>
          </div> */}
        </div>
      </div>
      {/* <button
        className="b2"
        onClick={() => {
          setShow(false);
        }}
      >
        Select Slot
      </button> */}
    </div>
  );
};

export default SelectTopic;
