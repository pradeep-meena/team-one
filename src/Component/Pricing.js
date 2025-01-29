import React from 'react'
import './Pricing.css'
const Pricing = () => {
  return (
    <div> 
         <section className="pricing-section">
    <div className="container">
      <h1 className="fw-bold">
        Heavy on <span className="text-dark">features</span>. Light on{" "}
        <span className="text-dark">price</span>.
      </h1>
      <p className="text-muted">
        No locked-away features or upgrade fees, just all-inclusive PSA
        software.
      </p>
      <p className="text-secondary">Up to a yearly saving of 25%</p>
      <div className="toggle-container">
        <button className="toggle-btn active" id="annualBtn">
          Annual
        </button>
        <button className="toggle-btn" id="monthlyBtn">
          Monthly
        </button>
      </div>
    </div>
  </section>
  {/* pricing-section end */}
  {/* card-section */}
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
          <h6>
            <strong>$15/user per month</strong>
          </h6>
          <button className="btn-green">Try it free for 30 days</button>
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
  {/* card-section end */}
  {/* pricing table */}
  <div className="container">
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
  </div>
  {/* pricing table end */}
  {/* testemonial-section */}
  <section className="testimonial-section">
    <div className="container">
      <div className="testimonial-quote">“</div>
      <p className="testimonial-text">
        <strong>Halo is what the future looks like.</strong>
        <br />
        The main drawcard for us was that Halo looks fresh. While a lot of other
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
          <div className="feature-title">Service Desk</div>
          <ul className="feature-list">
            <li>Email &amp; Social Ticketing</li>
            <li>Knowledge Base</li>
            <li>Automations</li>
            <li>Collision Detection</li>
            <li>SLA Management</li>
            <li>Round-robin Routing</li>
            <li>Full Portal Rebrand</li>
          </ul>
        </div>
        <div className="col-md-4 feature-box">
          <div className="feature-icon">
            <i className="bi bi-graph-up" />
          </div>
          <div className="feature-title">CRM</div>
          <ul className="feature-list">
            <li>Deal pipeline</li>
            <li>Quotes</li>
            <li>Sales Orders</li>
            <li>Purchase Orders</li>
            <li>Sales analytics</li>
            <li>Required fields</li>
            <li>Email Scheduling</li>
          </ul>
        </div>
        <div className="col-md-4 feature-box">
          <div className="feature-icon">
            <i className="bi bi-currency-dollar" />
          </div>
          <div className="feature-title">Billing</div>
          <ul className="feature-list">
            <li>Automated time tracking</li>
            <li>Charge Rates</li>
            <li>Billing Plan Combinations</li>
            <li>Surcharges and Multipliers</li>
            <li>Incremental time</li>
            <li>Dynamic service plan billing</li>
            <li>Third party accounts integration</li>
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
          <div className="assets-title-box">Assets and Stock</div>
          <ul className="assets-list-box">
            <li>Asset Management</li>
            <li>Stock/Inventory Management</li>
            <li>Custom Fields</li>
            <li>Issue stock to jobs to bill customers</li>
            <li>Start remote session from customer assets</li>
            <li>Automated asset discovery available</li>
          </ul>
        </div>
        <div className="col-md-4 assets-card-box">
          <div className="assets-icon-box">
            <i className="bi bi-hdd-stack" />
          </div>
          <div className="assets-title-box">Reporting</div>
          <ul className="assets-list-box">
            <li>200+ out of the box reports</li>
            <li>Graph engine</li>
            <li>Create custom reports</li>
            <li>Automated report delivery</li>
            <li>Configurable TV/Browser Dashboards</li>
            <li>Further free 1000+ reports available via reports library</li>
          </ul>
        </div>
        <div className="col-md-4 assets-card-box">
          <div className="assets-icon-box">
            <i className="bi bi-cookie" />
          </div>
          <div className="assets-title-box">Support</div>
          <ul className="assets-list-box">
            <li>Unlimited phone, chat and email support</li>
            <li>24/7 support hours</li>
            <li>Onboarding and consultancy packages available</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  {/* assets-section end */}
  {/* faq question */}
  <section className="faq-section">
    <div className="container">
      <div className="faq-title">Frequently Asked Questions</div>
      <div className="row faq-container">
        <div className="col-md-6">
          <div className="faq-item">
            <span className="faq-icon">▶</span>
            What features are included?
          </div>
          <div className="faq-item">
            <span className="faq-icon">▶</span>
            Do we have to pay extra for assets?
          </div>
          <div className="faq-item">
            <span className="faq-icon">▶</span>
            Is there a cost per end user?
          </div>
          <div className="faq-item">
            <span className="faq-icon">▶</span>
            Do you offer a non-profit discount?
          </div>
          <div className="faq-item">
            <span className="faq-icon">▶</span>
            Are integrations included in the price?
          </div>
        </div>
        <div className="col-md-6">
          <div className="faq-item">
            <span className="faq-icon">▶</span>
            Can we request a demonstration of your software?
          </div>
          <div className="faq-item">
            <span className="faq-icon">▶</span>
            Do you offer professional services?
          </div>
          <div className="faq-item">
            <span className="faq-icon">▶</span>
            Do you offer scalable prices for larger service desks?
          </div>
          <div className="faq-item">
            <span className="faq-icon">▶</span>
            Do you offer long term contracts?
          </div>
          <div className="faq-item">
            <span className="faq-icon">▶</span>
            What support do you offer during the trial?
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
            src="discover-more.png"
            alt="Discover more"
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