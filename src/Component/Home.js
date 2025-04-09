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
          <div className="col-md-6 shadow-sm border rounded video-container" style={{marginLeft:""}}>
  {/* Background Image */}
  <img
    src="data:image/jpeg;base64,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"
    alt="Background"
    className="video-bg"
  />
  {/* Video Element */}
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
                  <div className='col-md-6'>
                    <div className="border rounded">
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
                <div className='row'>
                  <div className='col-md-6'>
                    <div className="border rounded">
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
                  <div className='col-md-6'>
                    <div className="border rounded">
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
                <div className='row'>
                  <div className='col-md-6'>
                    <div className="border rounded">
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
                  <div className='col-md-6'>
                    <div className="border rounded">
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
          </div>
        </div>
      </div>
      <div className="container right-side my-5">
        <div className="row mt-5">
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