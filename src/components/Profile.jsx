import React from "react";
import man from "../Images/register.jpg";
import Navbar2 from "./NavBar2";
import { BsPencilFill, BsFillArrowRightSquareFill } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { Link } from "react-router-dom";

export default function Profile() {
  const style = { fontSize: "1.5em", margin: "0.5em " };

  const edit = (e) => {
    console.log("clicked Edit");
  };

  const deletePost = (e) => {
    console.log("clicked delete");
  };

  return (
    <>
      <Navbar2 />
      <div className="container-fluid ">
        <div className="row mt-4 ">
          <div className="col-12 col-lg-3 bg-light  shadow-lg p-3 mb-5 bg-white rounded ">
            <img
              src={man}
              className="img-fluid rounded float-left  float-right mx-auto"
            />
            <h5 class="card-title mt-3">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link to={"profile/editPost/postId"} className="text-dark">
             
              <BsPencilFill style={style} onClick={edit} />
            </Link>
            <Link to={"profile/deletePost/postId"} className="text-dark">
            <ImBin style={style} onClick={deletePost} /></Link>
            <Link to={"profile/viewPost/postId"} className="text-dark">
            <BsFillArrowRightSquareFill style={style} /></Link>
          </div>
          <div class="col-lg-1 "></div>
        </div>
      </div>
    </>
  );
}
