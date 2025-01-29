import React from 'react'

function DashboardSummary() {
  return (
    <div>
      <div className='container'>
      <nav className="navbar navbar-expand-lg bg-light p-3">
      <div className="container-fluid d-flex justify-content-between">
        <div className="open-ticket-section">
          <select className="form-select">
            <option>Open Tickets</option>
          </select>
        </div>
        <div className="d-flex align-items-center gap-3">
          <p className="mb-0">1-5 of 5</p>
          <button className="btn btn-light"><i className="fa-light fa-less-than"></i></button>
          <button className="btn btn-light"><i className="fa-light fa-greater-than"></i></button>
          <button className="btn btn-light"><i className="fa-light fa-arrows-rotate"></i></button>
          <button className="btn btn-primary">New</button>
          <button className="btn btn-light">...</button>
        </div>
      </div>
    </nav>


    <div className="d-flex flex-column bg-light p-3 vh-100" style={{ width: "250px" }}>
      <h5 className="fw-bold">Tickets By Team</h5>
      <span className="text-muted">Open Tickets</span>
      <hr />
      
      <div>
        <h6 className="fw-bold">1st Line Support</h6>
        <div className="py-1">Unassigned</div>
        <div className="py-1">James Brown</div>
        <div className="py-1">Mary Johnson</div>
        <div className="py-1">Tim Barton-Wines</div>
      </div>
      
      <div className="mt-3">
        <h6 className="fw-bold">2nd Line Support</h6>
        <div className="py-1">Unassigned</div>
        <div className="py-1">Patricia Jones</div>
      </div>
    </div>
      </div>

    </div>
  )
}

export default DashboardSummary
