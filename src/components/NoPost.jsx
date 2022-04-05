import React from "react";
import { MdSpeakerNotesOff } from "react-icons/md";
import { Link } from "react-router-dom";

function NoPost() {
  const style = { fontSize: "20em" };
  return (
    <>
      <div class="d-flex justify-content-center">
        <MdSpeakerNotesOff style={style} />
        {/* <h1>Create Post</h1> */}
      </div>
      <div class="d-flex justify-content-center">
        <Link
          to={"/create"}
          className="text-decoration-none  d-flex justify-content-center text-dark"
        >
          CREATE POST
        </Link>
      </div>
    </>
  );
}

export default NoPost;
