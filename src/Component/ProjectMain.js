import React, { useState, useRef } from 'react';

const ProjectMain = () => {

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
              <h1 className="fw-bold">Projects</h1>
              <p className="fs-5">
                Stay in full control of your projects with a system designed to track progress, allocate resources efficiently, and ensure timely delivery. Whether managing small tasks or large-scale operations, our intelligent project management solution helps you streamline workflows, optimize team productivity, and stay on schedule—every time.
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
              <source src="https://media-hosting.imagekit.io/5a87b2978ad7483e/WhatsApp%20Video%202025-04-09%20at%205.07.11%20PM.mp4?Expires=1838814505&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=lsWDHy5YChycU9RT-VHDdq7HMiw-dHzw4U7caNBHqQXrIwarBNtVwZuCruAFP-morkDFr6b1syPR73GaJNF3~5ui1br6zfwkn1Vb3KVNcr2rYy2HcwlCu1sC2weDoGf8F~MgOgfZDi3XWFTjIOKenOwfGNmg26txxfeaLNUlzbz~~csf6yv~LqOv8oVqDehFmktZKOZZle6n~ttP-EOyKo-mHl9iigA4NiUjwdxaYJxqkMdnIKHnuiqwN4mHcp499JpRQUt6bJAmlRD8WyCLk7NXqxo4P0H74ouWhrBgxrYdK6T2UDi~llGVf1b2ySE3ET6da1HDR-0loKJqty0Jwg__" type="video/mp4" />
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

export default ProjectMain