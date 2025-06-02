import React from 'react';

function Pricing() {
  return (
    <section className="section">
      <h1>Pricing</h1>
      <p>Our pricing is simple and scales with the size of your fleet. We charge a flat rate per truck, per month, so you always know what to budget.</p>

      <div style={{ marginTop: '2rem' }}>
        <h2>$75 / Truck / Month</h2>
        <p>
          Includes:
        </p>
        <ul>
          <li>Driver qualification file management</li>
          <li>Drug & alcohol testing coordination</li>
          <li>ELD setup & HOS monitoring</li>
          <li>IFTA filing support</li>
          <li>Monthly CSA score review</li>
          <li>Email & phone support</li>
        </ul>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h3>One-Time Add-On Services</h3>
        <ul>
          <li>Mock DOT Audit: <strong>$750</strong></li>
          <li>New Entrant Audit Prep: <strong>$500</strong></li>
          <li>Custom Safety Plan (written policy): <strong>$400</strong></li>
        </ul>
      </div>

      <p style={{ marginTop: '2rem' }}>
        <strong>Got questions?</strong> <a href="/contact" className="btn-primary">Contact Us</a>
      </p>
    </section>
  );
}

export default Pricing;
