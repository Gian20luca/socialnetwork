import React, { useEffect, useState } from "react";
import "./UserPostComponent.css";
import { CallApi } from "../../../service/callApi";

export const UserPostComponent = () => {
  let service = new CallApi.getInstance();
  const [post, setPost] = useState();
  const [showModal, setShowModal] = useState(false);
  const [imgModal, setImgModal] = useState('');

  let User = JSON.parse(sessionStorage.getItem("user"));
  let idUser = User[0].id;


  useEffect(() => {
    service.getPostsSingleUser(idUser).then((response) => setPost(response.data));

  }, []);

  /*  const showComment=(event)=>{
    event.preventDefault();
    return console.log("commet")
  } */

  //post && console.log("pos2", post[0]);
  //console.log(prova)

  const functionShowModal = (event) => {
    setShowModal(true);
    setImgModal(event.target.src);
  }
  const functionDeleteModal = () => {
    setShowModal(false);
  }

  return (
    <div>
      {post &&

        <div className=" container mt-5 ">
          <div className="row">
            {post.map((item) => {
              return (
                <div key={item.id} className="col-md-4">
                  <img src={item.image} className="immagine" onClick={functionShowModal} alt='image'></img>
                </div>
              )
            })}
          </div>
        </div>
      }

      {showModal &&

        <div className='container'>
          <div className='row'>
            <div className="col-md-6">
              <img src={imgModal} className="immagine"></img>
            </div>
            <div className="col-md-6">
              <div className='row'>
                <div className='col-md-12'>
                  <p>{User[0].username}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>


  );
};