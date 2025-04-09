import React from 'react'
import './SupportMain.css'
const SupportMain = () => {
  return (
   
    <>
  <div className="container mt-5">
    <div className="row">
      <div className="col-md-6 d-flex align-items-center">
        <div className="text">
          <h1 className="fw-bold">Support Desk</h1>
          <p className="fs-5">
          Enterprise support desk management, helping you organise, triage
                and <br /> close tickets tickets within SLA, every time.
                Enterprise Support Desk Management – Organize, Triage & Resolve with Precision
                Deliver exceptional customer service with our enterprise-grade support desk management solution. Efficiently organize, prioritize, and resolve support tickets while ensuring compliance with SLAs—every single time. Whether handling IT requests, customer inquiries, or internal support, our system keeps everything running smoothly.
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

export default SupportMain;