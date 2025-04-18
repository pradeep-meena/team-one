import React, { useState, useRef } from 'react'
import './InventoryMAin.css'
const InventoryMAin = () => {
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
    

      <div className="container-fluid " style={{ backgroundColor: "#fdf4ee" }}>
    <div className="container">
      <div className="row text-center">
        <div className="col-lg-8 offset-lg-2">
          <button
            className="btn btn-gold py-2 rounded-5 mb-2"
            style={{ borderRadius: 12 }}>
      
          </button>
          <h1 className="fw-bold">
          Inventory
          </h1>
          <p className="text-dark">
          
          Real-time inventory management software to optimize stock, reduce costs, and boost efficiency

          </p>
        </div>
      </div>
      <div className="row feature-cards">
        <div className="col-md-4 col-lg-4 mb-4">
          <div className="feature-card p-4 d-flex flex-column">
           
            <p style={{ fontSize: 18 }}>
          Effortless Inventory Management Stay in Control of Your Stock
                Manage stock levels with ease using our comprehensive inventory management and equipment hire software.<br /> Keep your warehouse running smoothly while giving your staff the real-time visibility they need over stock movement, incoming orders, and outgoing shipments.

            </p>
          </div>
        </div>
        <div className="col-lg-8 mb-4">
          <div
            className="feature-card"
            style={{
              background:
                "linear-gradient(45deg,rgb(157, 207, 230) 0%,rgb(91, 118, 175) 99%,rgb(104, 136, 194) 100%)",
            }}
          >
                <div 
              className=" video-thumbnail-container position-relative" 
              onClick={() => handleOpenVideoModal("https://media-hosting.imagekit.io/01064bd0fabb44a2/Inventory.mp4?Expires=1838891684&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=H10R3SMyUTpK-AbR2pKij6fLMC2SFpb1wbKp8bslECzU-F2fhV6UCtDrq-VQQYAQKPfV1A6rtrEKHDFczvN~4kxMxYOncqYBC8W32HBFp2PwJEV~AboluaSJDnD7K1qJg6d~4T266DlCa9BUkUKY~uSA-KwN-X-XmnDEITIJ9uO3ZYZruyoWNxpC-UkLT4btX70mf0RYiHEjTYZKa8Zh7B~TaCvF187E6mkkTBLw27rvc4sX1VjTGXYACaO~K1dXUEn7yZsNgOtYWxquKyWMerfgQuN0-gaDE6bHfVCgAEVDdziLp-16GJLcEn9qBG1T03mq9qYKOY~aTp7nTPGpEw__")}
              style={{ cursor: 'pointer' }}
            >
                      <span className='visual__figure'>Inventory  </span>
              {/* Video thumbnail image */}
              
                <img 
                  src="https://media-hosting.imagekit.io/8e930580e3b84248/screenshot_1744292137677.png?Expires=1838900140&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ru0bsBU~pwisI11olnrHLQQIXlOqVJrEHzMizP40tIRGGtGcBSKCOL~3oObQ-yme7VfyArkXDFbXIrSLOTR8Ze1~VwqmFFphwl4r9onQNGriJb6kiX1CFBfMCsoUJ8LP3zA7vJo68pkgodKRjfG021-cdOvJWNhn5BRR2vjyNlI~ZgQ8uZDgYqgAwokRTZQ-qhjVYvH6UZKlRYgBOfmTQQr2P~DIMBXI8Moajm2wJspz3Hlevs~CMB8FJvEqF6iuOK9Y6A~deDF4GHozFaAD6WLs-JHq2lC0u~uQ83wI7VzPRtMYdSeR2u-taoydWuNmLkrVgJi~IeJ6nI44rVItVA__" 
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
 
     
    </div>
  </div>
      {/* <div
        className="base container shadow-sm pb-4 pt-4 border mt-5 rounded"
        style={{ backgroundColor: "#faf8f4" }}
      >

       

      </div> */}

      

      

    </>
  )
}

export default InventoryMAin;