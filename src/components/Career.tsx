import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My education <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Computer Science Student</h4>
                <h5>Toronto Metropolitan University</h5>
              </div>
              <h3>2022 – Present</h3>
            </div>
            <p>
              Studying core areas of computer science while building practical
              skills in programming, databases, data analysis, and software
              development.
            </p>
          </div>

          {/* Data Projects */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analytics Projects</h4>
                <h5>Academic &amp; Personal Work</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed projects involving data cleaning, exploratory data
              analysis, visualization, and basic machine learning using Python,
              SQL, and Jupyter Notebook.
            </p>
          </div>

          {/* Full Stack */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Development Projects</h4>
                <h5>MERN Stack</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built web applications using MongoDB, Express, React, and Node.js,
              gaining experience in connecting frontend interfaces with backend
              systems and databases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;