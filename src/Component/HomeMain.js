import React from 'react'
import './HomeMain.css';

const HomeMain = () => {
  return (
    <>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div className="text">
              <h1 className="fw-bold">Home</h1>
              <p className="fs-5">
                Your Home Screen – Designed for Productivity
                The home screen is your central hub, helping you organize, prioritize, and stay on track throughout your day. With a clear overview of tasks, schedules, and workload, you can focus on what truly matters—getting things done efficiently.
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
          <div className="col-md-6">



            {/* Calendar */}
            <div className="border rounded col-md-12">
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

export default HomeMain;