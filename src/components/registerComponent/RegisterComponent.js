import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CallApi } from "../../service/callApi";
import "./RegisterComponent.css";
export const RegisterComponent = () => {
  let service = new CallApi.getInstance();
  const [viewModal, setViewModal] = useState(false);
  const [register, setRegister] = useState({
    name: "",
    surname: "",
    avatar: "",
    username: "",
    email: "",
    password: "",
    token: "",
  });


  
  let showModal = (event) => {
    event.preventDefault();
    setViewModal(true);
  };
  let deleteModal = (event) => {
    event.preventDefault();
    setViewModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    service.postUser(register)
    //console.log(register);

  };

  const handleChange = (event) => {
    event.preventDefault();
    setRegister((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  //console.log(viewModal, "-", register);
  return (
    <div >
      <div>
        <form onSubmit={showModal}>
          <button type="submit">Registrati</button>
        </form>
      </div>

      {viewModal && (
        <div className="container modale">
          <i className="fa fa-times-circle float-right" onClick={deleteModal}></i>
          {register && (
            <form onSubmit={handleSubmit} className="form-group">
              <label htmlFor="name">Nome </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                value={register.name}
                onChange={handleChange}
              ></input>
              <label htmlFor="surname">Cognome </label>
              <input
                type="text"
                name="surname"
                id="cognome"
                className="form-control"
                value={register.surname}
                onChange={handleChange}
              ></input>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                className="form-control"
                value={register.username}
                onChange={handleChange}
              ></input>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                value={register.email}
                onChange={handleChange}
              ></input>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                value={register.password}
                onChange={handleChange}
              ></input>

              <button type="submit" className="btn btn-primary  mt-3 col-3">
                Invia
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};
