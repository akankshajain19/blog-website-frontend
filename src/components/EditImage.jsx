import React from "react";
import Navbar2 from "./NavBar2";
import { useState } from "react";
import { BsFillCloudUploadFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "../Style/profile.css";
import axios from "axios";

function EditImage() {
  const { post_url } = useParams();
  const { post_id } = useParams();
  var history = useHistory();
  const [selectedImage, setSelectedImage] = useState("");
  const [previewImg, setPreviewImg] = useState(true);
  const imageChange = (e) => {
    setPreviewImg(false);
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      console.log(e.target.files[0]);
      console.log(URL.createObjectURL(selectedImage));
    }
  };
  const style = { fontSize: "10em", margin: "0.3em " };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `http://localhost:8083/profile/editPost/${post_url}/${post_id}`
    );
    // const Post = { selectedImage };
    // console.log(Post);

    let formData = new FormData();
    formData.set("selectedImage", selectedImage);

    formData.set("u_id", sessionStorage.getItem("id"));

    formData.set("post_id", post_id);
    axios({
      method: "put",
      url: `http://localhost:8083/profile/editImage/${post_url}/${post_id}`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (res) {
        console.log(res);
        if (res.data) {
          toast.success("Image updated Sucessfully", {
            position: "top-center",
          });
          history.push("/profile");
        }
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };
  return (
    <>
      <Navbar2 />
      <div className="container ">
        <form onSubmit={handleSubmit}>
          <div className="row mt-2  ">
            <div className=" mt-3 col-12 col-lg-6 shadow-lg rounded ">
              <div className=" mt-2 mb-2 px-4 py-4 list-group list-group-flush ">
                {previewImg ? (
                  <BsFillCloudUploadFill
                    style={style}
                    className="imagePreview rounded "
                  />
                ) : (
                  <div>
                    {selectedImage && (
                      <img
                        className="imagePreview rounded "
                        src={URL.createObjectURL(selectedImage)}
                        name="image"
                      />
                    )}
                  </div>
                )}
              </div>
              <input
                placeholder="post title ..."
                className="list-group-item bg-success text-light mt-3  col-12 rounded "
                type="file"
                name="image"
                onChange={imageChange}
              ></input>
              <input
                type="submit"
                value="Update Image"
                className="w-65 p-2 mt-3 btn-success btn col-12 mt-4 mb-4 "
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditImage;
