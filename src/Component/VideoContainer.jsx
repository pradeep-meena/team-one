import React from 'react'

const VideoContainer = ({ thumbnail ,span_title ,url}) => {
  return (
    <div>
                 <div className="col-md-6 shadow-sm border rounded">
          <span className='visual__figure'>{span_title}  </span>
            <div 
              className=" video-thumbnail-container position-relative" 
              onClick={() => handleOpenVideoModal({url})}
              style={{ cursor: 'pointer' }}
            >
              {/* Video thumbnail image */}
              
                <img 
                  src={`${thumbnail}`}
                  alt="Video thumbnail" 
                  className="w-100  rounded mt-8"
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
  )
}

export default VideoContainer