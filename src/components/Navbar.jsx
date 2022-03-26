import React from "react";

function Navbar() {
  return (
    <div>
      <ul className="nav justify-content-center">
       
        <li className="nav-item">
          <a className="nav-link" href="#">
            HOME
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            ABOUT
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            CONTACT
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            LOGIN
          </a>
        </li>
       
      </ul>
    </div>
  );
}

export default Navbar;
