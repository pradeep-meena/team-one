import React, { useRef, useState } from 'react'
import './SupportMain.css'
const SupportMain = () => {

  const [showModal, setShowModal] = useState(false);
  const [currentVideoSrc, setCurrentVideoSrc] = useState('');
  const videoRef = useRef(null);

  // Function to open modal with video
  const handleOpenVideoModal = (videoSrc) => {
    setCurrentVideoSrc(videoSrc);
    setShowModal(true);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentVideoSrc('');
  };

  return (
   
    <>
        {showModal && (
        <div className="modal-backdrop" onClick={handleCloseModal}>
          <div 
            className="video-modal-content" 
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal-btn" onClick={handleCloseModal}>×</button>
            <div className="modal-video-container">
              <video
                ref={videoRef}
                className="w-100 h-100"
                controls
                autoPlay
                playsInline
              >
                <source src={currentVideoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
  <div className="container mt-5">
    <div className="row">
    <div className="col-md-6 shadow-sm border rounded gap-2">
         
            <div 
              className=" video-thumbnail-container position-relative" 
              onClick={() => handleOpenVideoModal("https://media-hosting.imagekit.io/95cca3dd8ec54a9e/Support.mp4?Expires=1838890912&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nN3Upnp-59km9qfVb-6RRtsStsW3wNjskKM6EDYY187BT5EObKuNCt8C6wGGPkrNx~~4JfNHrrU~d3gtb~TWDE0M20iQsYEtszalHb5Ds3l-xCqqL8sVzd-7oRlabMYgeZUfhQdU7La8P2-d4nXVL~yLj5n9ITZGbIRiriTvHNvDIfncvq--xSjRXFeQDKoYLD5tP8lU4rxKlXgvXz9EQ42Jo-a7M23vRHBM1ZdrKCO~SZph1ZWudo8ZCZ-lwFM1YeVSjbeOEcCVUSyQMMr5aOZYMZ~YPhSVsdqbx2BMXOjqGHEvnZp1q1W1RdJ4InXi5O6KAT3iQjZcooMrSSvfWQ__")}
              style={{ cursor: 'pointer' }}
            >
               <span className='visual__figure'>Manage  support desk </span>
              {/* Video thumbnail image */}
              
                <img 
                  src="https://media-hosting.imagekit.io/a8118176f4754700/screenshot_1744291990023.png?Expires=1838899992&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=GIhCNfQDKlvHuuLh~sgP0~YJYxoai7tV3W6e4NVxAQKC7TfSPF3gCk-BWIUFeLP5VnxEUbgNRxljt3dPLR027rvR7d8BlRpZ3scI9ML1evNTJwCKy016WeXZcSiRpZdPfw0mOxRP7jENZ1K1lN3L7hkvTIsG4eW6KaVGqVOZaWjJIU6uQz5TwUkTmQ-zYI7LMWlqsPGrLc1hhJBFtOZnTxXrxF1x3xOtF-vXt4tI-2ncQSHKpr3fPmB5Quz9wDT1L0UNiGZ-DTDOoKURGtzIH10OzJaTmbIObgvf6prSRvtPHFkoMMSMJDz-OC~xkX~FvhvVtAbwLuqcJf65B28Xbw__" 
                  alt="Video thumbnail" 
                  className="w-100 h-90 rounded mt-8"
                />
              
              
              {/* Play button overlay */}
              <div 
                className="play-button-overlay position-absolute"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'rgba(0,0,0,0.6)',
                  borderRadius: '50%',
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <div 
                  style={{
                    width: '0',
                    height: '0',
                    borderTop: '20px solid transparent',
                    borderBottom: '20px solid transparent',
                    borderLeft: '30px solid white',
                    marginLeft: '8px'
                  }}
                />
              </div>
            </div>
          </div>
      <div className="col-md-6 d-flex align-items-center">
        <div className="text">
          <h1 className="fw-bold">Support Desk</h1>
          <p className="fs-5">
          Enterprise support desk management, helping you organise, triage
                and <br /> close tickets tickets within SLA, every time.
                Enterprise Support Desk Management – Organize, Triage & Resolve with Precision
                Deliver exceptional customer service with our enterprise-grade support desk management solution. Efficiently organize, prioritize, and resolve support tickets while ensuring compliance with SLAs—every single time. Whether handling IT requests, customer inquiries, or internal support, our system keeps everything running smoothly.
          </p>
        </div>
      </div>
      
    </div>
  </div>
  <div
    className="base container shadow-sm pb-4 pt-4 border mt-5 rounded"
    style={{ backgroundColor: "#faf8f4" }}
  >
            
 
  </div>
</>
  )
}

export default SupportMain;