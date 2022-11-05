import { Outlet, Navigate, useLocation } from "react-router-dom";

const RequireAuth = async ({ children, id }) => {
  const location = useLocation();
  try {
    const response = await fetch(
      "https://exquisite-backend-test.herokuapp.com/api/auth/getuser",
      {
        method: "GET",
        headers: { "Content-Type": "application/json", id: id },
      }
    );
    console.log(response);
    const json = await response.json();
    console.log(json);
    if (json?.success) {
      alert("Able to Access");
      return <Outlet />;
    } else {
      <Navigate to="/login" state={{ from: location }} replace />;
      alert("Not Allowed");
      return;
    }
  } catch (error) {
    console.log(error);
    alert("Error in Accessing");
    <Navigate to="/login" state={{ from: location }} replace />;
    return;
  }
};
export default RequireAuth;
