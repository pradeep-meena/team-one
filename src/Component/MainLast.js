import React, { useRef, useState } from 'react'

const MainLast = () => {
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
   
    // <div class="container mt-5 mb-4">
    //    {showModal && (
    //     <div className="modal-backdrop" onClick={handleCloseModal}>
    //       <div 
    //         className="video-modal-content" 
    //         onClick={(e) => e.stopPropagation()}
    //       >
    //         <button className="close-modal-btn" onClick={handleCloseModal}>×</button>
    //         <div className="modal-video-container">
    //           <video
    //             ref={videoRef}
    //             className="w-100 h-100"
    //             controls
    //             autoPlay
    //             playsInline
    //           >
    //             <source src={currentVideoSrc} type="video/mp4" />
    //             Your browser does not support the video tag.
    //           </video>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    //     <div class="row">

    //     <div className="col-md-6 d-flex align-items-center">
    //         <div className="text">
    //           <h1 className="fw-bold">Files</h1>
    //           <p className="fs-5">
    //           Upload, manage, and share documents securely. Set permissions, track versions, and keep everything organized with tags and folders.
    //           </p>
    //         </div>
    //       </div>
    //     <div className='col-md-6 shadow-sm border rounded gap-2'>
                
    //             <div className="col-md-12 shadow-sm border rounded">
       
    //         <div 
    //           className=" video-thumbnail-container position-relative" 
    //           onClick={() => handleOpenVideoModal("https://media-hosting.imagekit.io/d0d27d3aff7e4b5f/Files.mp4?Expires=1838892048&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Uf0bJxRHZr7Uy4WDVRbZHH0Z0Glu5962kkMxmSm96VM8ZXFRCl6gDmHo8dhsnkKwcNpzH9emtJxNse2U~wpkD0tV~R-LVHXkK6gfVtftyXIA2s1XrGGM-sKeHZB0XneSjoHcy5wwhiqqvcJhsIfVV85aOauyVDFq1XomgGG-pc-aChuBua4PQ6J02zOH2091x9CGfk6HGhuBftJANNWGaRb-H0KL3tzyVEQmCqssktPFVysdCDyQ0AP1BSdYkbLPcGWSGDkamKWE2RtG1Ze9lLEXYrpr6IBviNcR6VaKF4L8ICE-auAfZCZpv3J2Gd1ZoSH1FLJI2wQ9QIp7oMHovA__")}
    //           style={{ cursor: 'pointer' }}
    //         >
    //           <span className='visual__figure'>Manage Files   </span>
    //           {/* Video thumbnail image */}
              
    //             <img 
    //               src="https://i.ibb.co/k21DnXgR/Screenshot-2025-04-10-144707.png" 
    //               alt="Video thumbnail" 
    //               className="w-100 h-100 rounded mt-8"
    //             />
              
              
    //           {/* Play button overlay */}
    //           <div 
    //             className="play-button-overlay position-absolute"
    //             style={{
    //               top: '50%',
    //               left: '50%',
    //               transform: 'translate(-50%, -50%)',
    //               background: 'rgba(0,0,0,0.6)',
    //               borderRadius: '50%',
    //               width: '80px',
    //               height: '80px',
    //               display: 'flex',
    //               justifyContent: 'center',
    //               alignItems: 'center'
    //             }}
    //           >
    //             <div 
    //               style={{
    //                 width: '0',
    //                 height: '0',
    //                 borderTop: '20px solid transparent',
    //                 borderBottom: '20px solid transparent',
    //                 borderLeft: '30px solid white',
    //                 marginLeft: '8px'
    //               }}
    //             />
    //           </div>
    //         </div>
    //       </div>
    //             </div>
              
    //     </div>
    // </div>

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
Files Manager
     </h1>
     <p className="text-dark">
     
     Upload, manage, and share documents securely. Set permissions, track versions, and keep everything organized with tags and folders.

     </p>
   </div>
 </div>
 <div className="row feature-cards">
   <div className="col-md-4 col-lg-4 mb-4">
     <div className="feature-card p-4 d-flex flex-column">
      
       <p style={{ fontSize: 18 }}>
       Securely store all your project files, documents, images, and more in one place. <br />
       Create shared folders, set visibility, and control access with role-based permissions. <br />
       Upload files effortlessly with modern, responsive UI. <br/>
       View, comment, and update files together—just like your favorite cloud storage tools.

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
              onClick={() => handleOpenVideoModal("https://media-hosting.imagekit.io/d0d27d3aff7e4b5f/Files.mp4?Expires=1838892048&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Uf0bJxRHZr7Uy4WDVRbZHH0Z0Glu5962kkMxmSm96VM8ZXFRCl6gDmHo8dhsnkKwcNpzH9emtJxNse2U~wpkD0tV~R-LVHXkK6gfVtftyXIA2s1XrGGM-sKeHZB0XneSjoHcy5wwhiqqvcJhsIfVV85aOauyVDFq1XomgGG-pc-aChuBua4PQ6J02zOH2091x9CGfk6HGhuBftJANNWGaRb-H0KL3tzyVEQmCqssktPFVysdCDyQ0AP1BSdYkbLPcGWSGDkamKWE2RtG1Ze9lLEXYrpr6IBviNcR6VaKF4L8ICE-auAfZCZpv3J2Gd1ZoSH1FLJI2wQ9QIp7oMHovA__")}
              style={{ cursor: 'pointer' }}
            >
              <span className='visual__figure'>Manage Files   </span>
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

export default MainLast