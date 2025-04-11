import React, { useRef, useState } from 'react'
import './HomeMain.css';

const HomeMain = () => {
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
      <div className="col-md-12 d-flex align-items-center">
            <div className="text">
              <h1 className="fw-bold">Home</h1>
              <p className="fs-5">
                Your Home Screen – Designed for Productivity
                The home screen is your central hub, helping you organize, prioritize, and stay on track throughout your day. With a clear overview of tasks, schedules, and workload, you can focus on what truly matters—getting things done efficiently.
              </p>
            </div>
          </div>
        <div className="row">
          
          <div className="col-md-6 shadow-sm border rounded">
         
            <div 
              className=" video-thumbnail-container position-relative" 
              onClick={() => handleOpenVideoModal("https://media-hosting.imagekit.io/4ce6bf08c91c4e10/calendar.mp4?Expires=1838890092&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=GDBeocg~UhQe49EMXsLLwKhrwNQRQrEy7lSTxdl~X1BtCPLHmFq7WIfFBncEAN1IQI~6MVXcHu4s46EYX-cRuyGtlLakQ90hO4YwPyCtw5PNcLIwOMJtC1md1Z3tLFGrcGpj0JdpPHAzLTkOdq3EvT824U5sVNjXdZfT08F22Ifqg91slAyldeGesMEXjRuFfVNk4TIPXsjh1iAfK34OJiH6C6obiYsrXqLseUdBNzmF0hEy5aSO52HmCsQetGK4mf1LsAjY4uYNYHe1jpMyWflUU6C-Drg7f13EOUSFNo~R5ycevHwj0h1sd92UOmZ0lIx3xL8qgG1aZSzc834Qqw__")}
              style={{ cursor: 'pointer' }}
            >
               <span className='visual__figure'>Home </span>
              {/* Video thumbnail image */}
              
                <img 
                  src="https://i.ibb.co/k21DnXgR/Screenshot-2025-04-10-144707.png" 
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
      <div
        className="base container shadow-sm pb-4 pt-4 border mt-5 rounded"
        style={{ backgroundColor: "#faf8f4" }}
      >

        <div className="row g-4">
          {/* Calendar Section - Left Column */}
          <div className="col-md-6 shadow-sm border rounded">
        
            <div 
              className=" video-thumbnail-container position-relative" 
              onClick={() => handleOpenVideoModal("https://media-hosting.imagekit.io/e91eb030aabe4dd6/Notess.mp4?Expires=1838892129&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Dv~SDnrWQ3kbJano96iNo1z-KZneKuKxGlOpoZvGFkD0SwA9xjX4OaUC3WeeGoRCNXtv1JGx~Wvtd5lNQV9bmNz6rHuEPiyn6TuXjI0kiekhOBAynwMqN7kankEad2D4zAAz8HYB4fb8c4~sGLfhwPq8gYWx2xIzjg4sLpviqOEA0GwuhxRrWgym1QNeQB48UAo3bHeTqYn-ScyQ00nXGq3Mgl71b9I-~Zq8-X3C93nMO1UPH9-nX1zFDvA-Npm3fB2X8KR6nk9L1g1c9HH7KOKoECcoboDndK18eOwgZGeT6vpP2W967dakfKlZiO2CM6y5dSgti6qp6O8Txztb-w__")}
              style={{ cursor: 'pointer' }}
            >
                <span className='visual__figure'>To DO</span>
              {/* Video thumbnail image */}
              
                <img 
                  src="https://i.ibb.co/zV53pnBt/image.png" border="0" 
                  alt="Video thumbnail" 
                  className="w-100 h-100 rounded "
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

          {/* Events Section - Right Column */}
          <div className="col-md-6 shadow-sm border rounded">
        
            <div 
              className=" video-thumbnail-container position-relative" 
              onClick={() => handleOpenVideoModal("https://media-hosting.imagekit.io/27be9228848d42f5/Notes.mp4?Expires=1838893667&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=EOrmHZuj~mrlrvfI5t-8YG1vaciiM-Z3XFJlEVuSQZLcpWUTvHQ~i9qWU5zkEHa0dVPsdkL1t0uabViLk2Wn2R91MbODRpHH~KE~9kcX1vyAe3jC3ypyESpwiBMOEZAmgKI1-gURaUUePL39PqXkeZdBUNW5ENi2cnEr05H-QQPxZq0GdP4qbv0zZj30bmcNVCwqaztLyCxkKjN8J8UTkqiyjMGDmaVlihEOxvIynlYoBlmFHYrbq6zAr0bTk9Ad-dKIcW~Wa2~UFGUka4qACQgTxH62tUVqtVTtCR9n1HP-8B1rqvLns4DT~ZC5JdouhZIYJSjW9W9vzV6Fy3RSQA__")}
              style={{ cursor: 'pointer' }}
            >
                <span className='visual__figure'>Notes </span>
              {/* Video thumbnail image */}-
              
                <img 
                  src="https://media-hosting.imagekit.io/1e73622907184324/screenshot_1744290704174.png?Expires=1838898707&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=nbo0jky1piLaw9QYviqo80HE6zjKatEP9t2iSTJX129VqEcESqU8X7gXqwPR8fKVPIrq7hadwOiDU5SXOWU0Xwc8~5nMvDZCyRlYnmnnQZrI~tyVFr8kUc0158krWx3282tIxh~~EGSSKXX4GlWASeia~o4GeVyPHDwFr~9CUflCWAT89uy6m7hzxDK0oY3UOSwGovnEImY69NT7jIRI03ocECc4UiII4bewnDkFF6EuE5PioR-0~m4KnZj64~PC6xYUmnZmmPenrDefwuI2OyALib10JKC1WkACgkgLC7ZdRqwLPi3tw0ZlXix2o6vlY8IoIf~SvJALRdP50SMbPQ__" 
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

export default HomeMain;