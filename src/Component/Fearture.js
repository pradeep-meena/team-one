import React from "react";


const DashboardSummary = () => {
  return (
    <div className="container text-center py-5">
      <h2 className="fw-bold">Everything you need, all in one place.</h2>
      <p className="text-muted">Teams and organisations of all sizes use HaloPSA</p>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <img 
            src="/mnt/data/summary1.png" 
            alt="Dashboard Summary" 
            className="img-fluid rounded shadow" 
          />
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <img src="https://via.placeholder.com/150" alt="Customer Feedback" className="img-fluid rounded" />
            <p className="mt-2 fw-bold">Great Customer Feedback team!</p>
            <button className="btn btn-outline-danger">COMMENT</button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <img src="https://via.placeholder.com/150" alt="Remote Support" className="img-fluid rounded" />
            <p className="mt-2 fw-bold">Starting Remote Support</p>
            <button className="btn btn-danger">START SESSION</button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <img src="https://via.placeholder.com/150" alt="Generating Invoice" className="img-fluid rounded" />
            <p className="mt-2 fw-bold">Generating Invoice</p>
            <button className="btn btn-danger">SEND</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSummary;
