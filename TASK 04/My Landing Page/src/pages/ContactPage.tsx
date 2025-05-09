const ContactPage = () => {
    return (
      <div className="contact-page">
        <h1>Contact Us</h1>
        <form>
          <label>
            Name:
            <input type="text" />
          </label>
          <label>
            Email:
            <input type="email" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default ContactPage;
  