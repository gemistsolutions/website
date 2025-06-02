import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Gemist Compliance. All rights reserved.</p>
      <p>
        <a href="mailto:info@gemistcompliance.com" style={{ color: '#fff', textDecoration: 'underline' }}>
          info@gemistcompliance.com
        </a>{' '}
        |{' '}
        <a href="tel:+1234567890" style={{ color: '#fff', textDecoration: 'underline' }}>
          (123) 456-7890
        </a>
      </p>
    </footer>
  );
}

export default Footer;
