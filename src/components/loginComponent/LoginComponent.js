import React, { useEffect, useState } from "react";
import { login, logout } from "../../Redux/Actions/loggedActions";
import { useSelector, useDispatch } from "react-redux";
import { CallApi } from "../../service/callApi";
import { RegisterComponent } from "../registerComponent/RegisterComponent";
 
export const LoginComponent = () => {
  const [login, setLogin] = useState({
    email: '',
    password: ''
  });
  let service = new CallApi.getInstance();
  const logged = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch();
 
  console.log("Connesso: ", logged);
 
  useEffect(() => {
    service.getUser();
  });
 
  const handleSubmit = (event) => {
    event.preventDefault();
 
  }
 
  const handleChange = (event) => {
    setLogin((preLogin) => ({ ...preLogin, [event.target.name]: event.target.value, }))
  }
 
  return (
    <div>
      {!logged ? (
        <div>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type='text' name='email' placeholder='Email' value={login.email} onChange={handleChange}></input>
            <label>Password</label>
            <input type='password' name='password' placeholder='Password' value={login.password} onChange={handleChange}></input>
            <button className="btn btn-primary" onClick={() => dispatch(login())}>Login</button>
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