import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';

const About = () => {
  // Use state to manage the visibility of mission and vision sections
  const [showMission, setShowMission] = useState(false);
  const [showVision, setShowVision] = useState(false);

  return (
    <div className="container mt-4">
      <h1 className="text-primary">About</h1>

      <Dropdown className="mt-4">
        <Dropdown.Toggle variant="primary" id="dropdown-mission">
          Our Mission
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => setShowMission(!showMission)}
            eventKey="1"
          >
            Toggle Mission
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* Show mission section if the state is true */}
      {showMission && (
        <div className="mt-3">
          <div className="card card-body bg-light">
            <h3 className="text-info">Our Mission</h3>
            <p>
              Our mission is to provide high-quality education accessible to
              everyone, empowering individuals to achieve their full potential
              and pursue their dreams. We strive to deliver innovative and
              engaging learning experiences that foster intellectual growth,
              critical thinking, and lifelong learning skills.
            </p>
          </div>
        </div>
      )}

      <Dropdown className="mt-4">
        <Dropdown.Toggle variant="primary" id="dropdown-vision">
          Our Vision
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => setShowVision(!showVision)}
            eventKey="1"
          >
            Toggle Vision
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* Show vision section if the state is true */}
      {showVision && (
        <div className="mt-3">
          <div className="card card-body bg-light">
            <h3 className="text-info">Our Vision</h3>
            <p>
              Our vision is to create a world where education knows no
              boundaries. We envision a future where anyone, regardless of
              their background or geographical location, can access education at
              their convenience, unlocking endless opportunities for personal
              and professional growth. We aim to be a global leader in online
              education, continuously pushing the boundaries of learning
              innovation and making education accessible to all.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
