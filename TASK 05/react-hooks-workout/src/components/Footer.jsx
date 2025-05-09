import { useState, useEffect } from 'react';

function Footer() {
  const [currentYear, setCurrentYear] = useState('');
  const [socialLinks] = useState([
    { name: 'Instagram', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'Facebook', url: '#' }
  ]);
  
  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);
  
  return (
    <footer>
      <div>
        send us a message <a href="mailto:info@workoutaja.com">@workoutaja</a>
      </div>
      <div className="social-links">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.name}
          </a>
        ))}
      </div>
      <div className="copyright">
        © {currentYear} WorkoutAja. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;