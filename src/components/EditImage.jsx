import React from "react";
import Navbar2 from "./NavBar2";
import { useState } from "react";
import { BsFillCloudUploadFill } from "react-icons/bs";

import "../Style/profile.css";

function EditImage() {
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
  return (
    <>
      <Navbar2 />
      <div className="container">
        <div className="row mt-2 ">
          <div className=" mt-3 col-12 col-lg-6 ">
            <div className=" mt-2 mb-2 px-4 py-4 list-group list-group-flush ">
              {previewImg ? (
                <BsFillCloudUploadFill style={style} className="imagePreview rounded " />
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
              className="w-65 p-2 mt-3 btn-success btn col-12 mt-4 "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default EditImage;
