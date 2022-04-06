import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { Redirect, useParams } from "react-router-dom/cjs/react-router-dom.min";
import moment from "moment";
export default function Comment(props) {
  const { post_url } = useParams();
  const history = useHistory();
  const [comments, setComments] = useState('');
  const user_id = sessionStorage.getItem("id");
  const post_id = props.post_id;
  const [commentsList, setCommentList] = useState([]);
  const [date, setDate] = useState('');
  var i = 0;
  const CommentText = (e) => {
    setComments(e.target.value);
  }
  const saveComment = (e) => {
    e.preventDefault();
    displayComment();
    console.log(comments + " " + user_id + " " + post_id);
    const p = { user_id, post_id };
    axios.put(`http://localhost:8083/saveComment/${comments}`, p)
      .then((res) => {
        console.log("comment saved");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const displayComment = () => {
    axios.get(`http://localhost:8083/fetchComment/${post_id}`)
      .then((res) => {
        console.log(res.data);
        setCommentList(res.data);
        const newDate = moment(res.data[i].cdate, 'DD-MM-YYYY').format();
        const NewDate = newDate.split('T')[0];
        console.log(NewDate);
        setDate(NewDate);
        i++;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    displayComment();
  }, []);
  return (
    <div>
      <div className="comments">
        <h3 className="comments-title">Comments</h3>

        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Write here" onChange={CommentText} aria-label="Recipient's username" aria-describedby="button-addon2" />
          <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={saveComment}>Send</button>
        </div>
      </div>
      <div>
        {commentsList.map((element) => {
          return (
            <>
              <div className="row mt-3 ">
                <div className="col-lg-1 bg primary ">
                  <p class="card-text"><b>{element.userName} </b></p></div>
                
                <div className="col-lg-5  bg-light  rounded">
                  {element.comment}
                </div>  
                <div className="col-lg-6  rounded">
                  <AiOutlineClockCircle />
                  <b> {date}</b>
                </div>          
              </div>
            
            </>
          );
        })}
      </div>


    </div>
  )
}
