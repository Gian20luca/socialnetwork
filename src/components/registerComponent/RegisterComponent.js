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



  
  const showModal = (event) => {
    event.preventDefault();
    setViewModal(true);
  };
  const deleteModal = (event) => {
    event.preventDefault();
    setViewModal(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    service.postUser(register);
    setViewModal(false);

  };

  const handleChange = (event) => {
    event.preventDefault();
    setRegister((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div >
      <div>
        <form onSubmit={showModal}>
          <button type="submit" className="btn btn-primary">Registrati</button>
        </form>
      </div>

      {viewModal && (
        <div className="container modale" >
          <h2>Register</h2>
          <i className="fa fa-2x fa-times-circle 2x float-right mb-3" onClick={deleteModal}></i>
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

            {!register.name || !register.surname ||!register.email|| !register.username ||  !register.password ? <button   disabled className="btn btn-danger  mt-3 col-3">
                Registrati
              </button>: <button type="submit"  className="btn btn-primary  mt-3 col-3">Registrati</button>}
            </form>
          )}
        </div>
      )}
    </div>
  );
};
