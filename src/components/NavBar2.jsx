import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { GiNotebook } from "react-icons/gi";

export default function Navbar2() {
  const style = { color: "white", fontSize: "1em" };
  const logOut = () => {
    sessionStorage.removeItem("id");

    sessionStorage.removeItem("name");
    toast.info("Logged out Successfully", {
      position: "top-center",
    });
  };
  return (
    <div className="navbar navbar-light bg-dark">
      <ul className="nav justify-content-center">
        <li className="nav-item nav-link h3">
          <Link to={"/"} className="text-success">
            <GiNotebook style={style} />
          </Link>
        </li>

        <li className="nav-item nav-link h4 ">
          <Link to={"/create"} className="text-decoration-none text-light">
            CREATE POST
          </Link>
        </li>

        <li className="nav-item nav-link h4">
          <Link
            to={"/"}
            className="text-decoration-none text-light"
            onClick={logOut}
          >
            LOGOUT
          </Link>
        </li>
        <li className="nav-item nav-link h4">
          <Link to={"/user"} className="text-decoration-none text-light">
            Show Blog
          </Link>
        </li>
      </ul>
    </div>
  );
}
