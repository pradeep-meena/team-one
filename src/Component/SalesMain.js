import React from 'react'
import './SalesMAin.css'
const SalesMain = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div className="text">
              <h1 className="fw-bold">Sales</h1>
              <p className="fs-5">
                All your sales data—organized, analyzed, and ready for action. Our powerful CRM solution gives you the insights and tools needed to track leads, close deals faster, and build lasting customer relationships.Lead & Pip
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

export default SalesMain