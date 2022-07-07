import React from "react";
import Navbar from "./Navbar";
import man from "../Images/hom.jpg";
import anshu from "../Images/anshu.jpg";
import akansha from "../Images/akansha.jpeg";

const URI = "http://localhost:8083/contact";
function Contact() {
  return (
    <>
      <Navbar />
      <div className="container mt-3 ">
        <div className="container">
          <div className="row ">
            <div className="col-sm-4 mt-5">
              <div className="card">
                <div
                  class="p-3 text-black"
                  style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
                >
                  <img src={man} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">Deepak Nishad</h5>
                    <p className="card-text">Mob no-8349229274</p>
                    <h6>
                      e-mail: <a href="email">dnishad158@gmail.com</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mt-5">
              <div className="card">
                <div
                  class="p-3 text-black"
                  style={{ backgroundColor: "rgba(0,128,128,0.3)" }}
                >
                  <img src={akansha} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">Akanksha Jain</h5>
                    <p className="card-text">Mob no-8989098344</p>
                    <h6>
                      e-mail: <a href="email">akanshajain867@gmail.com</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mt-5">
              <div className="card">
                <div
                  class="p-3 text-black"
                  style={{ backgroundColor: "rgba(128,0,0,0.3)" }}
                >
                  <img src={anshu} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">Anshu Chaudhary</h5>
                    <p className="card-text">Mob no-7906608676</p>
                    <h6>
                      e-mail: <a href="email">anshu2019chaudhary@gmail.com</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
