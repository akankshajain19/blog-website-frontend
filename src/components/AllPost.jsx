import Navbar2 from "./NavBar2";
import '../Style/profile.css'
import "../Style/allPost.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function AllPost() {
  const postId = 1105;

  let [post, setPost] = useState([]);
  const fetchdata = () => {
    axios
      .get("http://localhost:8083/allPost")
      .then((res) => {
        console.log(res.data);
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
            {post.map((user) => {
              return (
                <>
                  <div className="col-lg-6 col-12 bg-light  shadow-lg p-3 mb-5 bg-white rounded post_height ">
                    <span>
                      <h1 className="name_first_letter text-light ">
                        {user.name.charAt(0).toUpperCase()}
                      </h1>
                      <span className="name_user">{user.name}</span>
                    </span>

                    <h3 className="mt-2">
                      <strong>{user.post_title}</strong>
                    </h3>

                    <h6 className="card-text">
                      {" "}
                      {user.post_body.length < 200
                        ? user.post_body
                            .trim()
                            .substring(3, user.post_body.length - 4)
                        : user.post_body.trim().substring(2, 400) + "...."}
                    </h6>
                  </div>
                  <div className="col-lg-3 col-12 bg-light   p-3 mb-5  rounded ">
                    <img
                      src={`data:image/png;base64,${user.image}`}
                      // className="img-fluid rounded float-left  float-right mx-auto post_img "
                      className="imagePreview rounded card_content "
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </Link>
    </>
  );
}

export default AllPost;
