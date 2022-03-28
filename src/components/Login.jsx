import React from 'react'
import man from "../Images/register.jpg";

function Login() {
  return (
    <div className="container mt-3 ">
    
      <div className="row">
        <div className="col-12 col-lg-6">
          <img src={man} className="img1"></img>
        </div>
        <div className="col-12 col-lg-6  reg_col">
        
          <div className="w-75  col  container-fluid div_input ">
          <h1>LOGIN</h1>
            <form>
             

              <input
                type="text"
                placeholder="Enter Email"
                className="w-100 p-2 mt-3"
              ></input>

              <input
                type="text"
                placeholder="Enter Paaword"
                className="w-100 p-2 mt-3"
              ></input>

              <input type="submit" value="Login" className="w-65 p-2 mt-3 btn-success text-light btn " />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login