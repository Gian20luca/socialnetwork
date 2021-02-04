import React, { useEffect, useState } from "react";
import { login, logout } from '../../Redux/Actions/loggedActions';
import { useSelector, useDispatch } from "react-redux";
import './LoginComponent.css';
import { CallApi } from "../../service/callApi";
import { RegisterComponent } from "../registerComponent/RegisterComponent";

export const LoginComponent = () => {
  //dati che inserisco dal form
  const [userLogin, setUserLogin] = useState({
    email: '',
    password: ''
  });
  //dati che recupera dall' array di utenti grazie all' onChange sugli input
  const [controlUserLogin, setControlUserLogin] = useState({
  });
  //token che mi serve per mandarlo all session storage e all user api, serve anche per il refresh
  const [Token, setToken] = useState('');

  let service = new CallApi.getInstance();
  const logged = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch();
  console.log("login: ", userLogin);
  console.log("CONTROLlogin: ", controlUserLogin);

  useEffect(() => {
    service.getUser(userLogin.email).then(response => setControlUserLogin(response.data));
  }, [userLogin.email]);





  const handleSubmit = (event) => {
    event.preventDefault();
    if (controlUserLogin[0].email === userLogin.email && controlUserLogin[0].password === userLogin.password) {
      console.log('TOKEN', Token)
      sessionStorage.setItem('token', Token);
      service.postUserLogin(controlUserLogin[0].id, Token);
    } else {
      console.log('Errore email e password sbagliati')
    };
    setTimeout(() => { service.getUser(userLogin.email).then(response => console.log('token user login handle submit', response.data[0].token)) }, 1000);
    setTimeout(() => {
      service.getUser(userLogin.email).then(response => {
        let tokenApi = response.data[0].token;
        if (tokenApi === sessionStorage.getItem('token')) {
          dispatch(login());
          sessionStorage.setItem('authenticated', true);
          sessionStorage.setItem('user', JSON.stringify(controlUserLogin));
          window.location.href = window.location.href;
        } else {
          console.log('Errore token api e sessionstorage token non sono uguali')
        }
      })
    }, 1000);

  }

  const handleChange = (event) => {
    setUserLogin((preUserLogin) => ({ ...preUserLogin, [event.target.name]: event.target.value, }));
    generateToken();
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
    let tokenn = token();
    setToken(tokenn);
    console.log('TokenChange', Token)
  }

  const refreshToken = () => {
    let rand = Math.random().toString(36).substr(2);
    let token = () => {
      let random = rand;
      for (let i = 0; i < 101; i++) {
        random = random + Math.random().toString(36).substr(2);
      }
      return random
    };
    let tokenn = token();
    console.log('TokenChange', tokenn)
    let user = JSON.parse(sessionStorage.getItem('user'));
    console.log(user[0].id);
    service.postUserLogin(user[0].id, tokenn);
    setTimeout(() => {
      service.getUser(user[0].email).then(response => {
        let refreshtokenapi = response.data[0].token;
        if (refreshtokenapi !== sessionStorage.getItem('token')) {
          dispatch(logout());
          sessionStorage.removeItem('authenticated');
          sessionStorage.removeItem('user');
          sessionStorage.removeItem('token');
          window.location.href = window.location.href;
        }
        else { null }
      })
    }, 1000);
  }

  //aumentare timeout per il refresh token
  sessionStorage.getItem('authenticated') ? setInterval(() => { refreshToken() }, 300000) : null;

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-7'>
          <div className='title'>
            <i className="fa fa-foursquare"></i>
              aceGram
          </div>
          <div className='lowTitle'>
            Solo parti originali
          </div>
        </div>
        <div className='col-md-5 '>
          <div className='body'>
            <div className='l-form'>
              <div className="form">
                <form onSubmit={handleSubmit}>
                  <h1 className='form__title'>Login</h1>

                  <div className='form__div'>
                    <input
                      type="text"
                      name="email"
                      placeholder=" "
                      value={userLogin.email}
                      onChange={handleChange}
                      className="form__input"
                    ></input>
                    <label className='form__label'>Email</label>
                  </div>

                  <div className='form__div'>
                    <input
                      type="password"
                      name="password"
                      placeholder=" "
                      value={userLogin.password}
                      onChange={handleChange}
                      className="form__input"
                    ></input>
                    <label className='form__label'>Password</label>
                  </div>

                  <button type='submit' className="form__button offset-md-3 col-md-6 offset-md-3" disabled={!userLogin.email || !userLogin.password}>login</button>

                </form>
                <hr></hr>
                <RegisterComponent />
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
























    // <div className="container">
    //   <div className="col-5">
    //     <h2>Login</h2>
    //     <form onSubmit={handleSubmit} className="form-group">
    //       <label>Email</label>
    //       <input
    //         type="text"
    //         name="email"
    //         placeholder="Email"
    //         value={userLogin.email}
    //         onChange={handleChange}
    //         className="form-control"
    //       ></input>
    //       <label>Password</label>
    //       <input
    //         type="password"
    //         name="password"
    //         placeholder="Password"
    //         value={userLogin.password}
    //         onChange={handleChange}
    //         className="form-control"
    //       ></input>
    //       <button type='submit' className="btn btn-primary" disabled={!userLogin.email || !userLogin.password}>login</button>
    //     </form>
    //     <RegisterComponent />
    //   </div>
    // </div>
  );
};