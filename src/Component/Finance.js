import React from 'react'
import './Home.css'
const Finance = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div className="text">
              <h1 className="fw-bold">Finance</h1>
              <p className="fs-5">
                Your business finance, Analysed, Sorted and housed under one roof.
                Quoting, invoicing, payments. All the tools you need to pay, and get
                paid.Take full control of your business finances with an all-in-one solution designed to streamline your cash flow. From quoting and invoicing to payments and expense tracking, we provide all the tools you need to pay and get paid—quickly, securely, and effortlessly.
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

export default Finance