import React from "react";

function Banner() {
  const url =
    "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg";
  return (
    <div>
      <div class="container-fluid">
        <img src={url} alt="banner" />
      </div>
    </div>
  );
}

export default Banner;
