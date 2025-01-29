import React from 'react'
import './Home.css';
import HomeMain from './HomeMain';
import SalesMain from './SalesMain';
import ProjectMain from './ProjectMain';
import DispatchMain from './DispatchMain';
import SupportMain from './SupportMain';
import InventoryMAin from './InventoryMAin';
import Finance from './Finance';
import SupportInboxMain from './SupportInboxMain';
import MainLast from './MainLast';
const Home = () => {
  return (
    <>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className="fw-bold">TeamOne Ops</h1>
          <p className="fs-5">
            Software that’s powerful, Intuitive and scales well with your
            business.
            <br />
            Sales. Projects. Field Service. Support. Finance. HR. Files.
            Operations.
          </p>
          <h3 className="fw-bold mt-4">The All In One Business Management OS</h3>
          <p>
            TeamOne OS brings together the most vital enterprise tools into one{" "}
            <br />
            operating system allowing businesses to stay efficient, stay
            productive, and <br />
            stay on target.
          </p>
          <p>
            Get a demo of our software, or get started with free forever tools.
          </p>
          <div className="mt-4">
            <button className="btn btn-custom btn-demo me-2">Get a demo</button>
            <button className="btn btn-custom btn-start">Get started free</button>
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
     {/* Features Page  */}
    <div
      className="base container shadow-sm pb-4 border mt-5 rounded"
      style={{ backgroundColor: "#faf8f4" }}
    >

       
      <div className="container mt-5 mb-4 text-center">
        <div className="logo mb-3 pt-4">
          <img
            src="https://i.ibb.co/7CmSk0R/Screenshot-2025-01-28-124002-removebg-preview-1.png"
            alt="Logo"
          />
        </div>
        <button className="btn btn-success rounded-pill btn-custom">
          Make a new project
        </button>
        <button className="btn btn-success rounded-pill btn-custom">
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
                      style={{ position: "relative", left: 110 }}
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
    <div className="container right-side my-5">
      <div className="row mt-5">
        <div className="col-md-6">
          <h2 className="mb-4 fw-bold">Let’s take a look.</h2>
          <p className="highlight">
            The home screen is your daily go-to, It gives you the information you
            need each day to do the work you need to do.
          </p>
          <p className="highlight">
            Most CRM, CPQ, Project management and support desk software’s are
            either overkill, bombard you with functionality you don’t use, or
            straight up miss vital functionality, causing problems with adoption
            and bringing layers of complexity to business operations.
          </p>
          <p>
            It can be tough for small to medium size businesses to build their
            internal processes, and then find a number of software solutions that
            will fit their requirements, be scalable, and support them from seed
            level all the way through to enterprise and beyond.
          </p>
          <p className="highlight">
            Luckily, there’s TeamOne Ops. Our business management software hits
            the spot between enterprise-level functionality, ease of use and
            sensible honest pricing.We are here to help businesses grow, and our
            software is designed to scale, as our customers grow… We grow and
            behind all of this growth, is TeamOne Ops.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="https://i.ibb.co/61czt71/IMG-1517.jpg"
            alt="IMG-1517"
            loading="lazy"
            width="100%"
            className="shadow mt-3"
          />
        </div>
      </div>
    </div>

    {/* Home claendar  */}
    <HomeMain />
    <SalesMain />
    <ProjectMain />
     <DispatchMain />
     <SupportMain />
     <InventoryMAin />
     <Finance />
     <SupportInboxMain />
     <MainLast />
     
    


  </>
  )
}

export default Home