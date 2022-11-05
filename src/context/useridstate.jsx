import { useState } from "react";
import UseridContext from "./useridcontext";

const UseridState = (props) => {
  const [userId, setUserId] = useState("");
  return (
    <UseridContext.Provider value={{ userId, setUserId }}>
      {props.children}
    </UseridContext.Provider>
  );
};

export default UseridState;
