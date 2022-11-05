import React from "react";
import './student.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Grid} from '@mui/material';
import Card from 'react-bootstrap/Card';
import {FaUserAlt} from 'react-icons/fa'
import faculties from "../redirect_to_faculty/faculties";

function App() {

  return (
    <div className="App">
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <h2>Exquisite</h2>
      <section className="userData" >
      <NavDropdown title={
        <FaUserAlt style={ { height: "1.5rem", width: "1.5rem"}}/>
      } id="collasible-nav-dropdown" className="user">
              <NavDropdown.Item href="#">view profile</NavDropdown.Item>
              <NavDropdown.Item href="#">edit profile</NavDropdown.Item>
              <NavDropdown.Item href="#">setting</NavDropdown.Item>
            </NavDropdown>
            <h5 className="userName">RAJDEEP</h5>
      </section>
    </Container>
  </Navbar>
  <div className="welcome">
  <div className="welcomeLeft">
  <h3>WELCOME BACK</h3>
  <h2 style={{color:"#fff"}}>RAJDEEP</h2>
      Check out your schedule
  </div>
  <div className="profileImage">

  </div>
  
  </div>
  <div className="schedule">
  <Grid container lg={12}>
  <Grid  style={{height:"20vh", width:"10vw", background:"rgb(237, 146, 49)",marginLeft:'10vw',marginRight:'5vw', borderRadius:'10px', display:"flex",flexDirection:"column", justifyContent:"center"}}><p>Next Class</p><a href="#">join class</a></Grid>
  <Grid  style={{height:"20vh", width:"10vw", background:"rgb(237, 146, 49)",marginLeft:'5vw',marginRight:'5vw',borderRadius:'10px',display:"flex",flexDirection:"column", justifyContent:"center"}}><p>Upcoming class</p><a href="#">join class</a></Grid>
  <Grid  style={{height:"20vh", width:"10vw", background:"rgb(237, 146, 49)",marginLeft:'5vw',marginRight:'5vw',borderRadius:'10px',display:"flex",flexDirection:"column", justifyContent:"center"}}><p>Past class</p><a href="#">join class</a></Grid>
  <Grid  style={{height:"20vh", width:"10vw", background:"rgb(237, 146, 49)",marginLeft:'5vw',marginRight:'10vw',borderRadius:'10px',display:"flex",flexDirection:"column", justifyContent:"center"}}><p>Professers</p><a href="../redirect_to_faculty/faculties.js">prof list</a></Grid>
  </Grid>
  </div>
  </div>
  );
}

export default App;