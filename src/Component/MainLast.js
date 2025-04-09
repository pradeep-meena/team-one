import React from 'react'

const MainLast = () => {
  return (
   
    <div class="container mt-5">
        <div class="row">
        <div className="border rounded col-md-6">
                      <video controls className="w-100 h-100 rounded shadow video-hover">
                        <source src="https://your-video-url.mp4" type="video/mp4" />
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