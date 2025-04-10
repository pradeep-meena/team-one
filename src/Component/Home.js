// import React, {useState,useRef} from 'react'
// import './Home.css';
// import HomeMain from './HomeMain';
// import SalesMain from './SalesMain';
// import ProjectMain from './ProjectMain';
// import DispatchMain from './DispatchMain';
// import SupportMain from './SupportMain';
// import InventoryMAin from './InventoryMAin';
// import Finance from './Finance';
// import SupportInboxMain from './SupportInboxMain';
// import MainLast from './MainLast';
// import ReactPlayer from 'react-player';
// // import VideoCard from './VideoCard';
// import YouTubeVideoPlayer from './YoutubeVideoPlayer';
// const Home = () => {
//   // const [playVideo, setPlayVideo] = useState(false);

//   // const handlePlay = () => {
//   //   setPlayVideo(true);
//   // };
//   return (
//     <>
//       <div className="container mt-5">
//         <div className="row">
//           <div className="col-md-6">
//             <h1 className="fw-bold">TeamOne Ops</h1>
//             <p className="fs-5">
//               Software that’s powerful, Intuitive and scales well with your
//               business.
//               <br />
//               Sales. Projects. Field Service. Support. Finance. HR. Files.
//               Operations.
//             </p>
//             <h3 className="fw-bold mt-4">The All In One Business Management OS</h3>
//             <p>
//               TeamOne OS brings together the most vital enterprise tools into one{" "}
//               <br />
//               operating system allowing businesses to stay efficient, stay
//               productive, and <br />
//               stay on target.
//             </p>
//             <p>
//               Get a demo of our software, or get started with free forever tools.
//             </p>
//             <div className="mt-4">
//               <button className="btn btn-custom btn-img-color me-2">Get a demo</button>
//               <button className="btn btn-custom btn-start">Get started free</button>
//             </div>
//           </div>
//           <div className="col-md-6 shadow-sm border rounded">
//             <video
//               autoPlay
//               muted
//               controls
//               loop
//               className="w-100 "
//             >
//               <source src="https://media-hosting.imagekit.io/c2f660d48c974645/PRoject.mp4?Expires=1838812340&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vz3DtuQjK8-pPYxAZ-A4cueAshegmpd~YNCsRbD7U2QCVwOm55ag2zHMcanY13mq9gEUSOjobD88fWQ4fIcuWX8HGcbFoNMufoTV57wJMhVTeJVJ4v9n~0UwJMt7PIaHDaxqkZ1twCv4S6wFu1PNurbTwmY2pFrI-LUuDr0a8wfICC8kk62HY7eK42AAopUnoUNzmbsuugKo-BL2klHQdEKNvB7N6LY5vxIZMXWvQRgue3g-pm7iFVf-dYWv6oNUHuwknSLRBpHenst0dEkwRx0eLAoamZk6cRg0F~ogzuwye8Ya1BlI~XldsUxf1A41EMdudTxFWPcBTczgHdhWpQ__" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>

//         </div>
//       </div>
//       {/* Features Page  */}


//       <div
//         className="base container shadow-sm pb-4 border mt-5 rounded"
//         style={{ backgroundColor: "#faf8f4" }}
//       >


//         <div className="container mt-5 mb-4 text-center">
//           <div className="row g-4 mt-3">
//             <div className="col-md-6 shadow-sm border rounded">
//               {/* <video
//                 autoPlay
//                 muted
//                 controls
//                 loop
//                 className="w-100 h-100 "
//               >
//                 <source src="https://www.youtube.com/embed/EdOjCdbPG2c?autoplay=1&mute=1" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video> */}
//               <YouTubeVideoPlayer  />

