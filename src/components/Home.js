import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="section">
      <h1>Welcome to Gemist Compliance</h1>
      <p>
        At Gemist Compliance, we help small fleets stay DOT-compliant, avoid fines, and keep drivers safe. Our expert-led safety and compliance services are tailored for companies operating
        with 7–25 trucks, ensuring you pass every FMCSA audit with confidence.
      </p>
      <p>
        <strong>Why choose Gemist Compliance?</strong>
      </p>
      <ul>
        <li>Comprehensive driver qualification file management</li>
        <li>Drug & alcohol testing coordination</li>
        <li>ELD setup & Hours-of-Service monitoring</li>
        <li>IFTA filing assistance</li>
        <li>Mock audits and CSA score improvement</li>
      </ul>
      <p>
        Ready to protect your fleet and minimize risk? <Link to="/contact" className="btn-primary">Get in Touch</Link>
      </p>
    </section>
  );
}

export default Home;
