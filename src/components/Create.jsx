import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Create() {
  const [userPost, setPost] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [value, setValue] = useState("");
  const [slug, setSlug] = useState("");
  const [desc, setDesc] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const Post = { userPost, selectedImage, value,desc };
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
                cols="30"
                rows="10"
                placeholder=" meta description ..."
                maxLength="150"
                onChange={handleDescription}
                className="px-2 mt-3"
              ></textarea>
              <b className=" mt-3 text-success">   {desc?(150-desc.length):150}</b>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
