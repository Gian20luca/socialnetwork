import React, { useEffect, useState } from "react";
import { login } from '../../Redux/Actions/loggedActions';
import { useSelector, useDispatch } from "react-redux";
import { CallApi } from "../../service/callApi";
import { RegisterComponent } from "../registerComponent/RegisterComponent";
 
export const LoginComponent = () => {
  console.log('lu tokennn' , Token);
  //dati che inserisco dal form
  const [userLogin, setUserLogin] = useState({
    email: '',
    password: '',
    token: ''
  });
  //dati che recupera dall' array di utenti grazie all' onChange sugli input
  const [controlUserLogin, setControlUserLogin] = useState({
  });
  const [Token, setToken] = useState('');
 
  let service = new CallApi.getInstance();
  const logged = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch();
  console.log("Connesso: ", logged);
  console.log("login: ", userLogin);
  console.log("controllogin: ", controlUserLogin);
 
  useEffect(() => {
    service.getUser(userLogin.email).then(response => setControlUserLogin(response.data));
  }, [userLogin.email]);
 
  const handleSubmit = (event) => {
    event.preventDefault();
    controlUserLogin[0].email === userLogin.email && controlUserLogin[0].password === userLogin.password ? generateToken() : console.log('errore non sono uguali');
    // !userLogin.token ? service.getUser(userLogin.email).then(response => setUserLogin({email: response.data[0].email, password: response.data[0].password, token: response.data[0].token })) : console.log('non esiste');
    // userLogin.token === sessionStorage.getItem('token') ? dispatch(login()) : console.log('no funziona nu cazzu');
 
  }
 
  const handleChange = (event) => {
    setUserLogin((preUserLogin) => ({ ...preUserLogin, [event.target.name]: event.target.value, }));
  }
 
  const generateToken = () => {
    let rand = Math.random().toString(36).substr(2);
    let token = () => {
      let random = rand;
      for (let i = 0; i < 101; i++) {
        random = random + Math.random().toString(36).substr(2);
      }
      return random
    };
    setToken(token());
    console.log('tokenstato:', Token);
    sessionStorage.setItem('token', Token);
    service.postUserLogin(controlUserLogin[0].id,Token);
  }
 
  return (
    <div>
      <button onClick={generateToken}>generateToken</button>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input type='text' name='email' placeholder='Email' value={userLogin.email} onChange={handleChange}></input>
          <label>Password</label>
          <input type='password' name='password' placeholder='Password' value={userLogin.password} onChange={handleChange}></input>
          <button type='submit'>login</button>
        </form>
        <RegisterComponent />
      </div>
    </div>
  );
};