//             </div>
//             <div className="col-md-6">
//               <div className='row'>
//                 <div className='col-md-12'>
//                   <div className="col-md-12 shadow-sm border rounded">
//                     <video
//                       autoPlay
//                       muted
//                       controls
//                       loop
//                       className="w-100 video-hover"
//                     >
//                       <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
//                       Your browser does not support the video tag.
//                     </video>
//                   </div>
//                 </div>
//                 <div className='col-md-12'>
//                   <div className="col-md-12 shadow-sm border rounded">
//                     <video
//                       autoPlay
//                       muted
//                      controls
//                       loop
//                       className="w-100 video-hover"
//                     >
//                       <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
//                       Your browser does not support the video tag.
//                     </video>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <button className="btn btn-img-color rounded-pill btn-custom mt-4 ">
//             Make a new project
//           </button>
//           <button className="btn btn-success rounded-pill btn-custom ms-2 mt-4">
//             Invite people
//           </button>
//           <p className="mt-3">
//             Pinned &amp; recent projects below -{" "}
//             <a href="#" className="text-decoration-none text-dark">
//               View all in a list
//             </a>{" "}
//             ·{" "}
//             <a href="#" className="text-decoration-none text-dark">
//               View templates
//             </a>
//           </p>
//         </div>
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-md-4 mb-4">
//               <div className="card card-custom p-3 border">
//                 <i className="pin-icon">📌</i>
//                 <h5>What Works</h5>
//                 <p>Kickoffs, Heartbeats, and Cycles</p>
//                 <div className="d-flex align-items-center mt-5 avatar-group">
//                   <img
//                     src="https://randomuser.me/api/portraits/men/1.jpg"
//                     alt="Avatar"
//                   />
//                   <img
//                     src="https://randomuser.me/api/portraits/women/2.jpg"
//                     alt="Avatar"
//                   />
//                   <img
//                     src="https://randomuser.me/api/portraits/men/3.jpg"
//                     alt="Avatar"
//                   />
//                   <img
//                     src="https://randomuser.me/api/portraits/women/4.jpg"
//                     alt="Avatar"
//                   />
//                   <img
//                     src="https://randomuser.me/api/portraits/men/5.jpg"
//                     alt="Avatar"
//                   />
//                   <span>+11</span>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4 mb-4">
//               <div className="card card-custom p-3 border">
//                 <i className="pin-icon">📌</i>
//                 <h5>Resource Library</h5>
//                 <p>A place to share resources, guidelines and tutorials 📚</p>
//                 <div className="d-flex align-items-center mt-3 avatar-group">
//                   <img
//                     src="https://randomuser.me/api/portraits/men/1.jpg"
//                     alt="Avatar"
//                   />
//                   <img
//                     src="https://randomuser.me/api/portraits/women/2.jpg"
//                     alt="Avatar"
//                   />
//                   <img
//                     src="https://randomuser.me/api/portraits/men/3.jpg"
//                     alt="Avatar"
//                   />
//                   <img
//                     src="https://randomuser.me/api/portraits/women/4.jpg"
//                     alt="Avatar"
//                   />
//                   <img
//                     src="https://randomuser.me/api/portraits/men/5.jpg"
//                     alt="Avatar"
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4 mb-4">
//               <div className="card card-custom p-3 border">
//                 <i className="pin-icon">📌</i>
//                 <h5>Team: Accounting</h5>
//                 <p>We know where the 💰 is at!</p>
//                 <div className="d-flex align-items-center mt-5 avatar-group">
//                   <img
//                     src="https://randomuser.me/api/portraits/men/1.jpg"
//                     alt="Avatar"
//                   />
//                   <img
//                     src="https://randomuser.me/api/portraits/women/2.jpg"
//                     alt="Avatar"
//                   />
//                   <img
//                     src="https://randomuser.me/api/portraits/men/3.jpg"
//                     alt="Avatar"
//                   />
//                   <img
//                     src="https://randomuser.me/api/portraits/women/4.jpg"
//                     alt="Avatar"
//                   />
//                   <img
//                     src="https://randomuser.me/api/portraits/men/5.jpg"
//                     alt="Avatar"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="section-header">
//             <div className="heading text-center">
//               <div className="badge bg-secondary">RECENTLY VISITED</div>
//             </div>
//             <div className="row justify-content-center mt-4">
//               <div className="col-md-3 mb-4">
//                 <div className="card card-custom p-3 border">
//                   <i className="pin-icon">📌</i>
//                   <h5>Cycle 1: Marketing</h5>
//                   <div className="d-flex align-items-end mt-5 avatar-group">
//                     <img
//                       src="https://randomuser.me/api/portraits/men/1.jpg"
//                       className="mt-5"
//                       alt="Avatar"
//                     />
//                     <img
//                       src="https://randomuser.me/api/portraits/women/2.jpg"
//                       className="mt-5"
//                       alt="Avatar"
//                     />
//                     <img
//                       src="https://randomuser.me/api/portraits/men/3.jpg"
//                       className="mt-5"
//                       alt="Avatar"
//                     />
//                     <img
//                       src="https://randomuser.me/api/portraits/women/4.jpg"
//                       className="mt-5"
//                       alt="Avatar"
//                     />
//                     <img
//                       src="https://randomuser.me/api/portraits/men/5.jpg"
//                       className="mt-5"
//                       alt="Avatar"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-3 mb-4">
//                 <div className="card card-custom p-3 border">
//                   <i className="pin-icon">📌</i>
//                   <h5>Cycle 2: New Features</h5>
//                   <p>6-WEEKER: Making the IBP Home more relevant and personal.</p>
//                   <div className="d-flex align-items-center mt-4 avatar-group">
//                     <img
//                       src="https://randomuser.me/api/portraits/men/1.jpg"
//                       alt="Avatar"
//                     />
//                     <img
//                       src="https://randomuser.me/api/portraits/women/2.jpg"
//                       alt="Avatar"
//                     />
//                     <img
//                       src="https://randomuser.me/api/portraits/men/3.jpg"
//                       alt="Avatar"
//                     />
//                     <img
//                       src="https://randomuser.me/api/portraits/women/4.jpg"
//                       alt="Avatar"
//                     />
//                     <img
//                       src="https://randomuser.me/api/portraits/men/5.jpg"
//                       alt="Avatar"
//                     />
//                     <span className="text-secondary">+3</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-3 mb-4">
//                 <div className="card card-custom p-3 border">
//                   <i className="pin-icon">📌</i>
//                   <span className="fw-semibold text-secondary">GH Designs</span>
//                   <h5>GH Designs: Marketing Campaign</h5>
//                   <p>We know where the 💰 is at!</p>
//                   <div className="d-flex align-items-center mt-2 avatar-group">
//                     <img
//                       src="https://randomuser.me/api/portraits/men/1.jpg"
//                       alt="Avatar"
//                     />
//                     <img
//                       src="https://randomuser.me/api/portraits/women/2.jpg"
//                       alt="Avatar"
//                     />
//                     <img
//                       src="https://randomuser.me/api/portraits/men/3.jpg"
//                       alt="Avatar"
//                     />
//                     <img
//                       src="https://randomuser.me/api/portraits/women/4.jpg"
//                       alt="Avatar"
//                     />
//                     <img
//                       src="https://randomuser.me/api/portraits/men/5.jpg"
//                       alt="Avatar"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-3 mb-4">
//                 <div className="card card-custom p-3 border">
//                   <i className="pin-icon">📌</i>
//                   <h5>Honcho Airlines: PPC Campaigns</h5>
//                   <p>
//                     Status:{" "}
//                     <span>
//                       <i className="fa-solid fa-circle text-success" />
//                     </span>{" "}
//                     / Completed: 75%
//                   </p>
//                   <div className="d-flex align-items-center mt-4 avatar-group">
//                     <img
//                       src="https://randomuser.me/api/portraits/men/1.jpg"
//                       alt="Avatar"
//                     />
//                     <img
//                       src="https://randomuser.me/api/portraits/women/2.jpg"
//                       alt="Avatar"
//                     />
//                     <img
//                       src="https://randomuser.me/api/portraits/men/3.jpg"
//                       alt="Avatar"
//                     />
//                     <img
//                       src="https://randomuser.me/api/portraits/women/4.jpg"
//                       alt="Avatar"
//                     />
//                     <img
//                       src="https://randomuser.me/api/portraits/men/5.jpg"
//                       alt="Avatar"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-3 mb-4">
//                 <div className="card card-custom p-3 border">
//                   <i className="pin-icon">📌</i>
//                   <h5>Listing-to-Offers Pipelines</h5>
//                   <p>
//                     Manage the process of listing a property for sale and securing
//                     offer...
//                   </p>
//                   <div className="d-flex align-items-center mt-4 avatar-group">
//                     <img
//                       src="https://randomuser.me/api/portraits/men/1.jpg"
//                       alt="Avatar"
//                     />
//                     <img
//                       src="https://randomuser.me/api/portraits/women/2.jpg"
//                       alt="Avatar"
//                     />
//                     <img
//                       src="https://randomuser.me/api/portraits/men/3.jpg"
//                       alt="Avatar"
//                     />
//                     <img
//                       src="https://randomuser.me/api/portraits/women/4.jpg"
//                       alt="Avatar"
//                     />
//                     <img
//                       src="https://randomuser.me/api/portraits/men/5.jpg"
//                       alt="Avatar"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-3 mb-4">
//                 <div className="card card-custom p-3 border">
//                   <i className="pin-icon">📌</i>
//                   <h5>People Ops: Leadership</h5>
//                   <p>How can we grow as Leaders?</p>
//                   <div className="d-flex align-items-center mt-5 avatar-group">
//                     <img
//                       src="https://randomuser.me/api/portraits/men/1.jpg"
//                       alt="Avatar"
//                     />
//                     <img
//                       src="https://randomuser.me/api/portraits/women/2.jpg"
//                       alt="Avatar"
//                     />
//                     <img
//                       src="https://randomuser.me/api/portraits/men/3.jpg"
//                       alt="Avatar"
//                     />
//                     <img
//                       src="https://randomuser.me/api/portraits/women/4.jpg"
//                       alt="Avatar"
//                     />
//                     <img
//                       src="https://randomuser.me/api/portraits/men/5.jpg"
//                       alt="Avatar"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-3 mb-4">
//                 <div className="card card-custom p-3 border">
//                   <i className="pin-icon">📌</i>
//                   <h5>Team: Customer Support</h5>
//                   <p>Human Friendly Timely Support</p>
//                   <div className="d-flex align-items-center mt-5 avatar-group">
//                     <img
//                       src="https://randomuser.me/api/portraits/men/1.jpg"
//                       alt="Avatar"
//                     />
//                     <img
//                       src="https://randomuser.me/api/portraits/women/2.jpg"
//                       alt="Avatar"
//                     />
//                     <img
//                       src="https://randomuser.me/api/portraits/men/3.jpg"
//                       alt="Avatar"
//                     />
//                     <img
//                       src="https://randomuser.me/api/portraits/women/4.jpg"
//                       alt="Avatar"
//                     />
//                     <img
//                       src="https://randomuser.me/api/portraits/men/5.jpg"
//                       alt="Avatar"
//                     />
//                     <span className="text-secondary">+7</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-md-3 mb-4">
//                 <div className="card card-custom p-3 border">
//                   <i className="pin-icon">📌</i>
//                   <h5>Team: Marketing</h5>
//                   <p>
//                     Where are connect about advertising, social media, and other
//                     marketing...
//                   </p>
//                   <div className="d-flex align-items-center mt-4 avatar-group">
//                     <img
//                       src="https://randomuser.me/api/portraits/men/1.jpg"
//                       alt="Avatar"
//                     />
//                     <img
//                       src="https://randomuser.me/api/portraits/women/2.jpg"
//                       alt="Avatar"
//                     />
//                     <img
//                       src="https://randomuser.me/api/portraits/men/3.jpg"
//                       alt="Avatar"
//                     />
//                     <img
//                       src="https://randomuser.me/api/portraits/women/4.jpg"
//                       alt="Avatar"
//                     />
//                     <img
//                       src="https://randomuser.me/api/portraits/men/5.jpg"
//                       alt="Avatar"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="row g-4 mt-3">
//               <div className="col-md-6">
//                 <video controls className="w-100 h-100 rounded shadow video-hover">
//                   <source src="https://your-video-url.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </div>
//               <div className="col-md-6">
//                 <div className='row'>
//                   <div className='col-md-6'>
//                     <div className="border rounded">
//                       <video controls className="w-100 rounded shadow video-hover">
//                         <source src="https://your-video-url.mp4" type="video/mp4" />
//                         Your browser does not support the video tag.
//                       </video>
//                     </div>
//                   </div>
//                   <div className='col-md-6'>
//                     <div className="border rounded">
//                       <video controls className="w-100 rounded shadow video-hover">
//                         <source src="https://your-video-url.mp4" type="video/mp4" />
//                         Your browser does not support the video tag.
//                       </video>
//                     </div>
//                   </div>
//                 </div>
//                 <div className='row'>
//                   <div className='col-md-6'>
//                     <div className="border rounded">
//                       <video controls className="w-100 rounded shadow video-hover">
//                         <source src="https://your-video-url.mp4" type="video/mp4" />
//                         Your browser does not support the video tag.
//                       </video>
//                     </div>
//                   </div>
//                   <div className='col-md-6'>
//                     <div className="border rounded">
//                       <video controls className="w-100 rounded shadow video-hover">
//                         <source src="https://your-video-url.mp4" type="video/mp4" />
//                         Your browser does not support the video tag.
//                       </video>
//                     </div>
//                   </div>
//                 </div>
//                 <div className='row'>
//                   <div className='col-md-6'>
//                     <div className="border rounded">
//                       <video controls className="w-100 rounded shadow video-hover">
//                         <source src="https://your-video-url.mp4" type="video/mp4" />
//                         Your browser does not support the video tag.
//                       </video>
//                     </div>
//                   </div>
//                   <div className='col-md-6'>
//                     <div className="border rounded">
//                       <video controls className="w-100 rounded shadow video-hover">
//                         <source src="https://your-video-url.mp4" type="video/mp4" />
//                         Your browser does not support the video tag.
//                       </video>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container right-side my-5">
//         <div className="row mt-5">
//           <div className="border rounded col-md-6">
//             <video controls className="w-100 h-100 rounded shadow video-hover">
//               <source src="https://your-video-url.mp4" type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//           <div className="col-md-6">
//             <h2 className="mb-4 fw-bold">Let’s take a look.</h2>
//             <p className="highlight">
//               The home screen is your daily go-to, It gives you the information you
//               need each day to do the work you need to do.
//             </p>
//             <p className="highlight">
//               Most CRM, CPQ, Project management and support desk software’s are
//               either overkill, bombard you with functionality you don’t use, or
//               straight up miss vital functionality, causing problems with adoption
//               and bringing layers of complexity to business operations.
//             </p>
//             <p>
//               It can be tough for small to medium size businesses to build their
//               internal processes, and then find a number of software solutions that
//               will fit their requirements, be scalable, and support them from seed
//               level all the way through to enterprise and beyond.
//             </p>
//             <p className="highlight">
//               Luckily, there’s TeamOne Ops. Our business management software hits
//               the spot between enterprise-level functionality, ease of use and
//               sensible honest pricing.We are here to help businesses grow, and our
//               software is designed to scale, as our customers grow… We grow and
//               behind all of this growth, is TeamOne Ops.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Home claendar  */}
//       <HomeMain />
//       <SalesMain />
//       <ProjectMain />
//       <DispatchMain />
//       <SupportMain />
//       <InventoryMAin />
//       <Finance />
//       <SupportInboxMain />
//       <MainLast />




