import React from "react";

import Navbar2 from "./NavBar2";
import { BsPencilFill, BsFillArrowRightSquareFill } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../Style/profile.css";
import NoPost from "./NoPost";

export default function Profile() {
  let [post, setPost] = useState([]);
  const [containPost, set_noPost] = useState();
  const style = { fontSize: "1.5em", margin: "0.5em " };
  const title = "Card title";

  const deletePost = (post_Id) => {
    const id = sessionStorage.getItem("id");
    axios
      .delete(`http://localhost:8083/profile/${post_Id}`)
      .then((res) => {
        // console.log(res);
        fetchdata();
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  const fetchdata = () => {
    const id = sessionStorage.getItem("id");
    axios
      .get(`http://localhost:8083/profile/${id}`)
      .then((res) => {
        // console.log(res);
        // console.log(res.data.length)
        if (res.data.length == 0) {
          set_noPost(true);
          // console.log("no post")
        } else {
          // console.log("have post")
          set_noPost(false);
        }
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
      <Navbar2 />

      <div className="container-fluid ">
        <div className="row mt-4 ">
          {containPost ? (
            <NoPost></NoPost>
          ) : (
            <>
              {" "}
              {post.map((element) => {
                return (
                  <>
                    <div className="col-12 col-lg-3 bg-light  shadow-lg p-3 mb-5 bg-white rounded card_content ">
                      <Link
                        to={`profile/editImage/${element.post_url}/${element.post_id}`}
                      >
                        {" "}
                        <img
                          src={`data:image/png;base64,${element.image}`}
                          className="imagePreview rounded "
                          alt="photo"
                        />
                      </Link>

                      <h5 class="card-title mt-3">{element.post_title}</h5>
                      <p class="card-text  text-truncate">
                        {element.post_desc}
                      </p>
                      <Link
                        to={`profile/editPost/${element.post_url}/${element.post_id}`}
                        className="text-dark"
                      >
                        <BsPencilFill style={style} />
                      </Link>
                      <Link className="text-dark">
                        <ImBin
                          style={style}
                          onClick={() => deletePost(element.post_id)}
                        />
                      </Link>
                      <Link
                        to={`profile/viewPost/${element.post_url}/${element.post_id}`}
                        className="text-dark"
                      >
                        <BsFillArrowRightSquareFill style={style} />
                      </Link>
                    </div>
                    <div class="col-lg-1 "></div>
                  </>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
}
