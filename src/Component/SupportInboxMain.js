import React from 'react'

const SupportInboxMain = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                    <div className="text">
                        <h1 className="fw-bold">Our Core apps keep your teams organised, and your operation is running smoothly. without sacrifice</h1>
                    </div>
                </div>
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
            </div>
        </div>
    )
}

export default SupportInboxMain