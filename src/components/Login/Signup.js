import React, { useContext, useState, useEffect } from "react";
import "./signup.css";
import { Navigate, useLocation, useNavigate, Link } from "react-router-dom";
import UseridContext from "../../context/useridcontext";

const Signup = () => {
  useEffect(() => {
    if (localStorage.getItem("userid")) {
      navigate("/home");
    }
  }, []);
  const { userId, setUserId } = useContext(UseridContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [scredentials, setScredentials] = useState({
    name: "",
    email: "",
    password: "",
    profession: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setScredentials({ ...scredentials, [name]: value });
  };
  const [cpassword, setCpassword] = useState("");
  const passwordMatch = (e) => {
    setCpassword(e.target.value);
  };
  const signup = async () => {
    if (
      scredentials?.email.length === 0 ||
      scredentials?.name.length === 0 ||
      scredentials?.password.length === 0 ||
      scredentials?.profession.length === 0
    ) {
      alert("Fill all Mandatory Fields");
      return;
    } else {
      if (cpassword !== scredentials?.password) {
        alert("Passwords dont match");
        return;
      } else {
        try {
          const response = await fetch(
            "https://exquisite-backend-test.herokuapp.com/api/auth/createuser",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(scredentials),
            }
          );
          const json = await response.json();
          if (json?.success) {
            setUserId(json?.id_new);
            localStorage.setItem("userid", json?.id_new);

            // <Navigate to="/faculty" state={{ from: location }} replace />;
            navigate("/home");

            alert("Account Created Successfully");
          } else {
            alert("Couldn't Create Account ");
            return;
          }
        } catch (error) {
          console.log(error);
          alert("Couldn't Create Account ");
        }
      }
    }
  };
  return (
    <div className="page">
      <div className="cover">
        <h1>Signup</h1>
        <input
          value={scredentials?.name}
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="Name"
        />
        {/* <input type="text" placeholder="Phone Number" /> */}
        <input
          value={scredentials?.email}
          onChange={handleChange}
          name="email"
          type="text"
          placeholder="Email"
        />
        <input
          value={scredentials?.password}
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Password"
        />
        <input
          onChange={passwordMatch}
          name="cpassword"
          type="password"
          placeholder="Confirm Password"
        />
        {/* <input

          value={scredentials?.profession}
          onChange={handleChange}
          name="profession"
          type="text"
          placeholder="profession"
        /> */}
        {/* <label for="profession">Profession</label> */}
        <select onChange={handleChange} name="profession" id="profession">
          <option value="">Select a Role</option>
          <option value="faculty">Faculty</option>
          <option value="student">Student</option>
        </select>
        <div onClick={signup} className="login-btn">
          Signup
        </div>
        already have account?<Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Signup;
