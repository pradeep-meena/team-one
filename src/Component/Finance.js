import React, { useState, useRef } from 'react'
import './Home.css'
const Finance = () => {
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
          <div className="col-md-6 d-flex align-items-center">
            <div className="text">
              <h1 className="fw-bold">Finance</h1>
              <p className="fs-5">
                Your business finance, Analysed, Sorted and housed under one roof.
                Quoting, invoicing, payments. All the tools you need to pay, and get
                paid.Take full control of your business finances with an all-in-one solution designed to streamline your cash flow. From quoting and invoicing to payments and expense tracking, we provide all the tools you need to pay and get paid—quickly, securely, and effortlessly.
              </p>
            </div>
          </div>
          <div className="col-md-6 shadow-sm border rounded">
          <span className='visual__figure'>Hit Play to see TeamOne </span>
            <div 
              className=" video-thumbnail-container position-relative" 
              onClick={() => handleOpenVideoModal("https://media-hosting.imagekit.io/2f79c0edb0134261/Finance.mp4?Expires=1838892908&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Ca3ieENVL04RXyl4mIyvci02XdBcwb1zvl8NA0nmLF0wWax1PSWDitCEJt72er8cA~W3wdF8Q8swQR-Wz0f1BFw4ntixRKazoINa5aVvP3CbL17ydIzSZi-s7HG~rOtIDccvuLEnL4afXtNUynYbcOky02vC6P9zcOUKmy80MU0c-vA10tpiJ2WUUub3u4sCmURii40xTLuX2w6SD5Mf9MbI-gSb8jXqQn8andM5rf8pnENBywCskGA3kGnE1MEEy0LS6ZX0I~VWdoQSgMbNCP8NiGfanqIAG5cQvXtkisw-aMtmR0X7lWt9zrJxqA7NPNA4K9K0XJJyWARWR2jzCQ__")}
              style={{ cursor: 'pointer' }}
            >
              {/* Video thumbnail image */}
              
                <img 
                  src="https://media-hosting.imagekit.io/2bae80abc05a44e9/screenshot_1744292362026.png?Expires=1838900367&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=R3zmV4rlAPMcqVfssT8dWBDiZSdaueCEo~hGOwrtrRph9MJ8NfD50WgwHKf5YXSBYfnE4gzToGMdQoipJvqLGudeWX3J-vZHS9Hj8nfRNZAYvTxXt32C0CMPkcRmWiB0PzgUgfXmVElCfupJPRbzNR2m~x8hM2wvD4Y1~Osyf0hXn7JdIrQ0aYWk57-3uxUtc~KC8zSiu3RAIopP9dfAQueB9wYtiJXeOqlmscD0AVWY3OgNN9gazTdAUFgvX6XszkUICgqJPIgoU-uRBj5vR-c3yYoMAMG4nX88C6TLQFFboLpqBJLXgcQ2nb2b2oKxlAYkdMLlXomTitrwQYc9ew__" 
                  alt="Video thumbnail" 
                  className="w-100 h-100 rounded mt-8"
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
        </div>
      
      </div>
      
    </>
  )
}

export default Finance