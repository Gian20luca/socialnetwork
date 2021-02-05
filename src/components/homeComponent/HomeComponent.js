import React, { useEffect } from "react";
import { LoginComponent } from "../loginComponent/loginComponent";
import { useSelector ,useDispatch} from "react-redux";
import { login } from "../../Redux/Actions/loggedActions";
import { PostComponent } from "../postComponent/PostComponent";
import { CallApi } from "../../service/callApi";
import {NavbarComponent} from "../../core/navBar/NavbarComponent"
export const HomeComponent = () => {
  //servis per user
  let service = new CallApi.getInstance();
  const logged = useSelector((state) => state.loggedReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    sessionStorage.getItem("authenticated") ? dispatch(login()) : null;
  });

  return (
    <div>
      {!logged ? (
        <LoginComponent />
      ) : (
        <div>
          <NavbarComponent/>
          {/* <PostComponent /> */}
          post di tutti gli utenti in random
        </div>
      )}
    </div>
  );
};
