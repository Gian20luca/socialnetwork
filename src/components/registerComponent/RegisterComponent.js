import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const RegisterComponent = () => {
  const logged = useSelector((state) => state.loggedReducer);

  const [viewModal, setViewModal] = useState(false);
  const [register, setRegister] = useState({
    name: "",
    surname: "",
    avatar: "",
    username: "",
    email: "",
    password: "",
  });

  let showModal = (event) => {
    event.preventDefault();
    setViewModal(true);
  };

  const handleSubmit = (event) => {
      event.preventDefault();
    console.log(register);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setRegister((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  console.log(viewModal, "-", register);
  return (
    <div>
      <div>
        <form onSubmit={showModal}>
          <button type="submit">Registrati</button>
        </form>
      </div>

      {viewModal && (
        <div>
          {register && (
            <form onSubmit={handleSubmit}>
              <label >Nome </label>
              <input
                type="text"
                name="name"
                id="name"
                value={register.name}
                onChange={handleChange}
              ></input>
              <label>Cognome </label>
              <input
                type="text"
                name="surname"
                id="cognome"
                value={register.surname}
                onChange={handleChange}
              ></input>
              <label>Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={register.username}
                onChange={handleChange}
              ></input>
              <label>E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                value={register.email}
                onChange={handleChange}
              ></input>
              <label>Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={register.password}
                onChange={handleChange}
              ></input>

              <button type="submit">Invia</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};
