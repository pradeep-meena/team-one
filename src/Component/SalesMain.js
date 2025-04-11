import React, { useRef, useState } from 'react'
import './SalesMAin.css'
const SalesMain = () => {
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
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div className="text">
              <h1 className="fw-bold">CRM</h1>
              <p className="fs-5">
                All your sales data—organized, analyzed, and ready for action. Our powerful CRM solution gives you the insights and tools needed to track leads, close deals faster, and build lasting customer relationships.Lead & Pip
              </p>
            </div>
          </div>
          
                   <div className="col-md-6 shadow-sm border rounded">
         
            <div 
              className=" video-thumbnail-container position-relative" 
              onClick={() => handleOpenVideoModal("https://media-hosting.imagekit.io/0f737392eecc4dc2/CRM.mp4?Expires=1838890309&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=t7xxybAtzUS3Ans4i5ufUax2EB3MMXw1J2egx7r-vRgovujmhZcBHRJruU-DSCHll657YpGZJOjkGGzGIPwHJ7yaEwy92Hc0Edw-Jy8Wn2v-VVk0qqouD~wb~lEW0Nol77xBwKotHG0sa~Ft9TJ5IgFXUJNDeBPtt-XDo0iD8BeIfrNhiWIBQB9wX0-yK7ZqAJxtwyo26PtEdYz397Rqj3MrapJWdH427iY~7vkm0dKayz2MAJ5nl7ye72407nXJnAm15E34YHDbz-1x7gkHES-FmnoEdkCqWmgyEmjFq4~2cPuf4tndnGIz0I3sdtQNYBCG6c8jOshRM40~5SyTXg__")}
              style={{ cursor: 'pointer' }}
            >
               <span className='visual__figure'>Have a Look At CRM  </span>
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
        </div>
      </div>
      <div
        className="base container shadow-sm pb-4 pt-4 border mt-5 rounded"
        style={{ backgroundColor: "#faf8f4" }}
      >

        <div className="row g-4">
          {/* Calendar Section - Left Column */}




          <div className="col-md-6 shadow-sm border rounded">
          
            <div 
              className=" video-thumbnail-container position-relative" 
              onClick={() => handleOpenVideoModal("https://media-hosting.imagekit.io/0f737392eecc4dc2/CRM.mp4?Expires=1838890309&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=t7xxybAtzUS3Ans4i5ufUax2EB3MMXw1J2egx7r-vRgovujmhZcBHRJruU-DSCHll657YpGZJOjkGGzGIPwHJ7yaEwy92Hc0Edw-Jy8Wn2v-VVk0qqouD~wb~lEW0Nol77xBwKotHG0sa~Ft9TJ5IgFXUJNDeBPtt-XDo0iD8BeIfrNhiWIBQB9wX0-yK7ZqAJxtwyo26PtEdYz397Rqj3MrapJWdH427iY~7vkm0dKayz2MAJ5nl7ye72407nXJnAm15E34YHDbz-1x7gkHES-FmnoEdkCqWmgyEmjFq4~2cPuf4tndnGIz0I3sdtQNYBCG6c8jOshRM40~5SyTXg__")}
              style={{ cursor: 'pointer' }}
            >
              <span className='visual__figure'>Analytics </span>
              {/* Video thumbnail image */}
              
                <img 
                  src="https://media-hosting.imagekit.io/e9cef1553f824624/screenshot_1744292670740.png?Expires=1838900677&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Ze9u4HKff366lKpA4smkTiY-MPdDqlkZX1~7YuUDbb785Nn6aVKBnWBKrkSwtBdQREQiPYpOtGPMX0SBEuOld7p~7G5uKBbMwFbasMQQwRO8s9D~Z2grXeiTpiVSHIUiV3RaFKWmg8dPzMz3l4jSj6elvzGcYU1CoDAeLUvf6o9e-eRWtDRwtMKkwauAhpO4z8T5A6791cjOHM5G6-Jk327f4d0XhGFqFWCVw3LuYccsN6sfdAKkPYiyLVTe7DBmZYb5jfTIv1opGuaCgBYvW9W1ZQUGQVJvYPyNbmfHnKULixH5N4nsFIq3zSVcSSu~ox1vNijjum5Xo4n8XBbduw__" 
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




          {/* Events Section - Right Column */}

          <div className="col-md-6 shadow-sm border rounded">
         
            <div 
              className=" video-thumbnail-container position-relative" 
              onClick={() => handleOpenVideoModal("https://media-hosting.imagekit.io/0f737392eecc4dc2/CRM.mp4?Expires=1838890309&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=t7xxybAtzUS3Ans4i5ufUax2EB3MMXw1J2egx7r-vRgovujmhZcBHRJruU-DSCHll657YpGZJOjkGGzGIPwHJ7yaEwy92Hc0Edw-Jy8Wn2v-VVk0qqouD~wb~lEW0Nol77xBwKotHG0sa~Ft9TJ5IgFXUJNDeBPtt-XDo0iD8BeIfrNhiWIBQB9wX0-yK7ZqAJxtwyo26PtEdYz397Rqj3MrapJWdH427iY~7vkm0dKayz2MAJ5nl7ye72407nXJnAm15E34YHDbz-1x7gkHES-FmnoEdkCqWmgyEmjFq4~2cPuf4tndnGIz0I3sdtQNYBCG6c8jOshRM40~5SyTXg__")}
              style={{ cursor: 'pointer' }}
            >
               <span className='visual__figure'>StreamLine Your Sales  </span>
              {/* Video thumbnail image */}
              
                <img 
                  src="https://media-hosting.imagekit.io/008802e5eb434fb6/screenshot_1744292842042.png?Expires=1838900850&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=afS3iRyBh3ZrMEOHbrfPHPI3FryPCdUp9ayG~8zjB~iZWvBCzhOGjPancPQXyI7nFW7pb~0RMxdrH0EZHB7q6gVBiIt7MIZCWQnzM42XvnSEBpFBvS1MDAYr4Mdh6NSvxYLN2ypj1vqf3ob86~aAsbY312JHLbeCXflZluKnhdTO2ZOx7jN6rOO1UU2N5V9tfEJHaA5OIUteYtzSeyFsK5vleSrliR-V5llxhjzpeRl7iiPGBH~hGM5uOIpQv2f622EoIe~4Rq8oe5JoFOSzjWN5BxekoBor4iuKN6uvzMzWUAaaA60G0-IjhcufOfImiboM3X-bw7M06Q01T3gBiQ__" 
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
        </div>

      </div>
    </>
  )
}

export default SalesMain