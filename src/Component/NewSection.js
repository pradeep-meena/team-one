import React from 'react'
import './NewSection.css'
const NewSection = () => {
  return (
    <div>
        {/* section-start */}
  <div className="container-fluid py-5" style={{ backgroundColor: "#fdf4ee" }}>
    <div className="container">
      <div className="row text-center">
        <div className="col-lg-8 offset-lg-2">
          <button
            className="btn btn-gold py-2 rounded-5 mb-2"
            style={{ borderRadius: 12 }}>
            Time and attendance system
          </button>
          <h1 className="fw-bold">
            An easy way to track time and make payroll
          </h1>
          <p className="text-dark">
            From clock-ins to time off, with detailed approval workflows,
            talenttwitch helps you handle attendance, leave, and payroll
            reporting in one place.
          </p>
        </div>
      </div>
      <div className="row feature-cards">
        <div className="col-md-4 col-lg-4 mb-4">
          <div className="feature-card p-4 d-flex flex-column">
            <h3 style={{ fontSize: 32 }}>PayRoll Pro</h3>
            <p style={{ fontSize: 18 }}>
              Effortlessly manage payroll processing with PayRoll Pro, your
              ultimate solution for accurate and efficient salary calculations.
              Automate the entire process, including salaries, deductions, and
              taxes, to save time and reduce errors. Designed for businesses of
              all sizes, this tool streamlines payroll operations, ensuring
              compliance with tax regulations and simplifying reporting. With
              PayRoll Pro, you can focus on growing your business while leaving
              the payroll complexities to us.
            </p>
          </div>
        </div>
        <div className="col-lg-8 mb-4">
          <div
            className="feature-card"
            style={{
              background:
                "linear-gradient(45deg, #E6B8AF 0%, #AF905B 99%, #AF905B 100%)",
              height: 400
            }}
          >
            <img src="img/payroll.jpeg" style={{ height: "100%" }} alt="" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-lg-4 mb-4">
          <div className="feature-card p-4 d-flex flex-column">
            <h3 style={{ fontSize: 32}}>
              One-Click Payslip Generator
            </h3>
            <p style={{ fontSize: 18}}>
              Speed up payroll operations with the One-Click Payslip Generator.
              Generate detailed, professional payslips instantly, complete with
              all necessary salary components. This tool is perfect for
              businesses that value efficiency and accuracy, ensuring employees
              receive their payslips on time without errors..
            </p>
          </div>
        </div>
        <div className="col-md-4 col-lg-4 mb-4">
          <div
            className="feature-card"
            style={{
              background:
                "linear-gradient(45deg, #E6B8AF 0%, #AF905B 99%, #AF905B 100%)"
            }}
          >
            <img src="img/payroll-2-removebg-preview.png" alt="" />
          </div>
        </div>
        <div className="col-md-4 col-lg-4 mb-4">
          <div className="feature-card p-4 d-flex flex-column">
            <h3 style={{ fontSize: 32 }}>
              Leave and Benefits Manager
            </h3>
            <p style={{ fontSize: 18 }}>
              Track leave balances and employee benefits with ease. Whether it’s
              vacation days, sick leave, or other time-off policies, manage all
              aspects of employee leave in a centralized system. The Leave and
              Benefits Manager allows HR teams to streamline processes, ensuring
              accurate records and timely approvals. Employees can view and
              request their leave effortlessly, while HR can monitor balances
              and track usage in real-time.
            </p>
          </div>
        </div>
      </div>
     
    </div>
  </div>
  {/* section-end */}
    </div>
  )
}

export default NewSection
