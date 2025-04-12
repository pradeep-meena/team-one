import React, { useRef, useState } from 'react'
import './NewSection.css'
const NewSection1 = () => {
   const [showModal, setShowModal] = useState(false);
        const [currentVideoSrc, setCurrentVideoSrc] = useState('');
        const videoRef = useRef(null);
      
        // Function to open modal with video
        const handleOpenVideoModal = (videoSrc) => {
          setCurrentVideoSrc(videoSrc);
          setShowModal(true);
        };
      
        // Function to close modal
        const handleCloseModal = () => {
          setShowModal(false);
          setCurrentVideoSrc('');
        };
  return (
    <div>
      <>
      {showModal && (
        <div className="modal-backdrop" onClick={handleCloseModal}>
          <div 
            className="video-modal-content" 
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal-btn" onClick={handleCloseModal}>×</button>
            <div className="modal-video-container">
              <video
                ref={videoRef}
                className="w-100 h-100"
                controls
                autoPlay
                playsInline
              >
                <source src={currentVideoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
  {/* section-start */}
  <div
    className="container-fluid "
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
    
          <div 
              className=" video-thumbnail-container position-relative" 
              onClick={() => handleOpenVideoModal("https://media-hosting.imagekit.io/0f737392eecc4dc2/CRM.mp4?Expires=1838890309&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=t7xxybAtzUS3Ans4i5ufUax2EB3MMXw1J2egx7r-vRgovujmhZcBHRJruU-DSCHll657YpGZJOjkGGzGIPwHJ7yaEwy92Hc0Edw-Jy8Wn2v-VVk0qqouD~wb~lEW0Nol77xBwKotHG0sa~Ft9TJ5IgFXUJNDeBPtt-XDo0iD8BeIfrNhiWIBQB9wX0-yK7ZqAJxtwyo26PtEdYz397Rqj3MrapJWdH427iY~7vkm0dKayz2MAJ5nl7ye72407nXJnAm15E34YHDbz-1x7gkHES-FmnoEdkCqWmgyEmjFq4~2cPuf4tndnGIz0I3sdtQNYBCG6c8jOshRM40~5SyTXg__")}
              style={{ cursor: 'pointer' }}
            >
               <span className='visual__figure'>Let's go through CRM </span>
              {/* Video thumbnail image */}
              
                <img 
                  src="https://media-hosting.imagekit.io/d1551a159a36492f/screenshot_1744290890621.png?Expires=1838898893&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=o-tz~jYBf-0j2FXRKgLjDzk3yzNSU3bJ5S~rxR~o-0HkUVEqFks9eN4RKonj7HKvQmkWRuSDEQJvqY0H3vfUQUT860aUOXscIvF9AWMdST2bpelTs05L7nnmk7on1QBWL~vesZA9skrMjDqDBMmSrS07xFcuH7W~tN6lrLmTrL5ftmz7nGcv8n2bdsD80KHbfHoAQZRk5TQkYga9IQO4Etm3JEP~lhPZBcEBOsUDPr16~5RraL~mwNF6u7CYVhCm~Nv~nQvPwcJSRLjXW~1tsZYuZCPJbk5TizbAQZxOoWaC1qfBy4i~gM0xhZDvCkUcPGTSLaey2NlS0I310L-IGg__" 
                  alt="Video thumbnail" 
                  className="w-100 h-100 rounded mt-8"
                />
              
              
              {/* Play button overlay */}
              <div 
                className="play-button-overlay position-absolute"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'rgba(0,0,0,0.6)',
                  borderRadius: '50%',
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <div 
                  style={{
                    width: '0',
                    height: '0',
                    borderTop: '20px solid transparent',
                    borderBottom: '20px solid transparent',
                    borderLeft: '30px solid white',
                    marginLeft: '8px'
                  }}
                />
              </div>
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
            <h3 className="fw-bold">Customer Analytics</h3>
            <p>
              Understand your customers with detailed analytics. Gain actionable
              insights and make informed decisions.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="feature-card p-4 d-flex flex-column ">
            <h3 className="fw-bold">Contact Organizer </h3>
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
