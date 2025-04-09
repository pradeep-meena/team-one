import React from 'react'

const MainLast = () => {
  return (
   
    <div class="container mt-5">
        <div class="row">
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
            <div class="col-md-6 d-flex align-items-center">
                <div class="text">
                    <h1 class="fw-bold">Communicate across all of your devices, chat, call and email under one roof across your whole business.</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainLast