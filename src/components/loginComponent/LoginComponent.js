import React, { useEffect, useState } from "react";
import { login, logout } from "../../Redux/Actions/loggedActions";
import { useSelector, useDispatch } from "react-redux";
import { CallApi } from "../../service/callApi";
import { RegisterComponent } from "../registerComponent/RegisterComponent";

export const LoginComponent = () => {
  const [register, setRegister] = useState({
    name: "",
    avatar: "",
    username: "",
    email: "",
    password: "",
  });

  let service = new CallApi.getInstance();
  const logged = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch();

  console.log("Connesso: ", logged);
  console.log(register);
  //Use Effect
  useEffect(() => {
    service.getUser();
  });

  return (
    <div>
      {!logged ? (
        <div>
          <form>
            <button onClick={() => dispatch(login())}>Login</button>
          </form>

          <RegisterComponent />
        </div>
      ) : (
        <div>
          <h1>Sei connesso</h1>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      )}
    </div>
  );
};
