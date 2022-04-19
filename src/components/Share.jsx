import React from 'react'
import "../Style/share.css";
import { FacebookShareButton, WhatsappShareButton,TwitterShareButton,EmailShareButton,LinkedinShareButton} from 'react-share';
import { FacebookIcon, WhatsappIcon,TwitterIcon,EmailIcon,LinkedinIcon} from 'react-share';
export default function Share({ closeShare }) {
    const ur = window.location.href;
    // console.log(ur);
    return (
        <div className="popup">
            <div className='inner'>
                <h5 className="modal-title">Share</h5>
                <hr></hr>
                <button id='can' onClick={() => { closeShare(false) }}>X</button>
                Share this blog via
                <div>
                    <FacebookShareButton url={ur} quote={"Read this Blog"}>
                        <FacebookIcon logoFillColor="white" round={true} >
                        </FacebookIcon>
                    </FacebookShareButton>
                    <WhatsappShareButton url={ur} quote={"Read this Blog"}>
                        <WhatsappIcon logoFillColor="white" round={true}></WhatsappIcon>
                    </WhatsappShareButton>
                   <TwitterShareButton url={ur} quote={"Read this Blog"}>
                       <TwitterIcon logoFillColor="white" round={true}></TwitterIcon>
                   </TwitterShareButton>
                   <EmailShareButton url={ur} quote={"Read this Blog"}>
                       <EmailIcon logoFillColor="white" round={true}></EmailIcon>
                   </EmailShareButton>
                   <LinkedinShareButton url={ur} quote={"Read this Blog"}>
                    <LinkedinIcon logoFillColor="white" round={true}></LinkedinIcon>
                   </LinkedinShareButton>
                </div>
            </div>
        </div>
      
    )
}
