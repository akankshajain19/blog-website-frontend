import reactRouterDom from "react-router-dom";
//import react from reactRouterDom
import React from "react"
import Navbar from "./Navbar";
import about from "../Images/aboutus.jpg";

const URI = "http://localhost:8083/aboutus";
const AboutUs=()=>
{
    
  return (
  <>
  <div>
  <Navbar />
      <div className="container mt-1">
      <div class="row">
      <div class="col-lg-5 ">
      <h2><br/><b>ABOUT US</b> </h2>
  <br/>
  <h6>Thoughts Behind Minds is a blog website started by students.It's <br/>an Indian
   entertainment cum lifestyle magazine where the team <br/>is working hard to serve  
   interesting and entertainment reads to audience.We are working on this blog 
   to spice up our reader's<br/> life with informative and interesting stuff. </h6>
   <br/>
   <h6><b>The categories we covered in Thoughts Behind Mind are-</b></h6>
   <ul>
   
     <li><h6>Personal</h6></li>
     <li><h6>Bussiness</h6></li>
     <li><h6>Fashion</h6></li>
     <li><h6>Technology</h6></li>
     <li><h6>Lifestyle</h6></li>
     <li><h6>Travel</h6></li>
     <li><h6>Food</h6></li>
     <li><h6>news</h6></li>
   </ul>
    
    </div>
      <div class="col-lg-7">
      <img src={about} className="img1 rounded"></img>
    </div>
      </div>
      </div>
  
    </div>
    </>);
    
}
 
export default AboutUs;