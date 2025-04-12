import React, { useState, useRef } from 'react'
import './NewSection.css'
const NewSection = () => {

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
            Home
          </h1>
          <p className="text-dark">
            From clock-ins to time off, with detailed approval workflows,
            talenttwitch helps you handle attendance, leave, and payroll
            reporting in one place.
          </p>
        </div>
      </div>
      <div className="row feature-cards">
        <div className="col-md-4 col-lg-4 mb-4">
          <div className="feature-card p-4 d-flex flex-column">
      
            <p style={{ fontSize: 18 }}>

            The home screen is your central hub, helping you organize, prioritize, and stay on track throughout your day. With a clear overview of tasks, schedules, and workload, you can focus on what truly matters—getting things done efficiently.
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
              className=" video-thumbnail-container position-relative " 
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
      <div className="row">
        <div className="col-md-4 col-lg-4 mb-4">
          <div className="feature-card p-4 d-flex flex-column">
            <h3 style={{ fontSize: 32}}>
              One-Click Payslip Generator
            </h3>
            <p style={{ fontSize: 18}}>
              Speed up payroll operations with the One-Click Payslip Generator.
              Generate detailed, professional payslips instantly, complete with
              all necessary salary components. This tool is perfect for
              businesses that value efficiency and accuracy, ensuring employees
              receive their payslips on time without errors..
            </p>
          </div>
        </div>
        <div className="col-md-4 col-lg-4 mb-4">
          <div
            className="feature-card"
            style={{
              background:
                "linear-gradient(45deg, #E6B8AF 0%, #AF905B 99%, #AF905B 100%)"
            }}
          >
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
                  className=" "
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
        <div className="col-md-4 col-lg-4 mb-4">
          <div className="feature-card p-4 d-flex flex-column">
            <h3 style={{ fontSize: 32 }}>
              Leave and Benefits Manager
            </h3>
            <p style={{ fontSize: 18 }}>
              Track leave balances and employee benefits with ease. Whether it’s
              vacation days, sick leave, or other time-off policies, manage all
              aspects of employee leave in a centralized system. The Leave and
              Benefits Manager allows HR teams to streamline processes, ensuring
              accurate records and timely approvals. Employees can view and
              request their leave effortlessly, while HR can monitor balances
              and track usage in real-time.
            </p>
          </div>
        </div>
      </div>
     
    </div>
  </div>
  {/* section-end */}
    </div>
  )
}

export default NewSection
