import React from "react";
import { LoginComponent } from "../loginComponent/loginComponent";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Redux/Actions/loggedActions";
import { PostComponent } from "../postComponent/PostComponent";

export const HomeComponent = () => {
  const logged = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch();

  return (
    <div>
      {!logged ? (
        <LoginComponent />
      ) : (
        <div>
          <h1>connesso</h1>
          <button
            onClick={() => {
              dispatch(logout());
            }}
          >
            logout
          </button>
          <PostComponent />
        </div>
      )}
    </div>
  );
};
