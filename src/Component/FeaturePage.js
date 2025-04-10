import React from 'react'

const FeaturePage = () => {
  return (
    <>
      {/* Hello world */}
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col">
            <h1 style={{ fontWeight: "bold", color: "black", fontSize: 70 }}>
              An easy new way to
            </h1>
            <h1 style={{ fontWeight: "bold", color: "black", fontSize: 70 }}>
              manage
            </h1>
          </div>
        </div>
      </div>
      <div className="container text-center mt-5">
        {/* Heading */}
        <div className="row">
          <div className="col">
            <p style={{ fontSize: 18, color: "black" }}>
              Quick setup – brilliantly configurable.
            </p>
          </div>
        </div>
        {/* Buttons */}
        <div className="row">
          <div className="col">
            <a
              href="#"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                fontSize: 16,
                color: "red",
                border: "2px solid red",
                borderRadius: 30,
                textDecoration: "none",
                fontWeight: "bold",
                marginRight: 10
              }}
            >
              Start Trial →
            </a>
            <a
              href="#"
              style={{
                display: "inline-block",
                padding: "10px 20px",
                fontSize: 16,
                color: "white",
                backgroundColor: "#26c7cd",
                border: "2px solid #26c7cd",
                borderRadius: 30,
                textDecoration: "none",
                fontWeight: "bold"
              }}
            >
              Book Demo →
            </a>
          </div>
        </div>
      </div>
      <div className="container text-center mt-5">
        {/* Heading */}
        <div className="row">
          <div className="col">
            <h2 style={{ fontWeight: "bold", color: "black" }}>
              Everything you need, all in one place.
            </h2>
            <p style={{ fontSize: 18, color: "black" }}>
              Teams and organisations of all sizes use TeamOne
            </p>
          </div>
        </div>
        {/* Image Section */}
        <div className="row justify-content-center">
          <div className="col-md-6 shadow-sm border rounded">
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
        <div className="row justify-content-center">
          <div className="col-md-10">
            <img
              src="https://halopsa.wpenginepowered.com/wp-content/uploads/2020/10/HaloPSA-Hero-V9-1536x853.jpg"
              alt="PSA Dashboard"
              style={{ width: "100%", borderRadius: 10 }}
            />
          </div>
        </div>
      </div>
      <div className="container text-center mt-5">
        {/* Heading */}
        <div className="container">
          <h1 className="discover-heading">Explore the modules of TeamOne</h1>
          <p className="discover-subheading">
            Easy setup and everything as standard. Learn more about TeamOne.
          </p>
          <div className="row">
            <div className="col-md-4">
              <div className="discover-feature-box">
                <div className="discover-feature-icon">
                  <i className="bi bi-ticket-perforated" />
                </div>
                <div className="discover-feature-content">
                  <div className="discover-feature-title">Service desk</div>
                  <small>Learn more</small>
                </div>
              </div>
              <div className="discover-feature-box">
                <div className="discover-feature-icon">
                  <i className="bi bi-lightning-fill" />
                </div>
                <div className="discover-feature-content">
                  <div className="discover-feature-title">Contracts</div>
                  <small>Learn more</small>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="discover-feature-box">
                <div className="discover-feature-icon">
                  <i className="bi bi-boxes" />
                </div>
                <div className="discover-feature-content">
                  <div className="discover-feature-title">Stock management</div>
                  <small>Learn more</small>
                </div>
              </div>
              <div className="discover-feature-box">
                <div className="discover-feature-icon">
                  <i className="bi bi-clock" />
                </div>
                <div className="discover-feature-content">
                  <div className="discover-feature-title">
                    Billable time tracking
                  </div>
                  <small>Learn more</small>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="discover-feature-box">
                <div className="discover-feature-icon">
                  <i className="bi bi-boxes" />
                </div>
                <div className="discover-feature-content">
                  <div className="discover-feature-title">stock management</div>
                  <small>Learn more</small>
                </div>
              </div>
              <div className="discover-feature-box">
                <div className="discover-feature-icon">
                  <i className="bi bi-clock" />
                </div>
                <div className="discover-feature-content">
                  <div className="discover-feature-title">
                    Billable time tracking
                  </div>
                  <small>Learn more</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="base container shadow-sm pb-4 border mt-5 rounded"
        style={{ backgroundColor: "#faf8f4" }}
      >


        <div className="container mt-5 mb-4 text-center">
          <div className="logo mb-3 pt-4">
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
          <button className="btn btn-success rounded-pill btn-custom ">
            Make a new project
          </button>
          <button className="btn btn-success rounded-pill btn-custom " style={{ marginLeft: '10px' }}>
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
        <div className="container">
          <div className="row justify-content-center">
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
            <div className="col-md-4 mb-4">
              <div className="card card-custom p-3 border">
                <i className="pin-icon">📌</i>
                <h5>Resource Library</h5>
                <p>A place to share resources, guidelines and tutorials 📚</p>
                <div className="d-flex align-items-center mt-3 avatar-group">
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
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card card-custom p-3 border">
                <i className="pin-icon">📌</i>
                <h5>Team: Accounting</h5>
                <p>We know where the 💰 is at!</p>
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
                </div>
              </div>
            </div>
          </div>
          <div className="section-header">
            <div className="heading text-center">
              <div className="badge bg-secondary">RECENTLY VISITED</div>
            </div>
            <div className="row justify-content-center mt-4">
              <div className="col-md-3 mb-4">
                <div className="card card-custom p-3 border">
                  <i className="pin-icon">📌</i>
                  <h5>Cycle 1: Marketing</h5>
                  <div className="d-flex align-items-end mt-5 avatar-group">
                    <img
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                      className="mt-5"
                      alt="Avatar"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/women/2.jpg"
                      className="mt-5"
                      alt="Avatar"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/men/3.jpg"
                      className="mt-5"
                      alt="Avatar"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/women/4.jpg"
                      className="mt-5"
                      alt="Avatar"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/men/5.jpg"
                      className="mt-5"
                      alt="Avatar"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="card card-custom p-3 border">
                  <i className="pin-icon">📌</i>
                  <h5>Cycle 2: New Features</h5>
                  <p>6-WEEKER: Making the IBP Home more relevant and personal.</p>
                  <div className="d-flex align-items-center mt-4 avatar-group">
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
                    <span className="text-secondary">+3</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="card card-custom p-3 border">
                  <i className="pin-icon">📌</i>
                  <span className="fw-semibold text-secondary">GH Designs</span>
                  <h5>GH Designs: Marketing Campaign</h5>
                  <p>We know where the 💰 is at!</p>
                  <div className="d-flex align-items-center mt-2 avatar-group">
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
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="card card-custom p-3 border">
                  <i className="pin-icon">📌</i>
                  <h5>Honcho Airlines: PPC Campaigns</h5>
                  <p>
                    Status:{" "}
                    <span>
                      <i className="fa-solid fa-circle text-success" />
                    </span>{" "}
                    / Completed: 75%
                  </p>
                  <div className="d-flex align-items-center mt-4 avatar-group">
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
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="card card-custom p-3 border">
                  <i className="pin-icon">📌</i>
                  <h5>Listing-to-Offers Pipelines</h5>
                  <p>
                    Manage the process of listing a property for sale and securing
                    offer...
                  </p>
                  <div className="d-flex align-items-center mt-4 avatar-group">
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
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="card card-custom p-3 border">
                  <i className="pin-icon">📌</i>
                  <h5>People Ops: Leadership</h5>
                  <p>How can we grow as Leaders?</p>
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
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="card card-custom p-3 border">
                  <i className="pin-icon">📌</i>
                  <h5>Team: Customer Support</h5>
                  <p>Human Friendly Timely Support</p>
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
                    <span className="text-secondary">+7</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-4">
                <div className="card card-custom p-3 border">
                  <i className="pin-icon">📌</i>
                  <h5>Team: Marketing</h5>
                  <p>
                    Where are connect about advertising, social media, and other
                    marketing...
                  </p>
                  <div className="d-flex align-items-center mt-4 avatar-group">
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
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4 mt-3">
              <div className="col-md-6">
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
              <div className="col-md-6">
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
        </div>
      </div>
      {/* cUSTOMER rELATIONsHIP aMANAGEMENT */}
      {/* There's More To Dic\scover */}
      <div className="container">
        <h1 className="discover-heading">There's more to discover</h1>
        <p className="discover-subheading">
          Easy setup and everything as standard. Learn more about TeamOne.
        </p>
        <div className="row">
          <div className="col-md-4">
            <div className="discover-feature-box">
              <div className="discover-feature-icon">
                <i className="bi bi-ticket-perforated" />
              </div>
              <div className="discover-feature-content">
                <div className="discover-feature-title">Service desk</div>
                <small>Learn more</small>
              </div>
            </div>
            <div className="discover-feature-box">
              <div className="discover-feature-icon">
                <i className="bi bi-lightning-fill" />
              </div>
              <div className="discover-feature-content">
                <div className="discover-feature-title">Contracts</div>
                <small>Learn more</small>
              </div>
            </div>
            <div className="discover-feature-box">
              <div className="discover-feature-icon">
                <i className="bi bi-currency-dollar" />
              </div>
              <div className="discover-feature-content">
                <div className="feature-title">Billing</div>
                <small>Learn more</small>
              </div>
            </div>
            <div className="discover-feature-box">
              <div className="discover-feature-icon">
                <i className="bi bi-currency-dollar" />
              </div>
              <div className="discover-feature-content">
                <div className="discover-feature-title">Sales CRM</div>
                <small>Learn more</small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="discover-feature-box">
              <div className="discover-feature-icon">
                <i className="bi bi-boxes" />
              </div>
              <div className="discover-feature-content">
                <div className="discover-feature-title">Stock management</div>
                <small>Learn more</small>
              </div>
            </div>
            <div className="discover-feature-box">
              <div className="discover-feature-icon">
                <i className="bi bi-clock" />
              </div>
              <div className="discover-feature-content">
                <div className="discover-feature-title">
                  Billable time tracking
                </div>
                <small>Learn more</small>
              </div>
            </div>
            <div className="discover-feature-box">
              <div className="discover-feature-icon">
                <i className="bi bi-kanban" />
              </div>
              <div className="discover-feature-content">
                <div className="discover-feature-title">project management</div>
                <small>Learn more</small>
              </div>
            </div>
            <div className="discover-feature-box">
              <div className="discover-feature-icon">
                <i className="bi bi-database" />
              </div>
              <div className="discover-feature-content">
                <div className="feature-title">reporting suite</div>
                <small>Learn more</small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="https://i.ibb.co/grvPyV9/image.png"
              alt="Discover more"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>


    </>

  )
}

export default FeaturePage     