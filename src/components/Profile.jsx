import React from "react";

import Navbar2 from "./NavBar2";
import { BsPencilFill, BsFillArrowRightSquareFill } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../Style/profile.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function Profile() {
  let [post, setPost] = useState([]);
  // let { post_id } = useParams();
  const style = { fontSize: "1.5em", margin: "0.5em " };
  const title = "Card title";

  const trim = () => {
    const t = title.trim().substring(0, 9) + ".....";
    console.log(t);
  };

  const updatePost=(post_Id)=>{
    console.log(post_Id);
    const id = sessionStorage.getItem("id");
    axios
      .put(`http://localhost:8083/profile/${id}/${post_Id}`)
      .then((res) => {
        console.log(res);
        fetchdata();
      })
      .catch((err) => {
        // console.log(err);
      });
  }

  const deletePost = (post_Id) => {
    console.log(post_Id);
    const id = sessionStorage.getItem("id");
    axios
      .delete(`http://localhost:8083/profile/${post_Id}`)
      .then((res) => {
        console.log(res);
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
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => {
        // console.log(err);
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
          {post.map((element) => {
            return (
              <>
                <div className="col-12 col-lg-3 bg-light  shadow-lg p-3 mb-5 bg-white rounded ">
                  <img
                    src={`data:image/png;base64,${element.image}`}
                    className="img-fluid rounded float-left  float-right mx-auto post_img rounded mx-auto d-block "
                    alt="photo"
                  />
                  <h5 class="card-title mt-3">{element.post_title}</h5>
                  <p class="card-text">{element.post_desc}</p>
                  <Link
                    to={`profile/editPost/${element.post_url}`}
                    onClick={() => updatePost(element.post_id)}
                    className="text-dark"
                  >
                    <BsPencilFill style={style} onClick={trim} />
                  </Link>
                  <Link className="text-dark">
                    <ImBin
                      style={style}
                      onClick={() => deletePost(element.post_id)}
                    />
                  </Link>
                  <Link
                    to={`profile/viewPost/${element.post_url}`}
                    className="text-dark"
                  >
                    <BsFillArrowRightSquareFill style={style} />
                  </Link>
                </div>
                <div class="col-lg-1 "></div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
