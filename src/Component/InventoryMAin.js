import React, { useState, useRef } from 'react'
import './InventoryMAin.css'
const InventoryMAin = () => {
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
              <h1 className="fw-bold">Inventory</h1>
              <p className="fs-5">
                Manage stock levels with ease. Inventory management and
                equipment hire software to keep your warehouse on track, and
                give your staff the overview they need over your goods in/out
                process.Effortless Inventory Management—Stay in Control of Your Stock
                Manage stock levels with ease using our comprehensive inventory management and equipment hire software. Keep your warehouse running smoothly while giving your staff the real-time visibility they need over stock movement, incoming orders, and outgoing shipments.
              </p>
            </div>
          </div>
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
              <source src="https://media-hosting.imagekit.io/3e3d3798f8304557/WhatsApp%20Video%202025-04-09%20at%205.07.11%20PM%20(1).mp4?Expires=1838816535&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=HKnOKqvfklWC6AAeSzBaZ4PzLeJnnBzLhu-dG4wY0t5g0MNa0dUBiGWsSWuvfRTqy3KeWhWjv~UzJ8wyo3Bi6lG1qXGlMfXxOY~iilvXlW-vekNf~QHGY-0txBRO-dwLGDERON9-JLfDr3EArT9TvHhvCSnqdzAiALefngZa3KfPAOgD4q4kYdPXtROpR-2r89yOeM9Ox5IwVRkvVkfDrVoIHHatJ01wsbY9YBZ9Fxgyu~V0SPrI60NmmPH64TanpTf6fiFUPh9-~sG9e3Efv36q72XAaz4OTXO26YqcKNMHLD5VhovRjfOF3fOMUuMCS63nYMP2Z~t2mLMRCaqcjw__" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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

export default InventoryMAin;