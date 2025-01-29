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
            Keep on top of your projects, and manage resources at scale. <br />
            Project managers dream.
          </p>
        </div>
      </div>
      <div className="col-md-6 shadow-sm border rounded">
        <img
          src="https://i.ibb.co/j4K4G89/Artboard-2-1536x1151.webp"
          alt="Artboard-2-1536x1151"
          className="w-100"
        />
      </div>
    </div>
  </div>
  <div
    className="base container shadow-sm pb-4 border mt-5 rounded"
    style={{ backgroundColor: "#faf8f4" }}
  >
    <div className="container">
      <div className="section-header">
        <div
          className="section-box mx-5 border rounded mt-5"
          style={{ backgroundColor: "#edebe7" }}
        >
          <div className="row g-4 mt-3">
            <div className="col-md-12">
              <div className="section-box">
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
                      <div className="day">12</div>
                      <div className="day current-day">13</div>
                      <div className="day">14</div>
                      <div className="day">15</div>
                      <div className="day">16</div>
                      <div className="day">17</div>
                      <div className="day">18</div>
                      <div className="day">19</div>
                      <div className="day">20</div>
                      <div className="day">21</div>
                      <div className="day">22</div>
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
                  <div className="d-flex">
                    <p className="text-start">
                      <strong>
                        <i className="fa-regular fa-calendar" /> FRI, NOV 15
                      </strong>
                    </p>
                    <div>
                      <p className="fw-bold ps-4 d-flex">
                        Marketing Team Call
                        <img
                          src="https://randomuser.me/api/portraits/men/1.jpg"
                          alt="avatar"
                          className="ms-2"
                        />
                        <img
                          src="https://randomuser.me/api/portraits/women/2.jpg"
                          alt="avatar"
                        />
                        <img
                          src="https://randomuser.me/api/portraits/men/3.jpg"
                          alt="avatar"
                        />
                      </p>
                      <p className="ms-4" style={{ lineHeight: 0 }}>
                        11:30am - 12:00pm
                      </p>
                      <p className="ms-4">Team: Marketing</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column align-items-center p-3">
                  <div className="d-flex">
                    <p className="text-start">
                      <strong>
                        <i className="fa-regular fa-calendar" /> TUE, NOV 19
                      </strong>
                    </p>
                    <div>
                      <p className="fw-bold ps-4 d-flex">
                        Weekly Sync
                        <img
                          src="https://randomuser.me/api/portraits/men/1.jpg"
                          alt="avatar"
                          className="ms-2"
                        />
                        <img
                          src="https://randomuser.me/api/portraits/women/2.jpg"
                          alt="avatar"
                        />
                        <img
                          src="https://randomuser.me/api/portraits/men/3.jpg"
                          alt="avatar"
                        />
                      </p>
                      <p className="ms-4" style={{ lineHeight: 0 }}>
                        5:00am - 5:30am
                      </p>
                      <p className="ms-4">Listing-to-Offers Pipeline</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
  )
}

export default ProjectMain