import React from "react";
import man from "../Images/register.jpg";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import { toast } from "react-toastify";

function Login() {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const URI = "http://localhost:8083/login";

  var history = useHistory();

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
      .post(URI, Login)
      .then((res) => {
        if (res.data) {
          sessionStorage.setItem("id", res.data.id);
          sessionStorage.setItem("name", res.data.name);

          history.push("/profile");
        } else {
          toast.error("Invalid Credential", {
            position: "top-center",
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />

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
    </>
  );
}

export default Login;
