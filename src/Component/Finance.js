import React, { useState, useRef } from 'react'
import './Home.css'
const Finance = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  return (
    <>
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
        <div className="border rounded col-md-6">
          {!isPlaying && (
              <div 
                className="video-thumbnail-container position-relative" 
                onClick={handlePlayVideo}
                style={{ cursor: 'pointer' }}
              >
                {/* Video thumbnail image or first frame */}
                <div className="video-thumbnail w-100 h-100">
                  <img 
                    src="https://i.ibb.co/8gcDmzvb/image.png" 
                    alt="Video thumbnail" 
                    className="w-100 h-100 rounded"
                  />
                </div>
                
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
            )}
            <video
              ref={videoRef}
              className={`w-100 h-100 ${!isPlaying ? 'd-none' : ''}`}
              controls={isPlaying}
              muted={!isPlaying}
              playsInline
            >
              <source src="https://media-hosting.imagekit.io/68368025144c4bfb/WhatsApp%20Video%202025-04-09%20at%205.07.12%20PM.mp4?Expires=1838816828&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=v2~FA21k0pkCUnBAj-rOIzzHd0XQQ5PICv0p4IgL5Dl8GGKYaKgXvOh4QbW8b6MEII4Zvz4A336fsJOn7RU4lw~beIh~SWEHYmSJBQt-pdfEVXWGNZlfCmNMtz~NeVQQAUW6FH~2HuGt3PQoV651LPRFxORtGdplIUv2F5~vK0kUFlXmG05B7XtuerRMCQmVwkV9~6odNQVhryv4VkLL~769aP-XutM5pR2sfkXs2LHT67M6k0IvY6p7H5D5S6tD8MrPcwn5KgPY6GAre2C2Zyp-GsqLN8spmUaqMPDWR8l~MYDfi3P91Htlv1PEGJbkysI4yN~0gB0dgkJ7jH9jaw__" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
                      <video controls className="w-100 h-100 rounded shadow video-hover">
                        <source src="https://your-video-url.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
        {/* Events Section - Right Column */}
        <div className="border rounded col-md-6">
                      <video controls className="w-100 h-100 rounded shadow video-hover">
                        <source src="https://your-video-url.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
      </div>
  </div>
  </>
  )
}

export default Finance