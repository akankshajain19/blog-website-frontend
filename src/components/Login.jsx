import React from "react";
import man from "../Images/register.jpg";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";




function Login() {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const URL = "http://localhost:8083/login";

  var history =  useHistory();

  const checkMail = (e) => {
    setMail(e.target.value);
  };

  const checkPassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const Login = { email, password };
    axios
      .post(URL, Login)
      .then((res) => {
        console.log(res.data);
        if (res.data === "You have successfully Login") {
          history.push('/')
        } else {
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container mt-3 ">
      <div className="row">
        <div className="col-12 col-lg-6">
          <img src={man} className="img1"></img>
        </div>
        <div className="col-12 col-lg-6  reg_col">
          <div className="w-75  col  container-fluid div_input ">
            <h1>LOGIN</h1>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-100 p-2 mt-3"
                onChange={checkMail}
                required
              ></input>

              <input
                type="password"
                placeholder="Enter Password"
                className="w-100 p-2 mt-3"
                onChange={checkPassword}
                required
              ></input>

              <input
                type="submit"
                value="Login"
                className="w-65 p-2 mt-3 btn-success text-light btn "
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
