import React, { useRef, useState } from 'react'
import './SalesMAin.css'
const SalesMain = () => {
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
              <h1 className="fw-bold">Sales</h1>
              <p className="fs-5">
                All your sales data—organized, analyzed, and ready for action. Our powerful CRM solution gives you the insights and tools needed to track leads, close deals faster, and build lasting customer relationships.Lead & Pip
              </p>
            </div>
          </div>
          
                   <div className="col-md-6 shadow-sm border rounded">
          <span className='visual__figure'>Have a Look At CRM  </span>
            <div 
              className=" video-thumbnail-container position-relative" 
              onClick={() => handleOpenVideoModal("https://media-hosting.imagekit.io/0f737392eecc4dc2/CRM.mp4?Expires=1838890309&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=t7xxybAtzUS3Ans4i5ufUax2EB3MMXw1J2egx7r-vRgovujmhZcBHRJruU-DSCHll657YpGZJOjkGGzGIPwHJ7yaEwy92Hc0Edw-Jy8Wn2v-VVk0qqouD~wb~lEW0Nol77xBwKotHG0sa~Ft9TJ5IgFXUJNDeBPtt-XDo0iD8BeIfrNhiWIBQB9wX0-yK7ZqAJxtwyo26PtEdYz397Rqj3MrapJWdH427iY~7vkm0dKayz2MAJ5nl7ye72407nXJnAm15E34YHDbz-1x7gkHES-FmnoEdkCqWmgyEmjFq4~2cPuf4tndnGIz0I3sdtQNYBCG6c8jOshRM40~5SyTXg__")}
              style={{ cursor: 'pointer' }}
            >
              {/* Video thumbnail image */}
              
                <img 
                  src="https://i.ibb.co/k21DnXgR/Screenshot-2025-04-10-144707.png" 
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
        </div>
      </div>
      <div
        className="base container shadow-sm pb-4 pt-4 border mt-5 rounded"
        style={{ backgroundColor: "#faf8f4" }}
      >

        <div className="row g-4">
          {/* Calendar Section - Left Column */}




          <div className="border rounded col-md-6">
          <video
                      autoPlay
                      muted
                      controls
                      loop
                      className="w-100 video-hover"
                    >
                      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
          </div>




          {/* Events Section - Right Column */}

          <div className="border rounded col-md-6">
          <video
                      autoPlay
                      muted
                      controls
                      loop
                      className="w-100 video-hover"
                    >
                      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
          </div>
        </div>

      </div>
    </>
  )
}

export default SalesMain