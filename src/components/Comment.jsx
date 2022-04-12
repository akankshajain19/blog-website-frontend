import React from "react";

import { useState, useEffect } from "react";
import axios from "axios";

import moment from "moment";
import FetchComment from "../components/FetchComment";

export default function Comment(props) {
  const [comments, setComments] = useState("");
  const user_id = sessionStorage.getItem("id");
  const post_id = props.post_id;
  const [commentsList, setCommentList] = useState([]);
  const [date, setDate] = useState("");

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
      {commentsList.map((element) => {
        return (
          <FetchComment
            userName={element.userName}
            comment={element.comment}
            cdate={element.cdate}
          ></FetchComment>
        );
      })}
    </div>
  );
}
