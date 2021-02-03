import {
  AxiosProvider,
  Request,
  Get,
  Delete,
  Head,
  Post,
  Put,
  Patch,
  withAxios,
} from "react-axios";
import axios from "axios";

var instance = null;
export class CallApi {
  static getInstance() {
    if (instance === null) {
      instance = new CallApi();
    }
    return instance;
  }

  static setInstance(_instance) {
    instance = _instance;
  }
//Get User Api
getUser = (email) => {
  return axios.get('https://60181603971d850017a3f861.mockapi.io/users/?email=' + email)

}
//post user login
postUserLogin = (id,token) => {
  let proxycors = 'https://cors-anywhere.herokuapp.com/';
  let url =  proxycors + 'https://60181603971d850017a3f861.mockapi.io/users/' + id;
  return axios.patch(url , {
    token: token,
  })
}
 

  //post User
  postUser(datavalue) {
    return axios({
      method: "POST",
      url: "https://60181603971d850017a3f861.mockapi.io/users/",
      data: datavalue,
    });
  }

  //GetPost
  getPosts = () => {
    return axios
      .get(" https://60181603971d850017a3f861.mockapi.io/posts/")
      
  };
}
