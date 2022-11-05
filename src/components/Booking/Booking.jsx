import React, { useState } from "react";
import "./booking.css";
import pic1 from "../../images/teacher.png";
import pic2 from "../../images/doubt.png";
import AddTopic from "../AddTopic/AddTopic";
import { useEffect } from "react";
import SelectTopic from "../SelectTopic/SelectTopic";
import DateTimePicker from "react-datetime-picker";

const Booking = (props) => {
  const [topics, setTopics] = useState([
    "Laws of Motion",
    "Fluid Dynamics",
    "Rotational Mechanics",
  ]);
  const addNew = (topic) => {
    setTopics([...topics, topic]); //-->No Need
  };
  const [classDetails, setClassDetails] = useState({
    class: "11",
    subject: [],
    lang: ["English", "Hindi", "Hinglish"],
  });
  const [checkAvailable, setCheckAvailable] = useState(false);
  useEffect(() => {
    setClassDetails({
      class: "11",
      subject: props.data?.subject,
      lang: ["English", "Hindi", "Hinglish"],
    });
  }, [props.data]);
  const [showTopics, setShowTopics] = useState(false);
  const sharpen = () => {
    setShowTopics(!showTopics);
  };
  const [availableSlots, setAvailableSlots] = useState([]);
  useEffect(() => {
    if (props.data._id) getSlots();
  }, [props.data]);
  const getSlots = async () => {
    try {
      const response = await fetch(
        "https://exquisite-backend-test.herokuapp.com/slots/faculty/getSlots",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            facultyId: props.data._id,
          },
        }
      );
      console.log(response);
      const json = await response.json();
      console.log(json);
      console.log(json?.allSlotsOfFaculty);
      setAvailableSlots(json?.allSlotsOfFaculty);
      // const slotsofall = json?.allSlotsOfFaculty;
      // let slotsofall = json?.allSlotsOfFaculty.filter((item, ind) => {
      //   return item?._id === props.data._id;
      // });
      // console.log(slotsofall);
    } catch (error) {
      console.log(error);
    }
  };
  // let idslot;
  const [idslot, setIdslot] = useState("");
  const selectSlot = (id) => {
    // console.log(id);

    setIdslot(id);
    console.log(idslot);
  };

  const bookSlot = async () => {
    console.log(stopic);
    if (idslot.length === 0) {
      alert("Select a Slot to Book");
    } else if (stopic.length === 0) {
      setShowTopics(true);
    } else {
      try {
        const response = await fetch(
          "https://exquisite-backend-test.herokuapp.com/slots/student/bookslot",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              slotId: idslot,
            },
            body: JSON.stringify({
              studentEmail: localStorage.getItem("studentemail"),
              facultyEmail: props.data?.email,
              facultyName: props.data?.name,
              topic: stopic,
            }),
          }
        );
        console.log(response);
        const json = await response.json();
        alert("Your Slot has been Booked Successully");
        // window.location.reload();
        console.log(json);
      } catch (error) {
        alert("Couldn't Book Slot");
        // window.location.reload();

        console.log(error);
      }
    }
  };

  const getDay = (n) => {
    if (n === 0) {
      return "Sunday";
    } else if (n === 1) {
      return "Monday";
    } else if (n === 2) {
      return "Tuesday";
    } else if (n === 3) {
      return "Wednesday";
    } else if (n === 4) {
      return "Thursday";
    } else if (n === 5) {
      return "Friday";
    } else if (n === 6) {
      return "Saturday";
    }
  };
  const getMonth = (m) => {
    if (m === 0) {
      return "January";
    } else if (m === 1) {
      return "February";
    } else if (m === 2) {
      return "March";
    } else if (m === 3) {
      return "April";
    } else if (m === 4) {
      return "May";
    } else if (m === 5) {
      return "June";
    } else if (m === 6) {
      return "July";
    } else if (m === 7) {
      return "August";
    } else if (m === 8) {
      return "September";
    } else if (m === 0) {
      return "October";
    } else if (m === 10) {
      return "November";
    } else if (m === 11) {
      return "December";
    }
  };
  // const [datetime, setDatetime] = useState(new Date());
  const [stopic, setStopic] = useState("");
  return (
    <div className={showTopics ? "bookflexxcol-sm" : "bookflexxcol"}>
      <div className="bookflexxrow">
        <div className="bookdetails">
          <i className="fa-solid fa-lock lockicon"></i>
          {classDetails?.class} Class{" "}
        </div>
        <div className="bookdetails">
          <i className="fa-solid fa-lock lockicon"></i>
          <p>{classDetails?.subject} </p>
          {/* {classDetails?.subject?.map((sub, ind) => {
            console.log(sub);
            return <p key={ind}>{sub} , </p>;
          })}{" "} */}
        </div>
        <select className="bookselect">
          <option value="#">Select Language</option>

          {classDetails?.lang.map((item, ind) => {
            return (
              <option key={ind} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div className="bookopflexxrow">
        <div className="bookflexx2">
          <img className="bookpics" src={pic1} alt="" />
          <div className="bookflexxcol2">
            <p className="fields">Doubt</p>
            <p className="fields">Solving</p>
          </div>
        </div>
        <div
          onClick={sharpen}
          className={showTopics ? "bookflexx2true" : "bookflexx2"}
        >
          <img className="bookpics" src={pic2} alt="" />
          <div className="bookflexxcol2">
            <p className="fields">Sharp Your</p>
            <p className="fields">Concepts</p>
          </div>
        </div>
      </div>
      {showTopics && (
        <SelectTopic
          setShow={setShowTopics}
          setTopic={setStopic}
          data={props.data}
          topic={stopic}
        />
      )}
      {/* ) : ( */}
      {!showTopics && (
        <h3 className="selecttopic">
          {" "}
          {stopic.length !== 0 && `Selected Topic : ${stopic}`}{" "}
        </h3>
      )}
      <div className="know lightshade">
        What your teacher should know before class?
      </div>
      <textarea name="" id="" cols="30" rows="6"></textarea>

      {/* <DateTimePicker
            className="datetimeclass"
            onChange={setDatetime}
            value={datetime}
          /> */}
      {/* {console.log(datetime)} */}
      <h2> {checkAvailable && "Available Slots"} </h2>

      {/* <div className="bookbtns"> */}
      {<p>{availableSlots.length === 0 && "Not Available"} </p>}
      {checkAvailable && (
        <div className="bookbtns">
          {availableSlots.map((slot, ind) => {
            return (
              <div
                onClick={() => {
                  if (!slot?.isAvailable) {
                    alert("It's Already Booked");
                    selectSlot("");
                  } else {
                    selectSlot(slot._id);
                  }
                }}
                key={slot._id}
                className={
                  slot?.isAvailable
                    ? idslot === slot?._id
                      ? "slots-selected"
                      : "slots"
                    : "slots-not"
                }
              >
                <p>
                  {" "}
                  <span className={slot?.isAvailable ? "fin" : "fi"}>
                    Duration :
                  </span>{" "}
                  &nbsp;
                  {slot?.slotDuration} Minutes{" "}
                </p>
                <p>
                  <span className={slot?.isAvailable ? "fin" : "fi"}>
                    Time :
                  </span>{" "}
                  &nbsp;
                  {new Date(slot?.slotDateTime).getHours() >= 12
                    ? new Date(slot?.slotDateTime).getHours() - 12 + "PM"
                    : new Date(slot?.slotDateTime).getHours() + "AM"}{" "}
                </p>
                <p>
                  {" "}
                  <span className={slot?.isAvailable ? "fin" : "fi"}>
                    Date :
                  </span>{" "}
                  &nbsp;
                  {new Date(slot?.slotDateTime).getDate()}
                  {getMonth(new Date(slot?.slotDateTime).getMonth())}
                  {new Date(slot?.slotDateTime).getFullYear()}{" "}
                </p>
                <p>
                  {" "}
                  <span className={slot?.isAvailable ? "fin" : "fi"}>
                    Day :
                  </span>{" "}
                  &nbsp;
                  {getDay(new Date(slot?.slotDateTime).getDay())}{" "}
                </p>
                <p>
                  <span className={slot?.isAvailable ? "fin" : "fi"}>
                    Available :
                  </span>{" "}
                  &nbsp;
                  {slot?.isAvailable ? "Yes" : "No"}{" "}
                </p>
              </div>
            );
          })}
        </div>
      )}
      <div className="bookbtns">
        <button
          className="b1"
          onClick={() => {
            // setCheckAvailable(!checkAvailable);
            // const selectedDate = new Date(datetime);
            // const availability = availableSlots.find((slot) => {
            // console.log(slot.slotDateTime);
            // const availableSlot = new Date(slot.slotDateTime);
            // return selectedDate.valueOf() == availableSlot.valueOf();
            // });
            // if (!availability) {
            //   window.alert(
            //     "slot not available. please select from following slots."
            //   );
            setCheckAvailable(!checkAvailable);
            // } else {
            // selectSlot(idslot);
            // }
          }}
        >
          {" "}
          <i className="fa-solid fa-calendar-week"></i> &nbsp;Check Availability
        </button>
        {/* <p> Book on  </p> */}
        <button
          // disabled={idslot ? true : false}
          onClick={bookSlot}
          className="b2"
        >
          Book slot
        </button>
      </div>

      {/* </div> */}

      {/* )} */}
    </div>
  );
};

export default Booking;
