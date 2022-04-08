import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { Redirect, useParams } from "react-router-dom/cjs/react-router-dom.min";
import moment from "moment";
import { FaUser } from "react-icons/fa";

export default function Comment(props) {
  const [comments, setComments] = useState("");
  const user_id = sessionStorage.getItem("id");
  const post_id = props.post_id;
  const [commentsList, setCommentList] = useState([]);
  const [date, setDate] = useState("");
  var i = 0;
  const style3 = { fontSize: "1.7em" };

  const CommentText = (e) => {
    setComments(e.target.value);
  };
  const saveComment = (e) => {
    e.preventDefault();

    console.log(comments + " " + user_id + " " + post_id);
    const p = { user_id, post_id };
    axios
      .put(`http://localhost:8083/saveComment/${comments}`, p)
      .then((res) => {
        console.log("comment saved");
        document.getElementById("text").value = "";
        displayComment();
      })
      .catch((err) => {
        console.log(err);
      });
    displayComment();
  };
  const displayComment = () => {
    axios
      .get(`http://localhost:8083/fetchComment/${post_id}`)
      .then((res) => {
        console.log(res.data);
        // setCommentList(res.data);
        setCommentList(res.data);
        const newDate = moment(res.data[i].cdate, "YYYY-MM-DD").format();
        const NewDate = newDate.split("T")[0];
        console.log(NewDate);
        setDate(NewDate);
        i++;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    displayComment();
  }, []);
  return (
    <div>
      <div className="comments">
        <h3 className="comments-title">Comments</h3>

        <div class="input-group mb-3">
          <input
            id="text"
            type="text"
            class="form-control"
            placeholder="Write here"
            onChange={CommentText}
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={saveComment}
          >
            Send
          </button>
        </div>
      </div>
      <div>
        {commentsList.map((element) => {
          return (
            <>
              <div class="card p-3">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="user d-flex flex-row align-items-center">
                    <FaUser style={style3} width="30" /> &nbsp;
                    <span>
                      <small class="font-weight-bold text-primary">
                        {element.userName}
                      </small>
                      <small class="font-weight-bold"> {element.comment}</small>
                    </span>
                  </div>
                  <small>{date} ago</small>
                </div>
              </div>
              {/* <div className="row mt-3 ">
                <div id="comments" className="mt-2 ">
                  <div className="col-lg-1 ">
                    <FaUser style={style3} />
                  </div>
                 
                </div>
                <div className="row " >
                <div className="col-lg-3  ">
                    <p >
                      <b>{element.userName} </b>
                    </p>
                  </div>

                  <div className="col-lg-7 bg-light  rounded">
                    {element.comment}
                  </div>
                  <div className="col-lg-2  rounded">
                    <AiOutlineClockCircle />
                    <b> {date}</b>
                  </div>

                </div>
              </div> */}
            </>
          );
        })}
      </div>
    </div>
  );
}
