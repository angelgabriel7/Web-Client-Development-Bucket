import { useState, useEffect } from 'react';

function Hero() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  // Animation effect on mount
  useEffect(() => {
    setFadeIn(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      // Simulate API call
      setTimeout(() => {
        setSubscribed(true);
        setEmail('');
      }, 500);
    }
  };

  return (
    <main className={fadeIn ? 'fade-in' : ''}>
      <section className="text">
        <h1>WORKOUTS MADE <br /> <span>EXCLUSIVE</span> FOR YOU!</h1>
        <p>We create <strong>exclusive and unique</strong> workouts for you. <br />
          Invest in your body and get <strong>much more performance</strong><br />and quality of life.</p>
        
        {subscribed ? (
          <div className="success-message">
            <p>Thanks for subscribing! We'll contact you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="subscribe-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">
              <img src="./imgs/whatsapp-icon.svg" alt="whatsapp icon" />
              Subscribe
            </button>
          </form>
        )}
      </section>
      <img src="./imgs/woman.svg" alt="illustration of a woman doing workout on a gym" />
    </main>
  );
}

export default Hero;