//     </>
//   )
// }

// export default 

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
            <div className="mt-4">
              <button className="btn btn-custom btn-img-color me-2">Get a demo</button>
              <button className="btn btn-custom btn-start">Get started free</button>
            </div>
          </div>
          <div className="col-md-6 shadow-sm border rounded position-relative">
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
              <source src="https://media-hosting.imagekit.io/c2f660d48c974645/PRoject.mp4?Expires=1838812340&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vz3DtuQjK8-pPYxAZ-A4cueAshegmpd~YNCsRbD7U2QCVwOm55ag2zHMcanY13mq9gEUSOjobD88fWQ4fIcuWX8HGcbFoNMufoTV57wJMhVTeJVJ4v9n~0UwJMt7PIaHDaxqkZ1twCv4S6wFu1PNurbTwmY2pFrI-LUuDr0a8wfICC8kk62HY7eK42AAopUnoUNzmbsuugKo-BL2klHQdEKNvB7N6LY5vxIZMXWvQRgue3g-pm7iFVf-dYWv6oNUHuwknSLRBpHenst0dEkwRx0eLAoamZk6cRg0F~ogzuwye8Ya1BlI~XldsUxf1A41EMdudTxFWPcBTczgHdhWpQ__"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>

      {/* Features Page */}
      <div
        className="base container shadow-sm pb-4 border mt-5 rounded"
        style={{ backgroundColor: "#faf8f4" }}
      >
        <div className="container mt-5 mb-4 text-center">
          <div className="row g-4 mt-3">
            <div className="col-md-6 shadow-sm border rounded position-relative">
              {/* Replace the YouTube implementation with the same click-to-play approach */}
              {/* <div className="video-container position-relative" style={{ height: '350px' }}>
                <img 
                  src="/api/placeholder/640/360" 
                  alt="Video thumbnail" 
                  className="w-100 h-100 rounded"
                  style={{ objectFit: 'cover' }}
                />
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
                    alignItems: 'center',
                    cursor: 'pointer'
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
              </div> */}
              <div className="col-md-6 shadow-sm border rounded position-relative">
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
                  <source src="https://media-hosting.imagekit.io/5a87b2978ad7483e/WhatsApp%20Video%202025-04-09%20at%205.07.11%20PM.mp4?Expires=1838814505&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=lsWDHy5YChycU9RT-VHDdq7HMiw-dHzw4U7caNBHqQXrIwarBNtVwZuCruAFP-morkDFr6b1syPR73GaJNF3~5ui1br6zfwkn1Vb3KVNcr2rYy2HcwlCu1sC2weDoGf8F~MgOgfZDi3XWFTjIOKenOwfGNmg26txxfeaLNUlzbz~~csf6yv~LqOv8oVqDehFmktZKOZZle6n~ttP-EOyKo-mHl9iigA4NiUjwdxaYJxqkMdnIKHnuiqwN4mHcp499JpRQUt6bJAmlRD8WyCLk7NXqxo4P0H74ouWhrBgxrYdK6T2UDi~llGVf1b2ySE3ET6da1HDR-0loKJqty0Jwg__"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            <div className="col-md-6">
              <div className='row'>
                <div className='col-md-12 mb-3'>
                  <div className="col-md-12 shadow-sm border rounded position-relative" style={{ height: '170px' }}>
                    <img
                      src="/api/placeholder/640/180"
                      alt="Video thumbnail"
                      className="w-100 h-100 rounded"
                      style={{ objectFit: 'cover' }}
                    />
                    <div
                      className="play-button-overlay position-absolute"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: 'rgba(0,0,0,0.6)',
                        borderRadius: '50%',
                        width: '60px',
                        height: '60px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer'
                      }}
                    >
                      <div
                        style={{
                          width: '0',
                          height: '0',
                          borderTop: '15px solid transparent',
                          borderBottom: '15px solid transparent',
                          borderLeft: '22px solid white',
                          marginLeft: '6px'
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className="col-md-12 shadow-sm border rounded position-relative" style={{ height: '170px' }}>
                    <img
                      src="/api/placeholder/640/180"
                      alt="Video thumbnail"
                      className="w-100 h-100 rounded"
                      style={{ objectFit: 'cover' }}
                    />
                    <div
                      className="play-button-overlay position-absolute"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        background: 'rgba(0,0,0,0.6)',
                        borderRadius: '50%',
                        width: '60px',
                        height: '60px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer'
                      }}
                    >
                      <div
                        style={{
                          width: '0',
                          height: '0',
                          borderTop: '15px solid transparent',
                          borderBottom: '15px solid transparent',
                          borderLeft: '22px solid white',
                          marginLeft: '6px'
                        }}
                      />
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

        {/* Rest of the component remains the same */}
        <div className="container">
          <div className="row justify-content-center">
            {/* Project cards section - unchanged */}
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
            {/* Additional project cards would continue... */}
          </div>
        </div>
      </div>

      {/* The remaining components - unchanged */}
      <div className="container right-side my-5">
        <div className="row mt-5">
          <div className="border rounded col-md-6 position-relative" style={{ height: '350px' }}>
            <img
              src="/api/placeholder/640/360"
              alt="Video thumbnail"
              className="w-100 h-100 rounded"
              style={{ objectFit: 'cover' }}
            />
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
                alignItems: 'center',
                cursor: 'pointer'
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

      {/* Include the remaining component sections */}
      <HomeMain />
      <SalesMain />
      <ProjectMain />
      <DispatchMain />
      <SupportMain />
      <InventoryMAin />
      <Finance />
      <SupportInboxMain />
      <MainLast />
    </>
  );
};

export default Home;


