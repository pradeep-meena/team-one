import React from 'react'
import "./Conatct.css"
const Contact = () => {
  return (
<>
  {/* header-section end */}
  {/* Contact Us Section */}
  <div className="container">
    <div className="my-5 ">
      {/* Header Section with Logo */}
      <div
        className="row bg-light p-4 rounded"
        style={{
          backgroundImage:
            'url("https://i.postimg.cc/qMbHZLvM/image.png")'
        }}
      >
        <div className="col-8 text-white d-flex flex-column justify-content-center">
          <h1 className="display-5 fw-bold">Get in touch</h1>
          <p className="lead">
            Want to get in touch? We'd love to hear from you. Here's how you can
            reach us.
          </p>
        </div>
        <div className="col-4 d-flex align-items-center justify-content-end">
          <img
            src="https://i.ibb.co/jhMwrpC/bg-contact-us-stocksy-675-456.webp"
            alt="Logo"
            className="img-fluid"
          />
        </div>
      </div>
      {/* Contact Options Section */}
      <div className="row mt-4">
        {/* Talk to Sales Card */}
        <div className="col-md-6 mb-4">
          <div className="card h-100 text-center p-4 shadow-sm">
            <h3 className="card-title fw-bold">Talk to Sales</h3>
            <p className="card-text">
              Interested in HubSpot's software? Just pick up the phone to chat
              with a member of our sales team.
            </p>
            <p className="card-text">
              <a href="#">+44 20 7324 3700</a>
            </p>
            <p className="card-text">
              <a href="#" className="text-decoration-none">
                View all global numbers
              </a>
            </p>
          </div>
        </div>
        {/* Contact Customer Support Card */}
        <div className="col-md-6 mb-4">
          <div className="card h-100 text-center p-4 shadow-sm">
            <h3 className="card-title fw-bold">Contact Customer Support</h3>
            <p className="card-text">
              Sometimes you need a little help from your friends. Or a HubSpot
              support rep. Don't worry... we're here for you.
            </p>
            <a href="#" className="btn btn-success w-50 mx-auto mt-3">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Contact Us Section End */}
    {/* map section */}
    <div className=" my-5">
      <h2 className="text-center my-4">
        Connect with one of our global offices
      </h2>
      <div className="row">
        <div className="col-md-8 mb-5">
          {/* Responsive Google Map Embed */}
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://maps.google.com/maps?width=100%&height=90%&hl=en&q=University of Oxford&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              frameBorder={0}
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              style={{width: "100%", height:"330px"}}
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-info my-3">
            <h4 className="mb-3">Global Headquarters</h4>
            <p className="mb-3">
              2 Canal Park
              <br />
              Cambridge, MA 02141
              <br />
              United States
            </p>
            <h5 className="my-2">Phone / Fax:</h5>
            <a href="#">+1 888 HUBSPOT </a> <br />
            <a href="#">(+1 888 482 7768)</a>
          </div>
          <div className="press-info mt-3">
            <h5 className="my-3">Press / Media / Blogger Information</h5>
            <a href="#" className="my-3">
              Visit our Newsroom for contact info
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* map section end */}
    {/* form section */}
    <div className=" my-5 row my-5">
      <div className="col-md-6">
        {/* Green Heading */}
        <h2 className="mb-4 text-success">Get in touch with our sales team</h2>
        <p className="lead my-2">
          Ready to revolutionize your sales process? We’d love to show you what
          Pipedrive can do – contact our sales experts and discover how
          Pipedrive can help improve your team’s performance. Simply fill out
          the form to the right, and a member of our team will contact you as
          soon as possible.
        </p>
        <ul className="list-unstyled mb-5">
          {/* Green Checkmarks */}
          <li className="mb-3">
            <span className="text-success">✓</span> Get advice from a sales
            expert who will understand your business needs
          </li>
          <li className="mb-3">
            <span className="text-success">✓</span> Understand how to best use
            Pipedrive
          </li>
          <li className="mb-3">
            <span className="text-success">✓</span> Learn more about how to
            scale your business
          </li>
        </ul>
        {/* Testimonial Section */}
        <div className="container mt-5">
          <div className="row ">
            <div
              className="col-12 contact-section-img"
              style={{ marginTop: 100 }}
            >
              <div className="d-flex flex-column flex-md-row align-items-center">
                {/* Circular Image */}
                <img
                  src="https://i.ibb.co/jhMwrpC/bg-contact-us-stocksy-675-456.webp"
                  alt="Testimonial"
                  className="rounded-circle flex-shrink-0 mb-3 mb-md-0 me-md-4"
                  width={75}
                  height={75}
                />
                <div className="flex-grow-1">
                  <h4 className="h5 font-weight-bold mb-1">--Amine W</h4>
                </div>
              </div>
              <p className="text-muted mb-0">
                Loved the demo session. It set Pipedrive apart from its
                competitors for me.
              </p>
              <div className="mt-2">
                <span className="text-muted">
                  {" "}
                  <span className="text-success fw-bold">★ </span>Trustpoilet
                </span>
                <span className="text-warning">★ ★ ★ ★ ★</span>
                <small className="text-muted">5 of 5</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="">
          <div className=" borderless">
            <h4 className="card-title mb-2">Connect Sales about Pipedrive</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <select className="form-control" id="country">
                  <option>Select from dropdown</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  {/* Add more countries as needed */}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="company">Company name</label>
                <input
                  type="text"
                  className="form-control"
                  id="company"
                  placeholder="Enter your company name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="size">Company size?</label>
                <select className="form-control" id="size">
                  <option>Select from dropdown</option>
                  <option>1-10 employees</option>
                  <option>11-50 employees</option>
                  <option>51-200 employees</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="form-group">
                <small className="form-text text-muted">
                  *We’re committed to your privacy. Pipedrive uses the
                  information you provide to us to contact you about our
                  relevant content, products, and services. You may unsubscribe
                  from these communications at any time. For more information,
                  check out our Privacy Notice.
                </small>
              </div>
              <button type="submit" className="btn btn-primary my-1 btn-block">
                Submit
              </button>
            </form>
            <small className="text-muted mt-3">
              Never share sensitive information (credit card numbers, social
              security numbers, passwords) through this form.
            </small>
            <small className="text-muted">
              This site is protected by reCAPTCHA and the Google
              <a href="#">Privacy Policy</a> and
              <a href="#">Terms of Service</a> apply.
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Contact
