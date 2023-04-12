import React, { useState } from 'react';
import { FacebookShareButton, WhatsappShareButton, TelegramShareButton, LinkedinShareButton } from 'react-share';
import { FacebookIcon, WhatsappIcon, TelegramIcon, LinkedinIcon } from 'react-share';
import copy from 'copy-to-clipboard';
import { FaLink } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';
import './ShareModal.css';

function ShareModal() {
  const url = 'https://mui.com/material-ui/react-modal/';

  const [linkText, setLinkText] = useState(url);

  function hideModal() {
    var modal = document.getElementById("share-modal");
    if (modal.style.display === "inline") {
      modal.style.display = "none";
    }
  }


  const handleCopyLink = () => {
    copy(linkText);
    setLinkText('Copied!');
    setTimeout(() => setLinkText(url), 500);
  };

  const myStyle = {
    display: 'none'
  };

  return (
    <div id='share-modal'  className='share-modal' style={myStyle}>
      <div>
        <GrFormClose onClick={hideModal} className='close-modal' />
      </div>
      <div className='social-share'>
        <FacebookShareButton url={url}>
          <FacebookIcon className='social-media-icon' size={43} round={true} />
        </FacebookShareButton>
        <WhatsappShareButton url={url}>
          <WhatsappIcon className='social-media-icon' size={43} round={true} />
        </WhatsappShareButton>
        <TelegramShareButton url={url}>
          <TelegramIcon className='social-media-icon' size={43} round={true} />
        </TelegramShareButton>
        <LinkedinShareButton url={url}>
          <LinkedinIcon className='social-media-icon' size={43} round={true} />
        </LinkedinShareButton>
      </div>
      <div className='share-button'>
        <input className='share-button-input' type='text' value={linkText} onChange={(e) => setLinkText(e.target.value)} />
        <button className='share-button-button' onClick={handleCopyLink}>
          <FaLink />
        </button>
      </div>
    </div>
  );
}

export default ShareModal;
