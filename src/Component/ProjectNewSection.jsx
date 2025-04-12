import React, { useState, useRef } from 'react';
import './NewSection.css'
const ProjectMain = () => {
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
    <div>

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
        {/* section-start */}
  <div className="container-fluid py-5" style={{ backgroundColor: "#fdf4ee" }}>
    <div className="container">
      <div className="row text-center">
        <div className="col-lg-8 offset-lg-2">
          <button
            className="btn btn-gold py-2 rounded-5 mb-2"
            style={{ borderRadius: 12 }}>
      
          </button>
          <h1 className="fw-bold">
          Projects
          </h1>
          <p className="text-dark">
          
 Manage multiple projects, assign tasks, track progress, and meet deadlines with ease.
 Visualize timelines, set priorities, and collaborate across teams in real-time.

          </p>
        </div>
      </div>
      <div className="row feature-cards">
        <div className="col-md-4 col-lg-4 mb-4">
          <div className="feature-card p-4 d-flex flex-column">
            <h3 style={{ fontSize: 32 }}></h3>
            <p style={{ fontSize: 18 }}>
            Create projects, sprints, or custom workflows tailored to your team’s needs. 
            Assign tasks, track time, and prioritize work with drag-and-drop simplicity.<br/>
            Kanban boards, and milestones keep projects on track—every time.<br/>
            Budget tracking, resource allocation, and real-time progress analytics.<br/>
            Integrated chat, file attachments, and comments on tasks.
            </p>
          </div>
        </div>
        <div className="col-lg-8 mb-4">
          <div
            className="feature-card"
            style={{
              background:
                "linear-gradient(45deg,rgb(157, 207, 230) 0%,rgb(91, 118, 175) 99%,rgb(104, 136, 194) 100%)",
              height: 400
            }}
          >
                <div 
              className=" video-thumbnail-container position-relative" 
              onClick={() => handleOpenVideoModal("https://media-hosting.imagekit.io/c2f660d48c974645/PRoject.mp4?Expires=1838812340&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vz3DtuQjK8-pPYxAZ-A4cueAshegmpd~YNCsRbD7U2QCVwOm55ag2zHMcanY13mq9gEUSOjobD88fWQ4fIcuWX8HGcbFoNMufoTV57wJMhVTeJVJ4v9n~0UwJMt7PIaHDaxqkZ1twCv4S6wFu1PNurbTwmY2pFrI-LUuDr0a8wfICC8kk62HY7eK42AAopUnoUNzmbsuugKo-BL2klHQdEKNvB7N6LY5vxIZMXWvQRgue3g-pm7iFVf-dYWv6oNUHuwknSLRBpHenst0dEkwRx0eLAoamZk6cRg0F~ogzuwye8Ya1BlI~XldsUxf1A41EMdudTxFWPcBTczgHdhWpQ__")}
              style={{ cursor: 'pointer' }}
            >
                  <span className='visual__figure'>Projects </span>
              {/* Video thumbnail image */}
              
                <img 
                  src="https://media-hosting.imagekit.io/1167384628334096/screenshot_1744291549815.png?Expires=1838899552&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=p5Sr-dYHad3HLAMeEiUxysHFxDKKPnPjqWEcQ-Hy28g2o1tx9OLmmFB5IIftpUm4f9JXv6yYhwynfG5vkIhzoDNb3-1RiEMSqdCE3vVeymLZeNg8QWGQZ~C3IijP~jPb-vot8eINCB8kAxDgOFiUk7rDmRN~W9nTsc66uJqRCojAmK~Ip6rLgecjrmrcmib47kGcNL8GYpbhDhd5H0Ekpn9ORoFMwKlF3v8JvWfhnQwLJzFIKEV3iaQsxa5u8fkOykzwBJ4zns~p-6CSuWnFb5TIUeRKJNca9QLN-YSmUqe8JG9CmquoO89zCjXBIjz0TfXmASVmolh3lzZimNilMA__" 
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
  {/* section-end */}
    </div>
  )
}

export default ProjectMain
