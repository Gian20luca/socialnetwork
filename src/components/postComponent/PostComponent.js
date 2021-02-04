import React, { useEffect, useState } from "react";
import "./PostComponent.css";
import { CallApi } from "../../service/callApi";

export const PostComponent = () => {
  
  let service = new CallApi.getInstance();
  const [post, setPost] = useState();

  useEffect(() => {
    service.getPosts().then((response) => setPost(response.data));
  }, []);

  //post && console.log("pos2", post[0]);
  //console.log(prova)
  
  return (
    <div className="mt-5 mb-5">
      {post &&
        post.map((item) => {
          return (
            <div key={item.id} className=" container mt-3 ">
              <div  className=" row justify-content-md-center  ">
                <div className="col-12 col-xl-5 post">
                  <img src={item.image} className="immagine"></img>
                  <figcaption>{item.description}</figcaption>
                  <i className="fa fa-heart fa-2x">{item.like}</i>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
