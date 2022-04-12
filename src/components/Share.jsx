import React from 'react'
import "../Style/share.css";
import { FacebookShareButton, WhatsappShareButton,TwitterShareButton,EmailShareButton,LinkedinShareButton} from 'react-share';
import { FacebookIcon, WhatsappIcon,TwitterIcon,EmailIcon,LinkedinIcon} from 'react-share';
export default function Share({ closeShare }) {
    return (
        <div className="popup">
            <div className='inner'>
                <h5 className="modal-title">Share</h5>
                <hr></hr>
                <button id='can' onClick={() => { closeShare(false) }}>X</button>
                Share this blog via
                <div>
                    <FacebookShareButton url="https://www.facebook.com/">
                        <FacebookIcon logoFillColor="white" round={true} >
                        </FacebookIcon>
                    </FacebookShareButton>
                    <WhatsappShareButton url="http://localhost:3000/allPost/viewPost/flutter-crash-course/624ef325c683492126953309">
                        <WhatsappIcon logoFillColor="white" round={true}></WhatsappIcon>
                    </WhatsappShareButton>
                   <TwitterShareButton url="https://www.instagram.com/">
                       <TwitterIcon logoFillColor="white" round={true}></TwitterIcon>
                   </TwitterShareButton>
                   <EmailShareButton url="https://accounts.google.com/login">
                       <EmailIcon logoFillColor="white" round={true}></EmailIcon>
                   </EmailShareButton>
                   <LinkedinShareButton url="https://www.linkedin.com/login">
                    <LinkedinIcon logoFillColor="white" round={true}></LinkedinIcon>
                   </LinkedinShareButton>
                </div>
            </div>
        </div>
      
    )
}
