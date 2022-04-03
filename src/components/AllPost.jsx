import Navbar2 from "./NavBar2";
import man from "../Images/register.jpg";
import "../Style/allPost.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function AllPost() {
  const para =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  const postId = 1105;

  let [post, setPost] = useState([]);
  const fetchdata = () => {
    axios
      .get("http://localhost:8083/allPost")
      .then((res) => {
        console.log(res);
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
      <Link
        to={`viewPost/${postId}`}
        className="text-decoration-none text-dark"
      >
        <div className="container-fluid ">
          <div className="row mt-4 ">
          {/* {post.map((user)=>{
            return(
              {user.posts.map((element) => {
              return (
                <>
                  <div className="col-lg-6 col-12 bg-light  shadow-lg p-3 mb-5 bg-white rounded  ">
                    <span>
                      <h1 className="name_first_letter text-light ">N</h1>
                      <span className="name_user">{element.name}</span>
                    </span>

                    <h3 className="mt-2">
                      <strong>{element.post_title}</strong>
                    </h3>

                    <p>
                      {" "}
                      {para.length < 200
                        ? para.trim()
                        : para.trim().substring(0, 400) + "...."}
                    </p>
                  </div>
                  <div className="col-lg-3 col-12 bg-light   p-3 mb-5  rounded ">
                    <img
                      src={`data:image/png;base64,${element.image}`}
                      className="img-fluid rounded float-left  float-right mx-auto post_img"
                    />
                  </div>
                </>
              );
            })}

            )
          })} */}
           
          </div>
        </div>
      </Link>
    </>
  );
}

export default AllPost;
