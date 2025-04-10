import React from "react";

const BusinessBanner = () => {
  return (
    <div className="container text-center py-5">
      <h2 className="fw-bold">Everything you need, all in one place.</h2>
      <p className="text-muted">Teams and organisations of all sizes use TeamOne</p>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <img 
            src="https://via.placeholder.com/900x500" 
            alt="Everything you need" 
            className="img-fluid rounded shadow" 
          />
        </div>
      </div>
      <div className="d-flex justify-content-center gap-3 mt-4">
        <button className="btn btn-outline-danger px-4" style={{borderRadius:'50px'}}>Start Trial &gt;</button>
        <button className="btn btn-danger px-4" style={{borderRadius:'50px'}}>Book Demo</button>
      </div>
    </div>
  );
};

export default BusinessBanner;