import React, { useState } from "react";
import "./addtopic.css";
const AddTopic = (props) => {
  const [topic, setTopic] = useState("");
  const addTopic = (e) => {
    const { value } = e.target;
    setTopic(value);
  };
  const addnewTopic = () => {
    props.addnew(topic);
    setTopic("");
  };

  return (
    <div className="addflexxcol">
      {props?.topics.map((item, ind) => {
        return (
          <p key={ind} className="top">
            {item}{" "}
          </p>
        );
      })}
      <input
        value={topic}
        className="addtopic"
        onChange={addTopic}
        type="text"
        placeholder="Enter your Topic"
      />
      <button
        disabled={topic.length === 0}
        onClick={addnewTopic}
        className="bbtn"
      >
        Add Topic
      </button>
    </div>
  );
};

export default AddTopic;
