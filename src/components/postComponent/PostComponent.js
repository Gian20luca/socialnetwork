import React, { useEffect, useState } from "react";
import "./PostComponent.css";
import { CallApi } from "../../service/callApi";
 
export const PostComponent = () => {
  let service = new CallApi.getInstance();
  const [post, setPost] = useState();
 
  useEffect(() => {
    service.getPosts().then((response) => setPost(response.data));
  }, []);
  
  /*  const showComment=(event)=>{
    event.preventDefault();
    return console.log("commet")
  } */
 
  //post && console.log("pos2", post[0]);
  //console.log(prova)
 
  return (
    <div className="mt-5 mb-5">
      {post &&
        post.map((item) => {
          return (
            <div key={item.id} className=" container mt-3 ">
              <div className=" row justify-content-md-center  ">
                <div className="col-12 col-xl-5 post">
                  <img src={item.image} className=" pt-2 immagine"></img>
                  <figcaption className=" pt-1 description ">
                    {item.description} Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Nulla vulputate sem tortor, id varius ante
                    porttitor quis. Integer mollis eros ac dolor viverra porta.
                    Nulla eu malesuada sapien. Vestibulum eget est quis metus
                    luctus dignissim sit amet vitae eros.
                  </figcaption>
                  <div className="d-flex pl-2 justify-content-md-center mb-2">
                    <i className="fa fa-heart like ">{item.like}</i>
                    {item.comment && (
                      <i className="fa fa-comment pl-2 comment">
                        {item.comment.lenght}
                      </i>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};