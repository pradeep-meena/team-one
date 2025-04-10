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
              Teams and organisations of all sizes use HaloPSA
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
          <h1 className="discover-heading">Explore the modules of HaloPSA</h1>
          <p className="discover-subheading">
            Easy setup and everything as standard. Learn more about HaloPSA.
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
                <div
                  className="section-box shadow-sm"
                  style={{ backgroundColor: "#edebe7" }}
                >
                  <div className="text-center">
                    <span className="section-header badge bg-secondary">
                      YOUR SCHEDULE
                    </span>
                  </div>
                  <div className="calendar" style={{ backgroundColor: "#fff" }}>
                    <div className="calendar-header text-center">
                      <button className="btn btn-light btn-sm">‹</button>
                      <span>November</span>
                      <button className="btn btn-light btn-sm">›</button>
                    </div>
                    <div className="calendar-body">
                      <div className="d-flex justify-content-between text-center">
                        <div className="fw-bold">SUN</div>
                        <div className="fw-bold">MON</div>
                        <div className="fw-bold">TUE</div>
                        <div className="fw-bold">WED</div>
                        <div className="fw-bold">THU</div>
                        <div className="fw-bold">FRI</div>
                        <div className="fw-bold">SAT</div>
                      </div>
                      <div className="d-flex flex-wrap justify-content-start mt-2">
                        <div className="day text-muted">29</div>
                        <div className="day text-muted">30</div>
                        <div className="day text-muted">31</div>
                        <div className="day">1</div>
                        <div className="day">2</div>
                        <div className="day">3</div>
                        <div className="day">4</div>
                        <div className="day">5</div>
                        <div className="day">6</div>
                        <div className="day">7</div>
                        <div className="day">8</div>
                        <div className="day">9</div>
                        <div className="day">10</div>
                        <div className="day">11</div>
                        <div className="day current-day">13</div>
                        <div className="day ">12</div>
                        <div className="day">14</div>
                        <div className="day">15</div>
                        <div className="day">16</div>
                        <div className="day">17</div>
                        <div className="day">18</div>
                        <div className="day">19</div>
                        <div className="day">20</div>
                        <div className="day">21</div>
                        <div className="day current-day">22</div>
                        <div className="day">23</div>
                        <div className="day">24</div>
                        <div className="day">25</div>
                        <div className="day">26</div>
                        <div className="day">27</div>
                        <div className="day">28</div>
                        <div className="day">29</div>
                        <div className="day">30</div>
                        <div className="day text-muted">1</div>
                        <div className="day text-muted">2</div>
                      </div>
                    </div>
                  </div>
                  <div className="datet d-flex justify-content-evenly">
                    <p>
                      <strong>
                        <i className="fa-regular fa-calendar" /> WED, NOV 13
                      </strong>
                      <span className="px-3">Nothing's on the schedule</span>
                    </p>
                  </div>
                  <div className="d-flex flex-column align-items-center p-3">
                    <p className="text-start">
                      <strong>
                        <i className="fa-regular fa-calendar" /> FRI, NOV 15
                      </strong>
                      <span className="fw-bold ps-3">Marketing Team Call</span>
                      <span className="avatars ms-2">
                        <img
                          src="https://randomuser.me/api/portraits/men/1.jpg"
                          alt="avatar"
                        />
                        <img
                          src="https://randomuser.me/api/portraits/women/2.jpg"
                          alt="avatar"
                        />
                        <img
                          src="https://randomuser.me/api/portraits/men/3.jpg"
                          alt="avatar"
                        />
                      </span>
                      <br />
                      <span
                        className="ms-4"
                        style={{ position: "relative", left: 110 }}
                      >
                        11:30am - 12:00pm
                      </span>
                      <br />
                      <span
                        className="ms-4"
                        style={{ position: "relative", left: 110 }}
                      >
                        Team: Marketing
                      </span>
                    </p>
                  </div>
                  <div className="d-flex flex-column align-items-center p-3">
                    <p className="text-start">
                      <strong>
                        <i className="fa-regular fa-calendar" /> TUE, NOV 19
                      </strong>
                      <span className="fw-bold ps-3">Weekly Sync</span>
                      <span className="avatars ms-2">
                        <img
                          src="https://randomuser.me/api/portraits/men/1.jpg"
                          alt="avatar"
                        />
                        <img
                          src="https://randomuser.me/api/portraits/women/2.jpg"
                          alt="avatar"
                        />
                        <img
                          src="https://randomuser.me/api/portraits/men/3.jpg"
                          alt="avatar"
                        />
                      </span>
                      <br />
                      <span
                        className="ms-4"
                        style={{ position: "relative", left: 110 }}
                      >
                        5:00am - 5:30am
                      </span>
                      <br />
                      <span
                        className="ms-4"
                        style={{ position: "relative", left: 100 }}
                      >
                        Listing-to-Offers Pipeline
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="section-box1 shadow-sm rounded"
                  style={{ backgroundColor: "#edebe7" }}
                >
                  <div className="text-center">
                    <span className="section-header badge bg-secondary my-4">
                      YOUR ASSIGNMENTS
                    </span>
                  </div>
                  <p className="mt-3 text-center">
                    Stuff due soon and recently assigned – <a href="#">see all</a>
                  </p>
                  <div className="assignment-item ps-5">
                    <input type="checkbox" className="checkbox-custom" />
                    <span className="fw-bold">
                      Windows app freezes when pressing enter
                    </span>
                    <img
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                      alt="avatar"
                      className="mx-1"
                    />
                    Daniel Y.
                    <br />
                    <span className="text-muted">
                      Luna R. · Triaged: Urgent in Team: Programmers
                    </span>
                  </div>
                  <div className="assignment-item ps-5">
                    <input type="checkbox" className="checkbox-custom" />
                    <span className="fw-bold">Sort list of links</span>
                    <img
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                      alt="avatar"
                      className="mx-1"
                    />
                    Daniel Y.{" "}
                    <img
                      src="https://randomuser.me/api/portraits/women/2.jpg"
                      alt="avatar"
                      className="mx-1"
                    />{" "}
                    Luna R.
                    <br />
                    <span className="text-muted">
                      Cloud File Types in Cycle 6: Drag to Pin Project
                    </span>
                  </div>
                  <div className="assignment-item ps-5">
                    <input type="checkbox" className="checkbox-custom" />
                    <span className="fw-bold">Update logos</span> 🔵
                    <img
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                      alt="avatar"
                      className="mx-1"
                    />
                    Daniel Y.{" "}
                    <img
                      src="https://randomuser.me/api/portraits/women/2.jpg"
                      alt="avatar"
                      className="mx-1"
                    />
                    Luna R.
                    <br />
                    <span className="text-muted">
                      Cloud File Types in Cycle 6: Drag to Pin Project
                    </span>
                  </div>
                  <div className="assignment-item ps-5">
                    <input type="checkbox" className="checkbox-custom" />
                    <span className="fw-bold">Remove URL validations</span> 🔵
                    <img
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                      alt="avatar"
                      className="mx-1"
                    />
                    Daniel Y.{" "}
                    <img
                      src="https://randomuser.me/api/portraits/women/2.jpg"
                      alt="avatar"
                      className="mx-1"
                    />{" "}
                    Luna R.
                    <br />
                    <span className="text-muted">
                      Cloud File Types in Cycle 6: Drag to Pin Project
                    </span>
                  </div>
                  <div className="assignment-item ps-5">
                    <input type="checkbox" className="checkbox-custom" />
                    <span className="fw-bold">Create library of doors</span>
                    <img
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                      alt="avatar"
                      className="mx-1"
                    />
                    Daniel Y.{" "}
                    <img
                      src="https://randomuser.me/api/portraits/women/2.jpg"
                      alt="avatar"
                      className="mx-1"
                    />{" "}
                    Luna R.
                    <br />
                    <span className="text-muted">
                      Displaying in Cycle 6: Drag to Pin Project
                    </span>
                  </div>
                  <div className="assignment-item ps-5 pb-5">
                    <input type="checkbox" className="checkbox-custom" />
                    <span className="fw-bold">
                      Remove or revise welcome video
                    </span>{" "}
                    <img
                      src="https://randomuser.me/api/portraits/women/2.jpg"
                      alt="avatar"
                      className="mx-1"
                    />
                    Daniel Y.
                    <br />
                    <span className="text-muted">
                      Onboarding Flow in Cycle 2: New Features
                    </span>
                  </div>
                </div>
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
          Easy setup and everything as standard. Learn more about HaloPSA.
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