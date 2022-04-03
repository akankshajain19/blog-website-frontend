import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import Navbar2 from "./NavBar2";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

function Create() {
  var history =  useHistory();
  const [userPost, setPost] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [value, setValue] = useState("");
  const [slug, setSlug] = useState("");
  const [desc, setDesc] = useState("");
  const [category,setCategory] = useState(0);
  const URI = "http://localhost:8083/post";

  const handleDescription = (e) => {
    setDesc(e.target.value);
  };
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleSlug = (e) => {
    setSlug(e.target.value);
  };

  const inputHandler = (e) => {
    setPost(e.target.value);

    const createSlug = e.target.value.trim().split(" ").join("-");
    setSlug(createSlug);
  };
  const category_id = (e) =>{
    setCategory(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let u = sessionStorage.getItem("id");
    const Post = { userPost, selectedImage, value, desc, slug,category};
    console.log(Post);
   
    let formData = new FormData();
    formData.set("selectedImage", selectedImage);
    formData.set("value", value);
    formData.set("userPost", userPost);
    formData.set("desc", desc);
    formData.set("slug", slug);
    formData.set("u_id", u);
    formData.set("c_id",category);

    console.log(formData);
    axios
      .post(URI, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.data) {
          toast.success("New post created", {
            position: "top-center",
          });
          history.push('/profile')
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar2 />
      <div className="container">
        <div className="row mt-2 ">
          <div className=" mt-3 col-12 col-lg-6">
            <div className="card px-4 py-4">
              <h3>Create a new Post</h3>

              <form onSubmit={handleSubmit}>
                <div className="list-group list-group-flush ">
                  <label className="list-group-item">Post Title</label>
                  <input
                    placeholder="post title ..."
                    className="list-group-item "
                    type="text"
                    name="postTitle"
                    value={userPost}
                    onChange={inputHandler}
                  ></input>
                  <select
                    class="form-select mt-2"
                    aria-label="Default select example"
                    onChange={category_id}
                  >
                    <option selected>Select Category</option>
                    <option value="1">Personal</option>
                    <option value="2">Business</option>
                    <option value="3">Fashion</option>
                    <option value="4">Technology</option>
                    <option value="5">Lifestyle</option>
                    <option value="6">Travel</option>
                    <option value="7">Food</option>
                    <option value="8">News</option>
                  </select>
                  <input
                    className="list-group-item bg-success text-light mt-3"
                    type="file"
                    name="image"
                    onChange={imageChange}
                  ></input>

                  <label id="body" className="list-group-item">
                    Post Body
                  </label>
                  <ReactQuill
                    id="body"
                    theme="snow"
                    className="mt-2"
                    name="postDes"
                    value={value}
                    onChange={setValue}
                  />
                  <input
                    type="submit"
                    value="Create Post"
                    className="w-65 p-2 mt-3 btn-success btn "
                  />
                </div>
              </form>
            </div>
          </div>
          <div className=" mt-3 col-12 col-lg-6">
            <div className="card px-4 py-4">
              <div className="list-group list-group-flush ">
                <label className="list-group-item">Post URL</label>
                <input
                  placeholder="Post URL ...."
                  className="list-group-item "
                  type="text"
                  name="postTitle"
                  value={slug}
                  onChange={handleSlug}
                ></input>
              </div>
              <div className="list-group list-group-flush">
                <div className="imagePreview mt-2 mb-2">
                  {selectedImage && (
                    <div>
                      <img
                        src={URL.createObjectURL(selectedImage)}
                        alt="Thumb"
                        className="img-fluid rounded float-left  float-right mx-auto"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="list-group list-group-flush ">
                <label className="list-group-item">Meta Description</label>
                <textarea
                  cols="20"
                  rows="5"
                  placeholder=" meta description ..."
                  maxLength="150"
                  onChange={handleDescription}
                  className="px-2 mt-3 rounded"
                ></textarea>
                <h3 className=" mt-3 text-success">
                  {" "}
                  {desc ? 150 - desc.length : 150}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;
