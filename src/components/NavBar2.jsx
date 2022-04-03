import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { GiNotebook } from "react-icons/gi";

export default function Navbar2() {
  const style = { color: "white", fontSize: "1em",margin: "0.3em " };
  const logOut = () => {
    sessionStorage.removeItem("id");

    sessionStorage.removeItem("name");
    toast.info("Logged out Successfully", {
      position: "top-center",
    });
  };
  return (
    <div className=" bg-dark">
      <ul className="nav justify-content-center">
        <li className="nav-item nav-link h3 mt-2">
          <Link to={"/allPost"} className="text-success">
            <GiNotebook style={style} />
          </Link>
        </li>

        <li className="nav-item nav-link h4 mt-2">
          <Link to={"/create"} className="text-decoration-none text-light">
            CREATE POST
          </Link>
        </li>

        <li className="nav-item nav-link h4 mt-2">
          <Link
            to={"/"}
            className="text-decoration-none text-light"
            onClick={logOut}
          >
            LOGOUT
          </Link>
        </li>
        <li className="nav-item nav-link h4 mt-2">
          <Link to={"/profile"} className="text-decoration-none text-light">
           PROFILE
          </Link>
        </li>
       
      </ul>
    </div>
  );
}
