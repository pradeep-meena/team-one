// import React from 'react'

// const ContactSupport = () => {
//   return (
//     <div>
//           <div className="container">
//     <header>
//       <h1>Get Support</h1>
//       <p className="subtitle">
//         Our team is ready to help you with any questions or issues
//       </p>
//     </header>
//     <form id="supportForm">
//       <div className="form-group">
//         <label htmlFor="name">
//           Full Name <span className="required">*</span>
//         </label>
//         <input type="text" id="name" name="name" required="" />
//       </div>
//       <div className="form-group">
//         <label htmlFor="email">
//           Email Address <span className="required">*</span>
//         </label>
//         <input type="email" id="email" name="email" required="" />
//       </div>
//       <div className="form-group">
//         <label htmlFor="company">Company Name</label>
//         <input type="text" id="company" name="company" />
//       </div>
//       <div className="form-group">
//         <label htmlFor="subject">
//           Subject <span className="required">*</span>
//         </label>
//         <select id="subject" name="subject" required="">
//           <option value="" disabled="" selected="">
//             Please select a subject
//           </option>
//           <option value="technical-issue">Technical Issue</option>
//           <option value="billing">Billing Question</option>
//           <option value="account">Account Management</option>
//           <option value="feature-request">Feature Request</option>
//           <option value="other">Other</option>
//         </select>
//       </div>
//       <div className="form-group">
//         <label htmlFor="urgency">Urgency Level</label>
//         <select id="urgency" name="urgency">
//           <option value="low">Low - General Question</option>
//           <option value="medium">Medium - Needs Attention</option>
//           <option value="high">High - Affecting My Work</option>
//           <option value="critical">Critical - System Down</option>
//         </select>
//       </div>
//       <div className="form-group">
//         <label htmlFor="message">
//           Message <span className="required">*</span>
//         </label>
//         <textarea
//           id="message"
//           name="message"
//           placeholder="Please describe your issue in detail..."
//           required=""
//           defaultValue={""}
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="attachments">
//           Attachments (screenshots, logs, etc.)
//         </label>
//         <input type="file" id="attachments" name="attachments" multiple="" />
//       </div>
//       <button type="submit">Submit Support Request</button>
//     </form>
//     <div className="alternative-contacts">
//       <div className="contact-method">
//         <div className="contact-icon">📞</div>
//         <h3>Phone Support</h3>
//         <p>For urgent issues</p>
//         <p>+1 (888) 555-0123</p>
//         <p>Mon-Fri: 9am-6pm EST</p>
//       </div>
//       <div className="contact-method">
//         <div className="contact-icon">💬</div>
//         <h3>Live Chat</h3>
//         <p>Quick responses to simple questions</p>
//         <p>Available in your dashboard</p>
//         <p>24/7 Support</p>
//       </div>
//       <div className="contact-method">
//         <div className="contact-icon">📚</div>
//         <h3>Knowledge Base</h3>
//         <p>Find answers to common questions</p>
//         <p>Tutorials and guides available</p>
//         <p>help.yoursaas.com</p>
//       </div>
//     </div>
//   </div>
//     </div>
//   )
// }

// export default ContactSupport


import React from 'react';

const ContactSupport = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting support. We will get back to you as soon as possible!');
    e.target.reset();
  };

  return (
    <div className="container my-5">
      <div className="bg-white p-4 p-md-5 shadow rounded">
        <header className="text-center mb-4">
          <h1 className="text-primary">Get Support</h1>
          <p className="text-muted">Our team is ready to help you with any questions or issues</p>
        </header>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control" id="name" name="name" required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address <span className="text-danger">*</span>
            </label>
            <input type="email" className="form-control" id="email" name="email" required />
          </div>

          <div className="mb-3">
            <label htmlFor="company" className="form-label">Company Name</label>
            <input type="text" className="form-control" id="company" name="company" />
          </div>

          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Subject <span className="text-danger">*</span>
            </label>
            <select className="form-select" id="subject" name="subject" required>
              <option value="">Please select a subject</option>
              <option value="technical-issue">Technical Issue</option>
              <option value="billing">Billing Question</option>
              <option value="account">Account Management</option>
              <option value="feature-request">Feature Request</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="urgency" className="form-label">Urgency Level</label>
            <select className="form-select" id="urgency" name="urgency">
              <option value="low">Low - General Question</option>
              <option value="medium">Medium - Needs Attention</option>
              <option value="high">High - Affecting My Work</option>
              <option value="critical">Critical - System Down</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message <span className="text-danger">*</span>
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              placeholder="Please describe your issue in detail..."
              rows="5"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label htmlFor="attachments" className="form-label">
              Attachments (screenshots, logs, etc.)
            </label>
            <input type="file" className="form-control" id="attachments" name="attachments" multiple />
          </div>

          <button type="submit" className="btn btn-primary w-100">Submit Support Request</button>
        </form>
{/* 
        <div className="row text-center mt-5 pt-4 border-top">
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="fs-3">📞</div>
            <h5 className="text-primary">Phone Support</h5>
            <p className="text-muted mb-1">For urgent issues</p>
            <p className="mb-1">+1 (888) 555-0123</p>
            <p className="text-muted">Mon-Fri: 9am-6pm EST</p>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="fs-3">💬</div>
            <h5 className="text-primary">Live Chat</h5>
            <p className="text-muted mb-1">Quick responses to simple questions</p>
            <p className="mb-1">Available in your dashboard</p>
            <p className="text-muted">24/7 Support</p>
          </div>
          <div className="col-md-4">
            <div className="fs-3">📚</div>
            <h5 className="text-primary">Knowledge Base</h5>
            <p className="text-muted mb-1">Find answers to common questions</p>
            <p className="mb-1">Tutorials and guides available</p>
            <p className="text-muted">help.yoursaas.com</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ContactSupport;
