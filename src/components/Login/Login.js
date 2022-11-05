import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UseridContext from "../../context/useridcontext";
import "./Login.css";

const Login = () => {
  useEffect(() => {
    if (localStorage.getItem("userid")) {
      navigate("/home");
    }
  }, []);
  const { userId, setUserId } = useContext(UseridContext);
  const navigate = useNavigate();
  const [lcredentials, setLcredentials] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLcredentials({ ...lcredentials, [name]: value });
  };
  const login = async () => {
    if (
      lcredentials?.email.length === 0 ||
      lcredentials?.password.length === 0
    ) {
      alert("Fill All Mandatory Fields");
      return;
    } else {
      try {
        const response = await fetch(
          "https://exquisite-backend-test.herokuapp.com/api/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(lcredentials),
          }
        );

        const json = await response.json();
        if (json?.success) {
          setUserId(json?.id_new);
          localStorage.setItem("userid", json?.id_new);
          localStorage.setItem("studentemail", json?.email);

          console.log("Logged in Successfully");
          navigate("/home");
        } else {
          alert("Invalid Credentials");
          return;
        }
      } catch (error) {
        console.log(error);
        alert("Couldn't Login Successfully");
      }
    }
  };
  return (
    <div className="page">
      <div className="cover">
        <h1>Login</h1>
        <input
          onChange={handleChange}
          name="email"
          className="input"
          type="text"
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          name="password"
          className="input"
          type="password"
          placeholder="Password"
        />
        <div>
          <h5>
            Dont have an Acoount yet? <Link to="/signup">Sign up</Link>
          </h5>
          <h5>Are you a Faculty? Click Here</h5>
        </div>

        <div onClick={login} className="login-btn">
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;
