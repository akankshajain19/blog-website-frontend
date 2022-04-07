import React from "react";
import { useState, useEffect } from "react";
import man from "../Images/register.jpg";
import Navbar2 from "./NavBar2";
import { FcLike, FcLikePlaceholder, FaComment } from "react-icons/fc";
import { FaRegCommentAlt, FaUser } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import htmlToFormattedText from "html-to-formatted-text";
import moment from "moment";
import { Link } from "react-router-dom";
import Comment from "./Comment";
import ReactQuill from "react-quill";
 const style3 = { fontSize: "1.5em" };

function ViewPost() {
  const { post_url } = useParams();
  const { post_id } = useParams();
  const style = { fontSize: "3em" };
  const style2 = { fontSize: "1.5em" };
  const style3 = { fontSize: "1.5em" };
  const [like, setLike] = useState(0);
  const [isLiked, setIsLiked] = useState(true);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState([]);
  const [date, setDate] = useState("");
  const user_id = sessionStorage.getItem("id");


  const likeClick = () => {
    console.log(like);
    setLike(like + 1);
    setIsLiked(!isLiked);
    const p = { post_id, like, user_id };
    console.log(p);
    axios
      .put("http://localhost:8083/like", p)
      .then((res) => {
        console.log("liked saved");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const UnlikeClick = () => {
    console.log(like);
    setLike(like - 1);
    setIsLiked(!isLiked);
    console.log("unlike");
    const p = { post_id, like, user_id };
    console.log(p);
    axios
      .put("http://localhost:8083/unlike", p)
      .then((res) => {
        console.log("unliked saved");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchPost = () => {
    axios
      .get(`http://localhost:8083/profile/viewPost/${post_url}/${post_id}`)
      .then((res) => {
        //console.log(res.data);
        setName(res.data.name);
        setBody(res.data.post_body);
        setDesc(res.data.post_desc);
        setImage(res.data.image);
        setLike(res.data.like);
        const newDate = moment(res.data.date, "DD-MM-YYYY").format();
        const NewDate = newDate.split("T")[0];
        setDate(NewDate);
        var arr = Object.values(res.data.likeList);
        //console.log(arr.data+" "+isLiked);
        arr.map((element) => {
          // console.log(element);
          // console.log(isLiked);
          if (element.user_id === user_id) {
            setIsLiked(!isLiked);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <>
      <Navbar2 />
      <div className="container-fluid ">
        <div className="row mt-3 ">
          <div className="col-lg-8 col-12 bg-light  shadow-lg p-3 mb-5 bg-white rounded ">
            <img
              src={`data:image/png;base64,${image}`}
              className="img-fluid rounded float-left  float-right mx-auto"
            />
            <br></br>
            <div class="d-inline p-2 ext-white mr-10">
              {isLiked ? (
                <FcLikePlaceholder style={style} onClick={likeClick} />
              ) : (
                <FcLike style={style} onClick={UnlikeClick} />
              )}
              <b>{like}</b>
            </div>
            <div class="d-inline p-2 ext-white mr-10">
              <FaRegCommentAlt style={style2} />
            </div>

            <div className="col-lg-5 ">
              <h4>{name}</h4>
            </div>

            <p class="card-text">{desc}</p>
            <ReactQuill
              
              className="mt-4"
        
              modules={{ toolbar: "" }}
              value={body}
              readOnly="true"
            />
           
            <div className="col-lg-100 rounded">
              <Comment post_id={post_id} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewPost;
