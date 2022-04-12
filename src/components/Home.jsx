import React from "react";
import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";
import home from "../Images/hom.jpg"
function Home() {
  var history = useHistory();

  return (
    <>
      <Navbar />
<div className="container" style={{backgroundColor:"rgba(0,0,0,0.2)"}}>
  <div className="row">
    <div className="col-lg-5 mt-5" text-black>
    <div class="p-3 mb-2 text-black ">
    <p class="fst-italic"><h1>Create a blog with <p class="fw-bolder">Thoughts Behind Mind .</p></h1></p>
  <h3>Thoughts Behind Mind provides everything you need to get online today .</h3>
  <button type="button" class="btn btn-dark" onClick={()=>{
  history.push("/register");}}><b><h5>Start your blog</h5></b></button>    </div>
  </div>
    <div className="col-7"style={{backgroundColor:"rgba(0,0,0,0.2)"}}>
    <img src={home} className="img1 rounded" style={{marginRight:"auto",marginBottom:"auto"}}></img>
    </div>
  </div>
</div>
          </>
  );
}

export default Home;