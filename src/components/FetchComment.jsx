import React from 'react'
import moment from "moment";
import { FaUser } from "react-icons/fa";
const style3 = { fontSize: "1.7em" };
export default function FetchComment(props) {
    const date = props.cdate;
    var dt = new Date(date);
    var d = moment(dt, 'YYYY-MM-DD h:mm:ss').fromNow(true);
    //console.log(d);
    return (
        <div>
            <div class="card p-3">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="user d-flex flex-row align-items-center">
                        <FaUser style={style3} width="30" /> &nbsp;
                        <span>
                            <small class="font-weight-bold text-primary">
                                {props.userName}
                            </small>
                            <small class="font-weight-bold"> {props.comment}</small>
                        </span>
                    </div>
                    <small>{d} ago</small>
                </div>
            </div>
        </div>
    )
}
