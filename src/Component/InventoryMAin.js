import React from 'react'
import './InventoryMAin.css'
const InventoryMAin = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div className="text">
              <h1 className="fw-bold">Inventory</h1>
              <p className="fs-5">
                Manage stock levels with ease. Inventory management and
                equipment hire software to keep your warehouse on track, and
                give your staff the overview they need over your goods in/out
                process.Effortless Inventory Management—Stay in Control of Your Stock
                Manage stock levels with ease using our comprehensive inventory management and equipment hire software. Keep your warehouse running smoothly while giving your staff the real-time visibility they need over stock movement, incoming orders, and outgoing shipments.
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

export default InventoryMAin;