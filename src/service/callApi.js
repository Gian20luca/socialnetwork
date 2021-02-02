import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';
import axios from 'axios';

var instance =null; 
export  class CallApi {
 

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
getUser = ()=>{
  axios.get(' https://60181603971d850017a3f861.mockapi.io/users')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })}

  //post User Api modificare
  postUser = (users)=>{axios.post(' https://60181603971d850017a3f861.mockapi.io/users')

  }


  //GetPost 
  getPosts = ()=>{axios.get(' https://60181603971d850017a3f861.mockapi.io/posts')
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })}




} 



