import React from "react";
import { Link } from "react-router-dom";
import htmlToFormattedText from "html-to-formatted-text";
import "../Style/profile.css";
import "../Style/allPost.css";



function PostByCategory(props) {
  return (
    <>
      <Link
        to={`allPost/viewPost/${props.post_url}/${props.post_id}`}
        className="text-decoration-none text-dark "
      >
        <div className="container-fluid ">
          <div className="row mt-4 ">
            <>
              <div className="col-lg-6 col-12 bg-light  shadow-lg p-3 mb-5 bg-white rounded post_height ">
                <span>
                  <h1 className="name_first_letter text-light ">
                    {props.name.charAt(0).toUpperCase()}
                  </h1>
                  <span className="name_props">{props.name}</span>
                </span>

                <h3 className="mt-2">
                  <strong>{props.post_title}</strong>
                </h3>

                <p className=" ">
                  {" "}
                  {htmlToFormattedText(props.post_body.slice(0, 300) + "...")}
                </p>
              </div>
              <div className="col-lg-3 col-12 bg-light   p-3 mb-5  rounded ">
                <img
                  src={`data:image/png;base64,${props.image}`}
                  className="imagePreview rounded card_content "
                />
              </div>
            </>
          </div>
        </div>
      </Link>
    </>
  );
}

export default PostByCategory;
