import React from 'react'
import './NewSection.css'
const NewSection1 = () => {
  return (
    <div>
      <>
  {/* section-start */}
  <div
    className="container-fluid py-5"
    style={{ backgroundColor: "#fdf4ee", color: "black" }}
  >
    <div className="container">
      <div className="row text-center">
        <div className="col-lg-8 offset-lg-2">
          <button
            className="btn btn-gold py-2 rounded-5 mb-2"
            style={{ borderRadius: 12 }}
          >
            CRM Platform
          </button>
          <h1 className="fw-bold">Customer Relationship Management (CRM)</h1>
          <p style={{ color: "black" }}>
            Effortlessly manage your customer relationships and close deals
            faster with our comprehensive CRM platform. Optimize every stage of
            your sales pipeline.
          </p>
        </div>
      </div>
      <div className="row feature-cards">
        <div className="col-lg-10 offset-lg-1 mb-4">
          <div className="p-4">
            <img src="img/telent3.jpg" className="img-fluid" alt="" />
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="feature-card p-4 d-flex flex-column">
            <h3 className="fw-bold">Lead Navigator</h3>
            <p>
              Identify, nurture, and convert leads into customers. Track
              customer journeys with ease.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="feature-card p-4 d-flex flex-column">
            <h3 className="fw-bold">Client Communication Hub</h3>
            <p>
              Maximize sales with smarter lead management. Automate follow-ups
              and close deals faster.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="feature-card p-4 d-flex flex-column">
            <h3 className="fw-bold">Sales Booster CRM</h3>
            <p>
              Use AI-powered resume screening tools to parse and evaluate
              candidate experience quickly. Access one-way video interviews to
              evaluate at scale.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="feature-card  d-flex flex-column ">
            <h3 className="fw-bold">Customer Analytics Pro</h3>
            <p>
              Understand your customers with detailed analytics. Gain actionable
              insights and make informed decisions.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="feature-card p-4 d-flex flex-column ">
            <h3 className="fw-bold">Contact Organizer Pro</h3>
            <p>
              Effortlessly organize and categorize client contacts. Maintain a
              detailed database for quick access and streamlined communication.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="feature-card p-4 d-flex flex-column">
            <h3 className="fw-bold">Deal Pipeline Tracker</h3>
            <p>
              Visualize and manage your sales pipeline effortlessly. Track deals
              at every stage and close opportunities faster..
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* section-end */}
</>

    </div>
  )
}

export default NewSection1
