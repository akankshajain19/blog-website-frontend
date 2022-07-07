import Navbar2 from "./NavBar2";
import "../Style/profile.css";
import "../Style/allPost.css";

import { useState, useEffect, useRef } from "react";
import axios from "axios";

import PostByCategory from "./PostByCategory";

function AllPost() {
  const [category, setCategory] = useState(0);
  let [post, setPost] = useState([]);
  const childFunc = useRef(null);
  
  const fetchdata = () => {
    axios
      .get("http://localhost:8083/allPost")
      .then((res) => {
        console.log(res.data.reverse());
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const category_id = (e) => {
    setCategory(e.target.value);

    console.log(e.target.value);
    axios
      .get(`http://localhost:8083/allPost/${e.target.value}`)

      .then((res) => {
        // console.log(res.data[0]);
       
        setPost(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
    childFunc.current();
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
      <Navbar2 />

      <div className=" mt-3 col-12 col-lg-6 list-group  ">
        <select
          class="form-select mt-2 "
          aria-label="Default select example"
          onChange={category_id}
        >
          <option value="1">All Post</option>
          <option value="2">Personal</option>
          <option value="3">Business</option>
          <option value="4">Fashion</option>
          <option value="5">Technology</option>
          <option value="6">Lifestyle</option>
          <option value="7">Travel</option>
          <option value="8">Food</option>
          <option value="9">News</option>
        </select>
      </div>
      {post.map((user) => {
        return (
          <PostByCategory
            category={user.category}
            post_url={user.post_url}
            post_id={user.post_id}
            post_title={user.post_title}
            post_body={user.post_body}
            image={user.image}
            name={user.name}
          ></PostByCategory>
        );
      })}
    </div>
  );
}

export default AllPost;
