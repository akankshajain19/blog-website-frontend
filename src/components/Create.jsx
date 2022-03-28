import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Create() {
  const [userPost, setPost] = useState("");
  const [currentImage, setImage] = useState("");
  const [imagePreview,setImagePreview]= useState('')
  const [value, setValue] = useState("");
  const [slug, setSlug] = useState("");

  const handleSlug=(e)=>{
    setSlug(e.target.value)

  }
  const FileHandler = (e) => {
    setImage(e.target.files[0]);

    const reader = new FileReader();
    reader.onloadend=()=>{
      setImagePreview(reader.result)
    }

    reader.readAsDataURL(e.target.files[0])
  };

  const inputHandler = (e) => {
    setPost(e.target.value);

    const createSlug = e.target.value.trim().split(" ").join("-");
    setSlug(createSlug);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const Post = { userPost, currentImage, value };
    console.log(Post);
    
  };

  return (
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

                <input
                  placeholder="post title ..."
                  className="list-group-item bg-success text-light mt-3"
                  type="file"
                  name="image"
                  onChange={FileHandler}
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
            <div className="list-group list-group-flush ">
            <div className="imagePreview ">{imagePreview}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
