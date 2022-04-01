import React from "react";
import man from "../Images/register.jpg";
import Navbar2 from "./NavBar2";
import { BsPencilFill, BsFillArrowRightSquareFill } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Profile() {
  const style = { fontSize: "1.5em", margin: "0.5em " };
  const title = "Card title";

  const trim = () => {
    const t = title.trim().substring(0, 9) + ".....";
    console.log(t);
  };

  // const edit = (e) => {
  //   console.log("clicked Edit");
  // };

  const deletePost = (e) => {
    console.log("clicked delete");
  };

  //  let [post, setPost] = useState([]);
  // const URI = "http://localhost:8083/profile";

  // useEffect(() => {
  //   axios
  //     .get(URI, sessionStorage.getItem("id"))
  //     .then((res) => {
  //       console.log(res);
  //       setPost(res.data);

  //       console.log(
  //         res.data[0].name +
  //           " " +
  //           res.data[0].pTitle.trim().substring(0, 10) +
  //           "....." +
  //           " " +
  //           res.data[0].pbody +
  //           " " +
  //           res.data[0].mDesc
  //       );
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // });
  return (
    <>
      <Navbar2 />

      <div className="container-fluid ">
        <div className="row mt-4 ">
          {/* for each */}

          <div className="col-12 col-lg-3 bg-light  shadow-lg p-3 mb-5 bg-white rounded ">
            <img
              src={man}
              className="img-fluid rounded float-left  float-right mx-auto"
            />
            <h5 class="card-title mt-3">Page Title</h5>
            <p class="card-text">Page</p>
            <Link to={"profile/editPost/postId"} className="text-dark">
              <BsPencilFill style={style} onClick={trim} />
            </Link>
            <Link to={"profile/deletePost/postId"} className="text-dark">
              <ImBin style={style} onClick={deletePost} />
            </Link>
            <Link to={"profile/viewPost/postId"} className="text-dark">
              <BsFillArrowRightSquareFill style={style} />
            </Link>
          </div>
          <div class="col-lg-1 "></div>
        </div>
      </div>
    </>
  );
}
