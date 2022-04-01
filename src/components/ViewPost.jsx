import React from "react";
import { useState } from "react";
import man from "../Images/register.jpg";
import Navbar2 from "./NavBar2";
import { FcLike, FcLikePlaceholder, FaComment } from "react-icons/fc";
import { FaRegCommentAlt, FaUser } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";

function ViewPost() {
  const style = { fontSize: "3em" };
  const style2 = { fontSize: "1.5em" };
  const style3 = { fontSize: "1.5em" };
  const [like, likePost] = useState(true);

  const likeClick = (e) => {
    likePost(false);
    console.log(like);
  };
  const UnlikeClick = (e) => {
    likePost(true);
    console.log("unlike");
  };

  return (
    <>
      <Navbar2 />
      <div className="container-fluid ">
        <div className="row mt-4 ">
          <div className="col-lg-8 col-12 bg-light  shadow-lg p-3 mb-5 bg-white rounded ">
            <img
              src={man}
              className="img-fluid rounded float-left  float-right mx-auto"
            />
            <div class="d-inline p-2 ext-white mr-10">
              {like ? (
                <FcLikePlaceholder style={style} onClick={likeClick} />
              ) : (
                <FcLike style={style} onClick={UnlikeClick} />
              )}
              <b>10</b>
            </div>
            <div class="d-inline p-2 ext-white mr-10">
              <FaRegCommentAlt style={style2} />
            </div>

            <h5 class="card-title mt-3">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div id="comments" className="row mt-4 ">
              <div className="col-lg-1 bg primary ">
                <FaUser style={style3} />
               
              </div>
              <div className="col-lg-2 ">
                {" "}
                <h4>Name</h4>
              </div>
              <div className="col-lg-5  bg-light mt-4 rounded">
                <h2 class="form-text text-muted ">
                  We'll never share your email with anyone else.
                  
                </h2>
              </div>
              <div className="col-lg-1 ml-2  mt-3 rounded">
           
              </div>
              <div className="col-lg-2 ml-2  rounded">
              <AiOutlineClockCircle style={style2} />  April 1 2022
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewPost;
