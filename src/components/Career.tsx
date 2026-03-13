import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Mobile & Web Apps</h5>
              </div>
              <h3>2+ yrs</h3>
            </div>
            <p>
              Building end-to-end mobile and web applications with a focus on
              clean UI, strong performance, and reliable user experiences.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Engineer</h4>
                <h5>APIs & Integrations</h5>
              </div>
              <h3>Now</h3>
            </div>
            <p>
              Designing REST APIs and backend services using Python, Django,
              FastAPI, and Node.js. Working across MySQL, MongoDB, and
              PostgreSQL with production deployments on AWS and DigitalOcean.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Open Source & Mentoring</h4>
                <h5>Community</h5>
              </div>
              <h3>Ongoing</h3>
            </div>
            <p>
              Exploring modern design systems, contributing to open source, and
              mentoring fellow developers to ship better software.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
