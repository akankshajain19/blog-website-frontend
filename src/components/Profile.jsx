import React from 'react'
import man from "../Images/register.jpg";
export default function Profile() {
    return (
        <div>
            <h3 align="center">Profile</h3>
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
