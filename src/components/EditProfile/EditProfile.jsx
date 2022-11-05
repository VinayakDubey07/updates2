import React , {useState , useEffect} from "react";
import "./editprofile.css";

import { useNavigate } from "react-router-dom";

const EditProfile = () => {

  var id = localStorage.getItem("userid");
  const navigate = useNavigate();
  const [studentDetails, setStudentDetails] = useState({
    gender: "male",
    mobile: "",
    Class: "10",
    board: "cbse",
    interests: [],
    dob: "",
  });

  useEffect(() => {
    if (localStorage.getItem("userid")) {
      
      console.log(id);
    } else {
      navigate("/login");
      //   setUserId(localStorage.getItem("userid"));
    }
  }, []);
  function checknum(e) {
    var ch = String.fromCharCode(e.which);
    if (!/[0-9]/.test(ch)) {
      e.preventDefault();
    }
  }

  const [newinterest, setNewInterest] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "interests") {
      setNewInterest(value);
    } else {
      setStudentDetails({ ...studentDetails, [name]: value });
    }
  };

  const addInterest = () => {
    setStudentDetails({
      ...studentDetails,
      interests: [...studentDetails?.interests, newinterest],
    });
    setNewInterest("");
  };

  const handleSubmit = async () => {
     try {
        const response = await fetch(
          `https://exquisite-backend-test.herokuapp.com/api/student_profiles//updateprofile/:${id}`,
          {
            
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              id: localStorage.getItem("userid"),
             
            },
            body: JSON.stringify(studentDetails),
          }
        );
        console.log(response);
        console.log(id);
        if (response?.status === 200) {
          const json = await response.json();
          console.log(json);
          navigate("/profile");
        } else {
          alert("error");
          console.log(id);
          return;
        }
      } catch (error) {
        alert("Couldn't Edit Profile");
        console.log(error);
        console.log(id);
      }
    
  };
  

  return (
    <div className="cpflexxcol">x
    <h1>Edit Profile</h1>
    <div className="cpfield useridclass">
      <h3>User Id</h3>
      <h3 className="userid">{localStorage.getItem("userid")} </h3>
    </div>
    <div className="cpfield">
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
    </div>
    <div className="cpfield">
      <label htmlFor="phone">Phone Number</label>
      <div className="cpwrap">
        <input
          value={studentDetails?.mobile}
          onChange={handleChange}
          name="mobile"
          type="text"
          id="phone"
          onKeyPress={checknum}
        />
      </div>
    </div>
    <div className="cpfield">
      <label htmlFor="class">Class</label>
      <div className="cpwrap">
        <select
          value={studentDetails?.Class}
          onChange={handleChange}
          name="Class"
          id="class"
        >
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
    </div>
    <div className="cpfield">
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
    </div>
    <div className="cpfield">
      <label htmlFor="interests">Interests</label>
      <div className="cpwrapcol">
        <div className="inflexxcol">
          {studentDetails?.interests.map((item, ind) => {
            return (
              <p className="interestlist" key={ind}>
                {item}{" "}
              </p>
            );
          })}{" "}
        </div>
        <input
          value={newinterest}
          onChange={handleChange}
          name="interests"
          type="text"
          id="interests"
        />
        <button className="b2" onClick={addInterest}>
          Add
        </button>
      </div>
    </div>
    <div className="cpfield">
      <label htmlFor="dob">DOB</label>
      <div className="cpwrap">
        <input
          value={studentDetails?.dob}
          onChange={handleChange}
          name="dob"
          type="date"
          id="dob"
        />
      </div>{" "}
    </div>
    <button className="b2" onClick={handleSubmit}>
      Edit Profile
    </button>
  </div>
  );
};

export default EditProfile;
