import React from "react";
import { LoginComponent } from "../loginComponent/loginComponent";
import { useSelector } from "react-redux";

export const HomeComponent = () => {
  const logged = useSelector((state) => state.loggedReducer);

  return <div>{!logged ? <LoginComponent /> : null}</div>;
};
