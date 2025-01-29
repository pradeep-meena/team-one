import React from 'react'
import './IntegrationPage.css'
const IntegrationPage = () => {
  return (
    <>
    <div className="int-main-section">
      <div className="container">
        <div className="row align-items-center" style={{ minHeight: "90vh" }}>
          {/* Left Content */}
          <div className="col-lg-6 text-start">
            <h1 style={{ fontWeight: "bold", color: "#000" }}>
              PSA Software Integrations
            </h1>
            <p style={{ color: "#444", fontSize: 18 }}>
              Connect with the tools you already use to have all your team’s work
              in one place. Use HaloPSA Integrations to ensure you keep control of
              all of your resources.
            </p>
            <button
              className="btn btn-danger px-4 py-2"
              style={{ borderRadius: 5, fontWeight: "bold" }}
            >
              Try for free
            </button>
          </div>
          {/* Right Image */}
          <div className="col-lg-6 text-center">
            <img
              src="https://i.ibb.co/NtHmVHc/image1.png"
              alt="Integrations"
              className="img-fluid"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
    {/* Team Favorites Section */}
    <div className="fav-team mt-4">
      <div className="container text-start">
        <h2 style={{ fontWeight: "bold" }}>Team favourites</h2>
        <p style={{ color: "#666", fontSize: 18 }}>
          Our most popular integrations
        </p>
      </div>
    </div>
    {/* Integrations Section */}
    <div className="container py-2">
      <div className="row align-items-start">
        {/* Integration 1 */}
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div className="d-flex flex-column text-start ">
            <div style={{ padding: "10%", backgroundColor: "#ffffff" }}>
              <img
                src="https://i.ibb.co/j8b3M8y/image.png"
                alt="CRMADDON"
                className="img-fluid mb-3 w-100"
                style={{ objectFit: "contain" }}
              />
              <h5 className="fw-bold">CRMADDON</h5>
              <p style={{ color: "#555", fontSize: 16 }}>
                Offer your customers optimal service with short processing times
                with the flexible interface between HaloPSA and your CRM system.
              </p>
              <a
                href="#"
                className="text-danger fw-bold text-decoration-none mt-auto"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
        {/* Integration 2 */}
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div style={{ padding: "10%", backgroundColor: "#ffffff" }}>
            <div className="d-flex flex-column h-100">
              <img
                src="https://i.ibb.co/7rfjZbv/image.png"
                alt="Perfect Project"
                className="img-fluid mb-3 w-100"
                style={{ objectFit: "contain" }}
              />
              <h5 className="fw-bold">Perfect Project</h5>
              <p style={{ color: "#555", fontSize: 16 }}>
                Easily manage and monitor your projects by integrating Moovila
                Perfect Project with HaloPSA.
              </p>
              <a
                href="#"
                className="text-danger fw-bold text-decoration-none mt-auto"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
        {/* Integration 3 */}
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div style={{ padding: "10%", backgroundColor: "#ffffff" }}>
            <div className="d-flex flex-column h-100">
              <img
                src="https://i.ibb.co/brTNZSw/image.png"
                alt="xAmplify"
                className="img-fluid mb-3 w-100"
                style={{ objectFit: "contain" }}
              />
              <h5 className="fw-bold">xAmplify</h5>
              <p style={{ color: "#555", fontSize: 16 }}>
                Connect your PSA with xAmplify to synchronize contacts, leads,
                deals, and vendors. xAmplify helps automate marketing your brand.
              </p>
              <a
                href="#"
                className="text-danger fw-bold text-decoration-none mt-auto"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
        {/* Integration 4 */}
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div style={{ padding: "10%", backgroundColor: "#ffffff" }}>
            <div className="d-flex flex-column h-100">
              <img
                src="https://i.ibb.co/MgL6VP3/image.png"
                alt="TopLeft"
                className="img-fluid mb-3 w-100"
                style={{ objectFit: "contain" }}
              />
              <h5 className="fw-bold">TopLeft</h5>
              <p style={{ color: "#555", fontSize: 16 }}>
                Transform how your MSP works—align teams, finish faster, and grow
                profitably, whether you’re 10 or 200+ strong.
              </p>
              <a
                href="#"
                className="text-danger fw-bold text-decoration-none mt-auto"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Integrations Section */}
    <div className="container py-2">
      <div className="row align-items-start">
        {/* Integration 1 */}
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div className="d-flex flex-column text-start ">
            <div style={{ padding: "10%", backgroundColor: "#ffffff" }}>
              <img
                src="https://i.ibb.co/j8b3M8y/image.png"
                alt="CRMADDON"
                className="img-fluid mb-3 w-100"
                style={{ objectFit: "contain" }}
              />
              <h5 className="fw-bold">CRMADDON</h5>
              <p style={{ color: "#555", fontSize: 16 }}>
                Offer your customers optimal service with short processing times
                with the flexible interface between HaloPSA and your CRM system.
              </p>
              <a
                href="#"
                className="text-danger fw-bold text-decoration-none mt-auto"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
        {/* Integration 2 */}
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div style={{ padding: "10%", backgroundColor: "#ffffff" }}>
            <div className="d-flex flex-column h-100">
              <img
                src="https://i.ibb.co/7rfjZbv/image.png"
                alt="Perfect Project"
                className="img-fluid mb-3 w-100"
                style={{ objectFit: "contain" }}
              />
              <h5 className="fw-bold">Perfect Project</h5>
              <p style={{ color: "#555", fontSize: 16 }}>
                Easily manage and monitor your projects by integrating Moovila
                Perfect Project with HaloPSA.
              </p>
              <a
                href="#"
                className="text-danger fw-bold text-decoration-none mt-auto"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
        {/* Integration 3 */}
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div style={{ padding: "10%", backgroundColor: "#ffffff" }}>
            <div className="d-flex flex-column h-100">
              <img
                src="https://i.ibb.co/brTNZSw/image.png"
                alt="xAmplify"
                className="img-fluid mb-3 w-100"
                style={{ objectFit: "contain" }}
              />
              <h5 className="fw-bold">xAmplify</h5>
              <p style={{ color: "#555", fontSize: 16 }}>
                Connect your PSA with xAmplify to synchronize contacts, leads,
                deals, and vendors. xAmplify helps automate marketing your brand.
              </p>
              <a
                href="#"
                className="text-danger fw-bold text-decoration-none mt-auto"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
        {/* Integration 4 */}
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div style={{ padding: "10%", backgroundColor: "#ffffff" }}>
            <div className="d-flex flex-column h-100">
              <img
                src="https://i.ibb.co/MgL6VP3/image.png"
                alt="TopLeft"
                className="img-fluid mb-3 w-100"
                style={{ objectFit: "contain" }}
              />
              <h5 className="fw-bold">TopLeft</h5>
              <p style={{ color: "#555", fontSize: 16 }}>
                Transform how your MSP works—align teams, finish faster, and grow
                profitably, whether you’re 10 or 200+ strong.
              </p>
              <a
                href="#"
                className="text-danger fw-bold text-decoration-none mt-auto"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Integrations Section */}
    <div className="container py-2">
      <div className="row align-items-start">
        {/* Integration 1 */}
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div className="d-flex flex-column text-start ">
            <div style={{ padding: "10%", backgroundColor: "#ffffff" }}>
              <img
                src="https://i.ibb.co/j8b3M8y/image.png"
                alt="CRMADDON"
                className="img-fluid mb-3 w-100"
                style={{ objectFit: "contain" }}
              />
              <h5 className="fw-bold">CRMADDON</h5>
              <p style={{ color: "#555", fontSize: 16 }}>
                Offer your customers optimal service with short processing times
                with the flexible interface between HaloPSA and your CRM system.
              </p>
              <a
                href="#"
                className="text-danger fw-bold text-decoration-none mt-auto"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
        {/* Integration 2 */}
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div style={{ padding: "10%", backgroundColor: "#ffffff" }}>
            <div className="d-flex flex-column h-100">
              <img
                src="https://i.ibb.co/7rfjZbv/image.png"
                alt="Perfect Project"
                className="img-fluid mb-3 w-100"
                style={{ objectFit: "contain" }}
              />
              <h5 className="fw-bold">Perfect Project</h5>
              <p style={{ color: "#555", fontSize: 16 }}>
                Easily manage and monitor your projects by integrating Moovila
                Perfect Project with HaloPSA.
              </p>
              <a
                href="#"
                className="text-danger fw-bold text-decoration-none mt-auto"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
        {/* Integration 3 */}
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div style={{ padding: "10%", backgroundColor: "#ffffff" }}>
            <div className="d-flex flex-column h-100">
              <img
                src="https://i.ibb.co/brTNZSw/image.png"
                alt="xAmplify"
                className="img-fluid mb-3 w-100"
                style={{ objectFit: "contain" }}
              />
              <h5 className="fw-bold">xAmplify</h5>
              <p style={{ color: "#555", fontSize: 16 }}>
                Connect your PSA with xAmplify to synchronize contacts, leads,
                deals, and vendors. xAmplify helps automate marketing your brand.
              </p>
              <a
                href="#"
                className="text-danger fw-bold text-decoration-none mt-auto"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
        {/* Integration 4 */}
        <div className="col-lg-3 col-md-6 col-sm-12 mb-4">
          <div style={{ padding: "10%", backgroundColor: "#ffffff" }}>
            <div className="d-flex flex-column h-100">
              <img
                src="https://i.ibb.co/MgL6VP3/image.png"
                alt="TopLeft"
                className="img-fluid mb-3 w-100"
                style={{ objectFit: "contain" }}
              />
              <h5 className="fw-bold">TopLeft</h5>
              <p style={{ color: "#555", fontSize: 16 }}>
                Transform how your MSP works—align teams, finish faster, and grow
                profitably, whether you’re 10 or 200+ strong.
              </p>
              <a
                href="#"
                className="text-danger fw-bold text-decoration-none mt-auto"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="discover-section">
      <div className="container">
        <h1 className="discover-heading">There's more to discover</h1>
        <p className="discover-subheading">
          Easy setup and everything as standard. Learn more about HaloPSA.
        </p>
        <div className="row">
          <div className="col-md-4">
            <div className="discover-feature-box">
              <div className="discover-feature-icon">
                <i className="bi bi-ticket-perforated" />
              </div>
              <div className="discover-feature-content">
                <div className="discover-feature-title">Service desk</div>
                <small>Learn more</small>
              </div>
            </div>
            <div className="discover-feature-box">
              <div className="discover-feature-icon">
                <i className="bi bi-lightning-fill" />
              </div>
              <div className="discover-feature-content">
                <div className="discover-feature-title">Contracts</div>
                <small>Learn more</small>
              </div>
            </div>
            <div className="discover-feature-box">
              <div className="discover-feature-icon">
                <i className="bi bi-currency-dollar" />
              </div>
              <div className="discover-feature-content">
                <div className="feature-title">Billing</div>
                <small>Learn more</small>
              </div>
            </div>
            <div className="discover-feature-box">
              <div className="discover-feature-icon">
                <i className="bi bi-currency-dollar" />
              </div>
              <div className="discover-feature-content">
                <div className="discover-feature-title">Sales CRM</div>
                <small>Learn more</small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="discover-feature-box">
              <div className="discover-feature-icon">
                <i className="bi bi-boxes" />
              </div>
              <div className="discover-feature-content">
                <div className="discover-feature-title">stock management</div>
                <small>Learn more</small>
              </div>
            </div>
            <div className="discover-feature-box">
              <div className="discover-feature-icon">
                <i className="bi bi-clock" />
              </div>
              <div className="discover-feature-content">
                <div className="discover-feature-title">
                  Billable time tracking
                </div>
                <small>Learn more</small>
              </div>
            </div>
            <div className="discover-feature-box">
              <div className="discover-feature-icon">
                <i className="bi bi-kanban" />
              </div>
              <div className="discover-feature-content">
                <div className="discover-feature-title">project management</div>
                <small>Learn more</small>
              </div>
            </div>
            <div className="discover-feature-box">
              <div className="discover-feature-icon">
                <i className="bi bi-database" />
              </div>
              <div className="discover-feature-content">
                <div className="feature-title">reporting suite</div>
                <small>Learn more</small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img
              src="https://i.ibb.co/grvPyV9/image.png"
              alt="Discover more"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
      </div>
    </section>
    <div className="free-trial-section text-center d-flex flex-column justify-content-center align-items-center">
      <h1 className="fw-bold">
        Try HaloPSA free for <span className="highlight">30 days.</span>
      </h1>
      <p className="text-light mt-2">
        Immediate Access. No Credit Card Required.
      </p>
      <a href="#" className="btn free-trial-btn mt-3">
        Free trial
      </a>
    </div>
    {/* footer-section end */}
  
  </>
  )
}

export default IntegrationPage;