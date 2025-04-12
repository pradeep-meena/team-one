import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link fw-bold" href="/features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/pricing">
                Pricing
              </a>
            </li>
           
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="resourcesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </a>
              <ul className="dropdown-menu" aria-labelledby="resourcesDropdown">
                <li>
                  <a className="dropdown-item" href="https://halopsa.com/demo-on-demand/">
                    Demo On Demand
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="https://halopsa.com/roadmap/">
                    Roadmap
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="https://halopsa.com/guides">
                    Guides
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-primary text-white ms-2" href="https://trial.halopsa.com/trial/signup">
                Start Trial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-secondary text-white ms-2" href="https://halopsa.com/halo-psa-demo/">
                Book Demo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
