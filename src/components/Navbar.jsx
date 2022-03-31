import React from "react";
import { Link } from "react-router-dom";


import { AiFillHome } from "react-icons/ai";




export default function Navbar() {

  const style = { color: "white", fontSize: "1em" ,margin: "0.3em "}

  return (
    <div className=" bg-dark ">
      <ul className="nav justify-content-center ">
        <li className="nav-item nav-link h3">
          <Link to={"/"} className="text-success">

        
            <AiFillHome style={style} />

           

          </Link>
        </li>

       
        <li className="nav-item nav-link h4 mt-2">
          <Link to={"/register"} className="text-decoration-none text-light">
            REGISTER
          </Link>
        </li>
        <li className="nav-item nav-link h4 mt-2">
          <Link to={"/login"} className="text-decoration-none text-light">
            LOGIN
          </Link>
        </li>
       
      </ul>
    </div>
  );
}


