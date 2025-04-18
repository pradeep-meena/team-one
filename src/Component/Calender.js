import React from 'react'
import './calender.css'
const calender = () => {
  return (
    <div>
            <div className="container">
      <div className="section-header">
      <div
    className="base container shadow-sm pb-4 pt-4 border mt-5 rounded"
    style={{ backgroundColor: "#faf8f4" }}
  >
     
     <div className="row g-4">
        {/* Calendar Section - Left Column */}
        <div className="col-md-6">
          
            <div className="text-center">
              <span className="section-header badge bg-secondary">
                YOUR SCHEDULE
              </span>
            </div>

            {/* Calendar */}
            <div className="calendar">
              <div className="calendar-header text-center">
                <button className="btn btn-light btn-sm">‹</button>
                <span>November</span>
                <button className="btn btn-light btn-sm">›</button>
              </div>

              <div className="calendar-body">
                <div className="d-flex justify-content-between text-center">
                  {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
                    (day) => (
                      <div key={day} className="fw-bold">
                        {day}
                      </div>
                    )
                  )}
                </div>

                <div className="d-flex flex-wrap justify-content-start mt-2">
                  {[29, 30, 31, ...Array(30).keys()].map((day, index) => (
                    <div  key={index}
                      className={`day ${day === 13 ? "current-day" : ""}`}>
                      {day}
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>

        {/* Events Section - Right Column */}
        <div className="col-md-6">
          <div className="events-section">
            {/* No Schedule Message */}
            <div className="datet text-center">
              <p>
                <strong>
                  <i className="fa-regular fa-calendar"></i> WED, NOV 13
                </strong>
                <span className="px-3">Nothing's on the schedule</span>
              </p>
            </div>

            {/* Event Cards */}
            <div className="events-section text-center d-flex flex-column align-items-center">
  {[
    { date: "FRI, NOV 15", title: "Marketing Team Call", time: "11:30am - 12:00pm", team: "Marketing" },
    { date: "TUE, NOV 19", title: "Weekly Sync", time: "5:00am - 5:30am", team: "Listing-to-Offers Pipeline" }
  ].map((event, index) => (
    <div key={index} className="event-card mx-auto">
      <p className="event-date">
        <strong>
          <i className="fa-regular fa-calendar"></i> {event.date}
        </strong>
      </p>
      <div className="event-info">
        <p className="fw-bold">{event.title}</p>
        <div className="avatars d-flex justify-content-center">
          <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="avatar" />
          <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="avatar" />
          <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="avatar" />
        </div>
        <p className="event-time">{event.time}</p>
        <p className="event-team">{event.team}</p>
      </div>
    </div>
  ))}
</div>
          </div>
        </div>
      </div>
  </div>
      </div>
    </div>
    </div>
  )
}

export default calender