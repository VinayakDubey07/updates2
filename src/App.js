import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login/Login";
import "../src/components/Login/Login.css";
import Calendar from "./components/homescreen/Calendar";
import Homescreen from "./components/homescreen/Homescreen";
import NavBar from "./components/UI/NavBar";
import Dashboard from "./components/homescreen/Dashboard";
import Profile from "./components/homescreen/Profile";
import Signup from "./components/Login/Signup";
import Navigator from "./components/UI/Navigator";
import Faculty from "./components/page/faculty/Faculty";
import CreateProfile from "./components/CreateProfile/CreateProfile";
// import Student from "./components/student/student";
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
  Outlet,
} from "react-router-dom";
import Courses from "./components/Sidebar/Courses";
import RequireAuth from "./hooks/RequireAuth";
import { useContext } from "react";
import UseridContext from "./context/useridcontext";
import StudentDashboard from "./components/StudentDashboard/StudentDashboard";
import FacultyCreateProfile from "./components/Faculty UI/CreateProfileFac/FacultyCreateProfile";
import EditProfile from "./components/EditProfile/EditProfile";

function App() {
  const { userId } = useContext(UseridContext);
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <div className="direction">
          {/* <Navigator /> */}

          <Outlet />
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            {/* <Route element={<RequireAuth id={userId} />}> */}
            <Route path="/faculty/:id" element={<Faculty />} />
            <Route exact path="/calendar" element={<Calendar />} />
            <Route path="/createprofile" element={<CreateProfile />} />
            <Route
              path="/facultycreateprofile"
              element={<FacultyCreateProfile />}
            />
            {/* </Route> */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Homescreen />} />
            <Route path="/stdash" element={<StudentDashboard />} />
            <Route path="/editprofile" element={<EditProfile/>} />
            {/* <Route path="/calender" element={< />} /> */}

            {/* <Route path="/student" element={<Student />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
