import React from 'react'
import man from "../Images/register.jpg";
import Navbar2 from "./NavBar2";

export default function Profile() {
   
    return (
        <div>
           <Navbar2 />
            <h3 align="center ">Welcome <span className='text-primary'>{sessionStorage.getItem('name')}</span></h3>
            <div className="container bg-dark" >
                <div className="row">
                    <div className="col">
                        <img src={man} className="img1" alt="picture"/>
                    </div>
                    <div className="col">
                        Column
                    </div>
                    <div className="col">
                        Column
                    </div>
                </div>
            </div>
        </div>
    )
}
