


import React, { useState, useRef } from 'react';
import './Home.css';
import HomeMain from './HomeMain';
import SalesMain from './SalesMain';
import ProjectMain from './ProjectMain';
import DispatchMain from './DispatchMain';
import SupportMain from './SupportMain';
import InventoryMAin from './InventoryMAin';
import Finance from './Finance';
import SupportInboxMain from './SupportInboxMain';
import MainLast from './MainLast';

const Home = () => {
  // State for modal
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
      {/* Video Modal */}
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
          <div className="col-md-6">
            <h1 className="fw-bold">TeamOne Ops</h1>
            <p className="fs-5">
              Software that's powerful, Intuitive and scales well with your
              business.
              <br />
              Sales. Projects. Field Service. Support. Finance. HR. Files.
              Operations.
            </p>
            <h3 className="fw-bold mt-4">The All In One Business Management OS</h3>
            <p>
              TeamOne OS brings together the most vital enterprise tools into one{" "}
              <br />
              operating system allowing businesses to stay efficient, stay
              productive, and <br />
              stay on target.
            </p>
            <p>
              Get a demo of our software, or get started with free forever tools.
            </p>
            <div className="mb-5">
              <button className="btn btn-custom btn-img-color me-2">Get a demo</button>
              <button className="btn btn-custom btn-start">Get started free</button>
            </div>
          </div>
          <div className="col-md-6 shadow-sm border rounded">
          <span className='visual__figure'>Hit Play to see TeamOne </span>
            <div 
              className=" video-thumbnail-container position-relative" 
              onClick={() => handleOpenVideoModal("https://media-hosting.imagekit.io/0bac5df3e6054c01/TeamOne.mp4?Expires=1838883851&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=uSEOc0tsHEYn1YbleEtn2-iSYSyGAsY2OGdPHbOyOljWPs2DvHLUqnjzPxdDzFDtx3GGwWnC~yMJZdGbISRe921DjVBbMlHgTUN0b6066vqaxNH9XODn6CUBCN4EM4sIZJczeHgYrcGmvktQ94m8NlWY3B6iIcG9rJAx9-T8AyZm-zyXlDoamatk~N8qf7f1TNxlQb1T6JyAi8vDrRLm7ZFNh-4v3vqXMc1TWG1oN~Cyg1-ElyHap8DXclC7WbisHdU7tRtpseFQdtKbqCNzXI14DiuPd44ShnzNICo~J7GSmi9lSCNnkqFrNH1SbE7GAHn2AuT4vxtg3k03JTRyuA__")}
              style={{ cursor: 'pointer' }}
            >
              {/* Video thumbnail image */}
              
                <img 
                  src="https://i.ibb.co/k21DnXgR/Screenshot-2025-04-10-144707.png" 
                  alt="Video thumbnail" 
                  className="w-100 h-100 rounded mb-8"
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

      {/* Features Page  */}
      <div
        className="base container shadow-sm pb-4 border mt-5 rounded"
        style={{ backgroundColor: "#faf8f4" }}
      >
        <div className="container mt-5 mb-4 text-center">
          <div className="row g-4 mt-3 justify-content-between">
            <div className="col-md-6 shadow-sm border rounded">
              <div 
                className="video-thumbnail-container position-relative" 
                onClick={() => handleOpenVideoModal("https://media-hosting.imagekit.io/c2f660d48c974645/PRoject.mp4?Expires=1838812340&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vz3DtuQjK8-pPYxAZ-A4cueAshegmpd~YNCsRbD7U2QCVwOm55ag2zHMcanY13mq9gEUSOjobD88fWQ4fIcuWX8HGcbFoNMufoTV57wJMhVTeJVJ4v9n~0UwJMt7PIaHDaxqkZ1twCv4S6wFu1PNurbTwmY2pFrI-LUuDr0a8wfICC8kk62HY7eK42AAopUnoUNzmbsuugKo-BL2klHQdEKNvB7N6LY5vxIZMXWvQRgue3g-pm7iFVf-dYWv6oNUHuwknSLRBpHenst0dEkwRx0eLAoamZk6cRg0F~ogzuwye8Ya1BlI~XldsUxf1A41EMdudTxFWPcBTczgHdhWpQ__")}
                style={{ cursor: 'pointer' }}
              >
                {/* Video thumbnail image */}
                <div className="video-thumbnail w-100 h-100">
                  <img 
                    src="https://media-hosting.imagekit.io/db66dec2bd5e431c/screenshot_1744291136685.png?Expires=1838899139&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=EkoJQMBGsUbTKuchjezAdAMez7uUlKaAAc9e9y2-an~gau0p3N9AW7H15WWYgJZFkNGU2gVM1yW5s8bLCyYq4~RU6ITCzlEbFKSYD8fCXj0Ya3DTUq~7vZMA0E6UG75jAxlbWd21GccQIyNsCS4-ajhnWnkR3dzA7tPDHtI~aD-1akP0Y5OQaxJfNYyuwXyOm1ZgOiGb1j9gdCrPTNt1ebHdpScgqDu2imZWl-XrjM35BK6EoWxOhaGVJD7IKPqHtOwkmhJvyT~h9Qfml5xolEdNI8GLyn0T~1Z09RFNGuwFDVFI-hUBson9N2lWeYMRGGeY6svEx3CLmWU--GJJEw__" 
                    alt="Video thumbnail" 
                    className=" rounded ratio ratio-16x9"
                    style={{width:"900px", height:"800px"}}
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
            </div>
            <div className="col-md-5">
              <div className='row'>
                <div className='col-md-12'>
                <span className='visual__figure'>Manage Docs and Files   </span>
                <div className="col-md-12 shadow-sm border rounded">
       
            <div 
              className=" video-thumbnail-container position-relative" 
              onClick={() => handleOpenVideoModal("https://media-hosting.imagekit.io/d0d27d3aff7e4b5f/Files.mp4?Expires=1838892048&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Uf0bJxRHZr7Uy4WDVRbZHH0Z0Glu5962kkMxmSm96VM8ZXFRCl6gDmHo8dhsnkKwcNpzH9emtJxNse2U~wpkD0tV~R-LVHXkK6gfVtftyXIA2s1XrGGM-sKeHZB0XneSjoHcy5wwhiqqvcJhsIfVV85aOauyVDFq1XomgGG-pc-aChuBua4PQ6J02zOH2091x9CGfk6HGhuBftJANNWGaRb-H0KL3tzyVEQmCqssktPFVysdCDyQ0AP1BSdYkbLPcGWSGDkamKWE2RtG1Ze9lLEXYrpr6IBviNcR6VaKF4L8ICE-auAfZCZpv3J2Gd1ZoSH1FLJI2wQ9QIp7oMHovA__")}
              style={{ cursor: 'pointer' }}
            >
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
                <div className='col-md-12'>
                <span className='visual__figure'>What To-Do </span>
                <div className="col-md-12 shadow-sm border rounded">
         
            <div 
              className=" video-thumbnail-container position-relative" 
              onClick={() => handleOpenVideoModal("https://media-hosting.imagekit.io/e91eb030aabe4dd6/Notess.mp4?Expires=1838892129&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Dv~SDnrWQ3kbJano96iNo1z-KZneKuKxGlOpoZvGFkD0SwA9xjX4OaUC3WeeGoRCNXtv1JGx~Wvtd5lNQV9bmNz6rHuEPiyn6TuXjI0kiekhOBAynwMqN7kankEad2D4zAAz8HYB4fb8c4~sGLfhwPq8gYWx2xIzjg4sLpviqOEA0GwuhxRrWgym1QNeQB48UAo3bHeTqYn-ScyQ00nXGq3Mgl71b9I-~Zq8-X3C93nMO1UPH9-nX1zFDvA-Npm3fB2X8KR6nk9L1g1c9HH7KOKoECcoboDndK18eOwgZGeT6vpP2W967dakfKlZiO2CM6y5dSgti6qp6O8Txztb-w__")}
              style={{ cursor: 'pointer' }}
            >
              {/* Video thumbnail image */}
              
                <img 
                  src="https://i.ibb.co/zV53pnBt/image.png" 
                  
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
          <button className="btn btn-img-color rounded-pill btn-custom mt-4 ">
            Make a new project
          </button>
          <button className="btn btn-success rounded-pill btn-custom ms-2 mt-4">
            Invite people
          </button>
          <p className="mt-3">
            Pinned &amp; recent projects below -{" "}
            <a href="#" className="text-decoration-none text-dark">
              View all in a list
            </a>{" "}
            ·{" "}
            <a href="#" className="text-decoration-none text-dark">
              View templates
            </a>
          </p>
        </div>
        
        {/* Project cards section */}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div className="card card-custom p-3 border">
                <i className="pin-icon">📌</i>
                <h5>What Works</h5>
                <p>Kickoffs, Heartbeats, and Cycles</p>
                <div className="d-flex align-items-center mt-5 avatar-group">
                  <img
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="Avatar"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                    alt="Avatar"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/men/3.jpg"
                    alt="Avatar"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/women/4.jpg"
                    alt="Avatar"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/men/5.jpg"
                    alt="Avatar"
                  />
                  <span>+11</span>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card card-custom p-3 border">
                <i className="pin-icon">📌</i>
                <h5>Resource Library</h5>
                <p>A place to share resources, guidelines and tutorials 📚</p>
                <div className="d-flex align-items-center mt-3 avatar-group">
                  <img
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="Avatar"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                    alt="Avatar"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/men/3.jpg"
                    alt="Avatar"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/women/4.jpg"
                    alt="Avatar"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/men/5.jpg"
                    alt="Avatar"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card card-custom p-3 border">
                <i className="pin-icon">📌</i>
                <h5>Team: Accounting</h5>
                <p>We know where the 💰 is at!</p>
                <div className="d-flex align-items-center mt-5 avatar-group">
                  <img
                    src="https://randomuser.me/api/portraits/men/1.jpg"
                    alt="Avatar"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/women/2.jpg"
                    alt="Avatar"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/men/3.jpg"
                    alt="Avatar"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/women/4.jpg"
                    alt="Avatar"
                  />
                  <img
                    src="https://randomuser.me/api/portraits/men/5.jpg"
                    alt="Avatar"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Recently visited section and other sections remain the same... */}
          {/* Only the video elements have been changed to use the modal */}
        </div>
      </div>

      <div className="container right-side my-5">
        <div className="row mt-5">
        <div className="col-md-6 shadow-sm border rounded">
          <span className='visual__figure'>Let's take a look </span>
            <div 
              className=" video-thumbnail-container position-relative" 
              onClick={() => handleOpenVideoModal("https://media-hosting.imagekit.io/0bac5df3e6054c01/TeamOne.mp4?Expires=1838883851&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=uSEOc0tsHEYn1YbleEtn2-iSYSyGAsY2OGdPHbOyOljWPs2DvHLUqnjzPxdDzFDtx3GGwWnC~yMJZdGbISRe921DjVBbMlHgTUN0b6066vqaxNH9XODn6CUBCN4EM4sIZJczeHgYrcGmvktQ94m8NlWY3B6iIcG9rJAx9-T8AyZm-zyXlDoamatk~N8qf7f1TNxlQb1T6JyAi8vDrRLm7ZFNh-4v3vqXMc1TWG1oN~Cyg1-ElyHap8DXclC7WbisHdU7tRtpseFQdtKbqCNzXI14DiuPd44ShnzNICo~J7GSmi9lSCNnkqFrNH1SbE7GAHn2AuT4vxtg3k03JTRyuA__")}
              style={{ cursor: 'pointer' }}
            >
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
          <div className="col-md-6">
            <h2 className="mb-4 fw-bold">Let's take a look.</h2>
            <p className="highlight">
              The home screen is your daily go-to, It gives you the information you
              need each day to do the work you need to do.
            </p>
            <p className="highlight">
              Most CRM, CPQ, Project management and support desk software's are
              either overkill, bombard you with functionality you don't use, or
              straight up miss vital functionality, causing problems with adoption
              and bringing layers of complexity to business operations.
            </p>
            <p>
              It can be tough for small to medium size businesses to build their
              internal processes, and then find a number of software solutions that
              will fit their requirements, be scalable, and support them from seed
              level all the way through to enterprise and beyond.
            </p>
            <p className="highlight">
              Luckily, there's TeamOne Ops. Our business management software hits
              the spot between enterprise-level functionality, ease of use and
              sensible honest pricing.We are here to help businesses grow, and our
              software is designed to scale, as our customers grow… We grow and
              behind all of this growth, is TeamOne Ops.
            </p>
          </div>
        </div>
      </div>

      {/* Include other components */}
      <HomeMain />
      <SalesMain />
      <ProjectMain />
      {/* <DispatchMain /> */}
      <SupportMain />
      <InventoryMAin />
      <Finance />
      <SupportInboxMain />
      <MainLast />
    </>
  );
};

export default Home;


