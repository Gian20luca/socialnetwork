import React from "react";

export const RegisterComponent = () => {
    c




  return (
    <div>
      <div>
        <button >Crea nuovo account</button>
      </div>

      <div>
          <form onSubmit="">
              <label>Nome </label>
              <input type="text" name="nome" id="nome"></input>
              <label>Cognome </label>
              <input type="text" name="cognome" id="cognome"></input>
              <label>Username</label>
              <input type="text" name="username" id="username"></input>
              <label>Password</label>
              <input type="password" name="password" id="password"></input>

              <button type="submit"></button>



          </form>
      </div>
    </div>
  );
};
