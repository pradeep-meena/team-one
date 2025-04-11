import React, { useState } from 'react'
import './Pricing.css'
const Pricing = () => {
  const [activeTab, setActiveTab] = useState('annual');


  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div>
      <section className="pricing-section">
        <div className="container">
          <h1 className="fw-bold">
            Heavy on <span className="text-dark">features</span>. Light on{""}
            <span className="text-dark">price</span>.
          </h1>
          <p className="text-muted">
            No locked-away features or upgrade fees, just all-inclusive PSA
            software.
          </p>
          <p className="text-secondary">Up to a yearly saving of 25%</p>
          <p>Unlock the full potential of your business with a powerful, all-inclusive PSA (Professional Services Automation) solution that brings enterprise-level functionality without the enterprise-level expense. Our software is designed with your business needs in mind—combining a rich array of features, intuitive design, and uncompromising affordability.</p>
          <div className="toggle-container">
            <button className={`${activeTab === 'annual' ? 'toggle-btn active' : 'toggle-btn'}  `} onClick={() => setActiveTab('annual')}>
              Annual
            </button>
            <button className={`${activeTab === 'monthly' ? 'toggle-btn active' : 'toggle-btn'}`} onClick={() => setActiveTab('monthly')}>
              Monthly
            </button>
          </div>
        </div>
      </section>
      {/* pricing-section end */}
      {/* card-section */}
      {activeTab === 'annual' &&
        (
          <div className="container py-5">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="pricing-card">
                  <h5>
                    <strong>
                      Basecamp <span className="highlight-text">FREE</span>
                    </strong>
                  </h5>
                  <p>Run one project at a time.</p>
                  <ul>
                    <li>Completely free</li>
                    <li>One project</li>
                    <li>1GB storage space</li>
                    <li>Upgrade later if you need more</li>
                  </ul>
                  <h6>
                    <strong>Free forever</strong>
                  </h6>
                  <button className="btn-green">Sign up free</button>
                </div>
              </div>
              <div className="col-md-4">
                <div className="pricing-card border: 2px solid #000;">
                  <h5>
                    <strong>
                      Basecamp <span className="highlight-text">PLUS</span>
                    </strong>
                  </h5>
                  <p>Ideal for freelancers and small teams.</p>
                  <ul>

                    <li>Pay-per-user pricing</li>
                    <li>
                      <strong>Unlimited projects</strong>
                    </li>
                    <li>500GB storage space</li>
                    <li>24/7/365 support</li>
                  </ul>
                  <div className=' align-items-center'>
                    <h6 className=' textl-lg mb-2'>
                      <strong>$15/user per month</strong>
                    </h6>
                    <button className="btn-green ">Try it free for 30 days</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="pricing-card">
                  <h5>
                    <strong>
                      Basecamp <span className="highlight-text">PRO UNLIMITED</span>
                    </strong>
                  </h5>
                  <p>Top-of-the-line, fixed pricing for businesses.</p>
                  <ul>
                    <li>
                      <strong>Extended 75-day free trial</strong>
                    </li>
                    <li>
                      <strong>Fixed price</strong>, no per-user charges
                    </li>
                    <li>Unlimited projects</li>
                    <li>5TB storage space</li>
                  </ul>
                  <h6>
                    <strong>$299/month billed annually</strong>
                  </h6>
                  <button className="btn-green">Try it free for 75 days</button>
                </div>
              </div>
            </div>
          </div>
        )
      }

      {activeTab === 'monthly' && (

        <div className="container py-5">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="pricing-card">
                <h5>
                  <strong>
                    Basecamp <span className="fw-bold fst-italic">FREE</span>
                  </strong>
                </h5>
                <p>Run one project at a time.</p>
                <ul>
                  <li>Completely free</li>
                  <li>One project</li>
                  <li>1GB storage space</li>
                  <li>Upgrade later if you need more</li>
                </ul>
                <h6>
                  <strong>Free forever</strong>
                </h6>
                <button className="btn-green">Sign up free</button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pricing-card">
                <h5>
                  <strong>
                    Basecamp <span className="highlight-text">PLUS</span>
                  </strong>
                </h5>
                <p>Ideal for freelancers and small teams.</p>
                <ul>

                  <li>Pay-per-user pricing</li>
                  <li>
                    <strong>Unlimited projects</strong>
                  </li>
                  <li>500GB storage space</li>
                  <li>24/7/365 support</li>
                </ul>
                <div className=' align-items-center'>
                  <h6 className=' textl-lg mb-2'>
                    <strong>$15/user per month</strong>
                  </h6>
                  <button className="btn-green ">Try it free for 30 days</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pricing-card">
                <h5>
                  <strong>
                    Basecamp <span className="highlight-text">PRO UNLIMITED</span>
                  </strong>
                </h5>
                <p>Top-of-the-line, fixed pricing for businesses.</p>
                <ul>
                  <li>
                    <strong>Extended 75-day free trial</strong>
                  </li>
                  <li>
                    <strong>Fixed price</strong>, no per-user charges
                  </li>
                  <li>Unlimited projects</li>
                  <li>5TB storage space</li>
                </ul>
                <h6>
                  <strong>$299/month billed monthly</strong>
                </h6>
                <button className="btn-green">Try it free for 75 days</button>
              </div>
            </div>
          </div>
        </div>
      )}



      {/* card-section end */}
      {/* pricing table */}
      {/* <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry the Bird</td>
              <td>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div> */}
        <br/>
        <br/>

      <marquee className="bg-black text-white">
        <h3> “Extremely user friendly”
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          “Truly amazing!”
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>


          “A godsend for our org”

          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          “Simple, quick, powerful”

          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          “So glad I found Basecamp”

          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          “The perfect solution”

          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          “Really great”

          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          “Outstanding”

          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          “Best app for teams”

          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          “Awesome service”

          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          “Gets better and better”

          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          “Great collaboration tool”

          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          “Great software”

          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          “Gold standard PM app”

          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          “Brilliant solution”

          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          “Clean and easy to use”

          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          “Fantastic app”

          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          “Organized and on point”

          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          “Extremely user friendly”

          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          “Truly amazing!”

          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          “A godsend for our org”

          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          “Simple, quick, powerful”

          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          “So glad I found Basecamp”

          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          “The perfect solution”

          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          “Really great”
        </h3>



      </marquee>


      {/* pricing table end */}
      {/* testemonial-section */}
      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-quote">“</div>
          <p className="testimonial-text">
            <strong>TeamOne is what the future looks like.</strong>
            <br />
            The main drawcard for us was that TeamOne looks fresh. While a lot of other
            PSA's on the market are old &amp; clunky looking. Support has been
            excellent and extremely responsive, something that can't be said for
            other competitors on the market.
          </p>
        </div>
      </section>
      {/* testemonial-section end */}
      {/* feature-section */}
      <section className="features-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 feature-box">
              <div className="feature-icon">
                <i className="bi bi-bar-chart-fill" />
              </div>
              <div className="feature-title">Project Management
              </div>
              <ul className="feature-list">
                <li>Create projects, sprints, or workflows
                </li>
                <li>Assign tasks, track time, manage priorities</li>
                <li>Gantt charts, Kanban boards, and milestones</li>
                <li>Budgeting, resource allocation & progress tracking</li>
                <li>Internal chat and file attachments on tasks</li>

              </ul>
            </div>
            <div className="col-md-4 feature-box">
              <div className="feature-icon">
                <i className="bi bi-graph-up" />
              </div>
              <div className="feature-title">CRM</div>
              <ul className="feature-list">
                <li>Lead capture from email, forms, and imports
                </li>
                <li>Pipeline stages, custom workflows & follow-ups</li>
                <li>Contact activity timelines & notes
                </li>
                <li>Email integration & notifications
                </li>
                <li>Deal tracking, forecasting & conversion analytics</li>
              
              </ul>
            </div>
            <div className="col-md-4 feature-box">
              <div className="feature-icon">
                <i className="bi bi-currency-dollar" />
              </div>
              <div className="feature-title"> HRM</div>
              <ul className="feature-list">
                <li>Employee onboarding & document management
                </li>
                <li>Daily attendance tracking (web, mobile, biometric)
                </li>
                <li>Leave requests, holidays, and shift rosters
                </li>
                <li>Employee directory & department structure
                </li>
                <li>Performance appraisals & feedback cycles
                </li>
              
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* feature-section end */}
      {/* assets-section */}
      <section className="assets-section-container">
        <div className="container">
          <div className="row">
            <div className="col-md-4 assets-card-box">
              <div className="assets-icon-box">
                <i className="bi bi-boxes" />
              </div>
              <div className="assets-title-box"> Finance & Payroll
              </div>
              <ul className="assets-list-box">
                <li>Auto-calculate salaries, TDS, PF, ESI, etc.
                </li>
                <li>Set up pay structures, bonuses, reimbursements
                </li>
                <li>Auto-generate payslips and bank files
                </li>
                <li>Expense management and approval flows
                </li>
                <li>Financial reports for audit-readiness
                </li>
                
              </ul>
            </div>
            <div className="col-md-4 assets-card-box">
              <div className="assets-icon-box">
                <i className="bi bi-hdd-stack" />
              </div>
              <div className="assets-title-box">Inventory Management</div>
              <ul className="assets-list-box">
                <li>Stock levels, issue logs, and location-wise tracking</li>
                <li>Low-stock alerts and reorder points
                </li>
                <li>Purchase orders, supplier records, and cost centers
                </li>
                <li>Asset tagging and maintenance logs</li>
                <li>Usage tracking per department or employee</li>
                
              </ul>
            </div>
            <div className="col-md-4 assets-card-box">
              <div className="assets-icon-box">
                <i className="bi bi-cookie" />
              </div>
              <div className="assets-title-box">Support Desk
              </div>
              <ul className="assets-list-box">
                <li>Raise tickets via web, mobile, or email</li>
                <li>Categorize, tag, and auto-assign tickets</li>
                <li>Define SLAs, priority levels, and escalation rules</li>
                <li>Resolution tracking, status updates & agent notes
                </li>
                <li>Full ticket history and analytics
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 assets-card-box">
              <div className="assets-icon-box">
                <i className="bi bi-boxes" />
              </div>
              <div className="assets-title-box">Project Management</div>
              <ul className="assets-list-box">
                <li>Project Management</li>
                
                <li>Manage WorkLoad</li>
                <li>Custom Fields</li>
                <li>Efficient Schedule and Precise Proect Scheduling </li>
                <li>Assign tasks to team members</li>
                <li>Automated asset discovery available</li>
              </ul>
            </div>
            <div className="col-md-4 assets-card-box">
              <div className="assets-icon-box">
                <i className="bi bi-hdd-stack" />
              </div>
              <div className="assets-title-box">HR </div>
              <ul className="assets-list-box">
                <li>Manamge Employee database</li>
                <li>Manage Recruitment efficiently</li>
                <li>Reports and Visualised Records</li>
                <li>Automated report delivery</li>
              
              </ul>
            </div>
            <div className="col-md-4 assets-card-box">
              <div className="assets-icon-box">
                <i className="bi bi-cookie" />
              </div>
              <div className="assets-title-box">Finance</div>
              <ul className="assets-list-box">
                <li>Manage Finance </li>
                <li>Manage Incoming and outgoing payments</li>
                <li>Manage Remittance </li>
                <li>Manage Invoices</li>
                <li>Reports and Analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* assets-section end */}
      {/* faq question */}
      <section className="faq-section py-5">
        <div className="container">
          <div className="faq-title">Frequently Asked Questions</div>
          <div className="row faq-container">
            <div className="col-md-6">
              <div
                className="faq-item"
                onClick={() => toggleItem(0)}
                style={{ cursor: 'pointer' }}
              >
                <span className="faq-icon">{openItems[0] ? '▼' : '▶'}</span>
                What features are included?
                {openItems[0] && (
                  <div className="faq-answer mt-3">
                    Our product includes a comprehensive suite of features such as user management, reporting dashboards, real-time notifications, integrated analytics.
                  </div>
                )}
              </div>
              <div
                className="faq-item"
                onClick={() => toggleItem(1)}
                style={{ cursor: 'pointer' }}
              >
                <span className="faq-icon">{openItems[1] ? '▼' : '▶'}</span>
                Do we have to pay extra for assets?
                {openItems[1] && (
                  <div className="faq-answer mt-3">
                    All essential assets are included with your subscription. Premium assets may incur extra fees.
                  </div>
                )}
              </div>
              <div
                className="faq-item"
                onClick={() => toggleItem(2)}
                style={{ cursor: 'pointer' }}
              >
                <span className="faq-icon">{openItems[2] ? '▼' : '▶'}</span>
                Is there a cost per end user?
                {openItems[2] && (
                  <div className="faq-answer mt-3">
                    Our pricing model does not charge per end user. Specific requirements may vary for larger deployments.
                  </div>
                )}
              </div>
              <div
                className="faq-item"
                onClick={() => toggleItem(3)}
                style={{ cursor: 'pointer' }}
              >
                <span className="faq-icon">{openItems[3] ? '▼' : '▶'}</span>
                Do you offer a non-profit discount?
                {openItems[3] && (
                  <div className="faq-answer mt-3">
                    Yes, we offer discounts for non-profit organizations. Please contact support for details.
                  </div>
                )}
              </div>
              <div
                className="faq-item"
                onClick={() => toggleItem(4)}
                style={{ cursor: 'pointer' }}
              >
                <span className="faq-icon">{openItems[4] ? '▼' : '▶'}</span>
                Are integrations included in the price?
                {openItems[4] && (
                  <div className="faq-answer mt-3">
                    Standard integrations are included. Custom integrations may incur additional fees.
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="faq-item"
                onClick={() => toggleItem(5)}
                style={{ cursor: 'pointer' }}
              >
                <span className="faq-icon">{openItems[5] ? '▼' : '▶'}</span>
                Can we request a demonstration of your software?
                {openItems[5] && (
                  <div className="faq-answer mt-3">
                    Yes, you can request a live demo via our demo booking page.
                  </div>
                )}
              </div>
              <div
                className="faq-item"
                onClick={() => toggleItem(6)}
                style={{ cursor: 'pointer' }}
              >
                <span className="faq-icon">{openItems[6] ? '▼' : '▶'}</span>
                Do you offer professional services?
                {openItems[6] && (
                  <div className="faq-answer mt-3">
                    We offer professional services including implementation, custom development, and training.
                  </div>
                )}
              </div>
              <div
                className="faq-item"
                onClick={() => toggleItem(7)}
                style={{ cursor: 'pointer' }}
              >
                <span className="faq-icon">{openItems[7] ? '▼' : '▶'}</span>
                Do you offer scalable prices for larger service desks?
                {openItems[7] && (
                  <div className="faq-answer mt-3">
                    Our pricing scales based on usage. Contact our sales team for custom pricing options.
                  </div>
                )}
              </div>
              <div
                className="faq-item"
                onClick={() => toggleItem(8)}
                style={{ cursor: 'pointer' }}
              >
                <span className="faq-icon">{openItems[8] ? '▼' : '▶'}</span>
                Do you offer long term contracts?
                {openItems[8] && (
                  <div className="faq-answer mt-3">
                    Yes, we offer both short-term and long-term contracts with various benefits.
                  </div>
                )}
              </div>
              <div
                className="faq-item"
                onClick={() => toggleItem(9)}
                style={{ cursor: 'pointer' }}
              >
                <span className="faq-icon">{openItems[9] ? '▼' : '▶'}</span>
                What support do you offer during the trial?
                {openItems[9] && (
                  <div className="faq-answer mt-3">
                    During the trial, we provide extensive support including live chat, documentation, and scheduled assistance calls.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faq question end */}
      {/* feature-question */}
      <section className="features-question-section">
        <div className="container">
          <h1 className="features-question-heading">
            The same core features are included with every package.
          </h1>
          <p className="features-question-subheading">
            From Free to Pro Unlimited, you get{" "}
            <strong>all the essential fundamentals built in.</strong>
          </p>
          <div className="feature-question-item">
            <i>✔</i> <strong>Message Boards</strong> for internal announcements{" "}
            <span className="highlight-question">replaces email</span>
          </div>
          <div className="feature-question-item">
            <i>✔</i> <strong>To-dos</strong> for tracking work and accountability{" "}
            <span className="highlight-question">replaces Asana, Jira, etc</span>
          </div>
          <div className="feature-question-item">
            <i>✔</i> <strong>Card Tables</strong> is our take on Kanban for process
            tracking <span className="highligh-questiont">replaces Trello</span>
          </div>
          <div className="feature-question-item">
            <i>✔</i> <strong>Campfires &amp; Pings</strong> for group chat and
            direct messaging{" "}
            <span className="highlight-question">replaces Slack, Teams, etc</span>
          </div>
          <div className="feature-question-item">
            <i>✔</i> <strong>Scheduling</strong> for deadlines, milestones, and
            events{" "}
            <span className="highlight-question">
              works with Google, Apple, and Outlook
            </span>
          </div>
          <div className="feature-question-item">
            <i>✔</i> <strong>Docs &amp; Files</strong> for storing assets{" "}
            <span className="highlight">
              replaces (or works with) Notion, Dropbox, Google Docs, etc
            </span>
          </div>
          <div className="feature-question-item">
            <i>✔</i> <strong>Reports &amp; Automatic Check-ins</strong> for staying
            up on things{" "}
            <span className="highlight-question">replaces status meetings</span>
          </div>
        </div>
      </section>
      {/* feature-question end */}
      {/* relatable-section */}
      <section className="reliability-section">
        <div className="container">
          <h1 className="reliability-heading">
            A stable, well-run company is part of the deal, too.
          </h1>
          <p>
            We've been running an upstanding, trustworthy, sustainable business for
            more than two decades.{" "}
            <span className="highlight-reliability-text">
              You can't build reliable software unless you build a reliable company.
            </span>
          </p>
          <ul className="reliability-list">
            <li>25 profitable, financially responsible years in business</li>
            <li>Zero debt, privately held, and built to stay, not exit</li>
            <li>
              99.99% historical <a href="#">uptime</a>, with full transparency
            </li>
            <li>Gold standard, famously great customer service</li>
            <li>
              Extensive <a href="#">learning library</a> free for all customers
            </li>
            <li>
              Direct access to our <a href="#">CEO via email</a>
            </li>
          </ul>
        </div>
      </section>
      {/* relatable-section end */}
      {/* discover-section */}
      <section className="discover-section">
        <div className="container">
          <h1 className="discover-heading">There's more to discover</h1>
          <p className="discover-subheading">
            Easy setup and everything as standard. Learn more about TeamOne.
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
                src="di"
                alt="more"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing;