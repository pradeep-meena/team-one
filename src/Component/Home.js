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
              <button className="btn btn-custom btn-img-color me-2">Get a demo</button>
              <button className="btn btn-custom btn-start">Get started free</button>
            </div>
          </div>
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
      </div>
      {/* Features Page  */}


      <div
        className="base container shadow-sm pb-4 border mt-5 rounded"
        style={{ backgroundColor: "#faf8f4" }}
      >


        <div className="container mt-5 mb-4 text-center">
          <div className="row g-4 mt-3">
            <div className="col-md-6 shadow-sm border rounded">
              <video
                autoPlay
                muted
                controls
                loop
                className="w-100 h-100 video-hover"
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="col-md-6">
              <div className='row'>
                <div className='col-md-12'>
                  <div className="col-md-12 shadow-sm border rounded">
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
                <div className='col-md-12'>
                  <div className="col-md-12 shadow-sm border rounded">
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
          <button className="btn btn-img-color rounded-pill btn-custom mt-4 ">
            Make a new project
          </button>
          <button className="btn btn-success rounded-pill btn-custom ms-2 mt-4">
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
                <video controls className="w-100 h-100 rounded shadow video-hover">
                  <source src="https://your-video-url.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="col-md-6">
                <div className='row'>
                  <div className='col-md-6'>
                    <div className="border rounded">
                      <video controls className="w-100 rounded shadow video-hover">
                        <source src="https://your-video-url.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className="border rounded">
                      <video controls className="w-100 rounded shadow video-hover">
                        <source src="https://your-video-url.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className="border rounded">
                      <video controls className="w-100 rounded shadow video-hover">
                        <source src="https://your-video-url.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className="border rounded">
                      <video controls className="w-100 rounded shadow video-hover">
                        <source src="https://your-video-url.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className="border rounded">
                      <video controls className="w-100 rounded shadow video-hover">
                        <source src="https://your-video-url.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className="border rounded">
                      <video controls className="w-100 rounded shadow video-hover">
                        <source src="https://your-video-url.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container right-side my-5">
        <div className="row mt-5">
          <div className="border rounded col-md-6">
            <video controls className="w-100 h-100 rounded shadow video-hover">
              <source src="https://your-video-url.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
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