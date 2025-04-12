import React, { useState, useRef } from 'react';
import '../NewSection.css'
const ProjectNewSection = () => {
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
            <h3 style={{ fontSize: 32 }}>PayRoll Pro</h3>
            <p style={{ fontSize: 18 }}>
              Effortlessly manage payroll processing with PayRoll Pro, your
              ultimate solution for accurate and efficient salary calculations.
              Automate the entire process, including salaries, deductions, and
              taxes, to save time and reduce errors. Designed for businesses of
              all sizes, this tool streamlines payroll operations, ensuring
              compliance with tax regulations and simplifying reporting. With
              PayRoll Pro, you can focus on growing your business while leaving
              the payroll complexities to us.
            </p>
          </div>
        </div>
        <div className="col-lg-8 mb-4">
          <div
            className="feature-card"
            style={{
              background:
                "linear-gradient(45deg, #E6B8AF 0%, #AF905B 99%, #AF905B 100%)",
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
            <img src="img/payroll-2-removebg-preview.png" alt="" />
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

export default ProjectNewSection
