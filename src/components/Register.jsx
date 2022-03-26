import React from "react";
import man from "../Images/register.jpg";
import '../Style/register.css'

function Register() {
  return (
    <div className="container mt-3 ">
      <div className="row">
        <div className="col">
          <img src={man} className="img1"></img>
        </div>
        <div className="col bg-primary">
       
       <div className="d-flex justify-content-md-center align-items-center ">
       <input type="text"  placeholder="Enter Name"></input><br/>
        <input type="text"  placeholder="Enter Email"></input><br/>
        <input type="text"  placeholder="Create Paaword"></input><br/>
        <input type="submit" value="Register"/>

       </div>
        
        </div>
      </div>
    </div>
  );
}

export default Register;
