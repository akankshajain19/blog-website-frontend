import React, { useState } from "react";
import man from "../Images/register.jpg";
import "../Style/register.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const URL = "http://localhost:8083/register";

function Register() {
  const [email, setMail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  var history =  useHistory();

  const RegisterName = (e) => {
    setName(e.target.value);
  };

  const RegisterPassword = (e) => {
    setPassword(e.target.value);
  };

  const RegisterEmail = (e) => {
    setMail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const Register = { email, name, password };
    axios.post(URL, Register).then((res) => {
      console.log(res.data);
      if (res.data === "Successfully Register") {
        history.push('/login')
      } else {
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  function Verify(){
    var a = document.getElementById("pw1").value;
    var b = document.getElementById("pw2").value;
    if(a!==b){
      alert("Password did not match");
    }
  }
  return (
    <div className="container mt-3 ">
      <div className="row">
        <div className="col-12 col-lg-6">
          <img src={man} className="img1"></img>
        </div>
        <div className="col-12 col-lg-6  reg_col">
          <div className="w-75  col  container-fluid div_input ">
            <h1>REGISTER</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-100 p-2 mt-3"
                name="name"
                required
                onChange={RegisterName}
              ></input>

              <input
                type="email"
                required
                placeholder="Enter Email"
                className="w-100 p-2 mt-3"
                name="email"
                onChange={RegisterEmail}
              ></input>

              <input
                type="password"
                required
                name="password"
                placeholder="Create Password"
                className="w-100 p-2 mt-3"
                onChange={RegisterPassword}
                id="pw1"
              ></input>

              <input
                type="password"
                required
                name="password1"
                placeholder="Confirm Password"
                className="w-100 p-2 mt-3"
                id="pw2"
              ></input>
             
              <input
                type="submit"
                value="Register"
                className="w-65 p-2 mt-3 btn-primary btn "
                onClick={Verify}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
