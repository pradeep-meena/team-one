import React from 'react'

const ProjectMain = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div className="text">
              <h1 className="fw-bold">Projects</h1>
              <p className="fs-5">
                Stay in full control of your projects with a system designed to track progress, allocate resources efficiently, and ensure timely delivery. Whether managing small tasks or large-scale operations, our intelligent project management solution helps you streamline workflows, optimize team productivity, and stay on schedule—every time.
              </p>
            </div>
          </div>
          <div className="border rounded col-md-6">
            <video controls className="w-100 h-100 rounded shadow video-hover">
              <source src="https://your-video-url.mp4" type="video/mp4" />
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
            <video controls className="w-100 h-100 rounded shadow video-hover">
              <source src="https://your-video-url.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>



          {/* Events Section - Right Column */}
          <div className="border rounded col-md-6">
            <video controls className="w-100 h-100 rounded shadow video-hover">
              <source src="https://your-video-url.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectMain