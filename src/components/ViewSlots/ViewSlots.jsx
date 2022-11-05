import React from "react";
import "./viewslots.css";

const ViewSlots = (props) => {
  const deleteSlot = async () => {
    try {
      const response = await fetch(
        "https://exquisite-backend-test.herokuapp.com/slots/student/cancelslot",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            slotId: "", //-->To be made dynamic
          },
        }
      );
      console.log(response);
      const json = await response.json();
      console.log(json);
      alert("Slot Cancelled Successfully");
    } catch (error) {
      console.log(error);
      alert("Couldn't Cancel Slot");
    }
  };
  return (
    <div className="vslotflexxcol">
      <h1 className="vslottopic">Topic: {props?.topic} </h1>
      <h3> Scheduled On: {props?.date} </h3>
      <h3> Scheduled At: {props?.time} </h3>
      <h4> By: {props?.faculty} </h4>
      <button onClick={deleteSlot} className="b2 vsbtns">
        Cancel Slot
      </button>
    </div>
  );
};

export default ViewSlots;
