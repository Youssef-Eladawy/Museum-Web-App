import "./Subscription.css";

function Subscription() {
  return (
    <div className="subscription-page">
      <div className="container">
        <div className="subscription-content">
          {/* Main Subscription Section */}
          <div className="subscription-section">
            <h1 className="subscription-title">SUBSCRIBE</h1>
            <h2 className="subscription-subtitle">Our Newsletter</h2>

            <p className="subscription-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              tempore nam, architecto doloremque velit explicabo? Voluptate sunt
              eveniet fuga eligendi! Expedita laudantium fugiat corrupti eum cum
              repellat a laborum quasi.
            </p>

            <div className="subscription-form-container">
              <div className="divider"></div>

              <form className="subscription-form">
                <div className="form-group">
                  <label className="form-label">Your email</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <button type="submit" className="subscribe-btn">
                  Subscribe
                </button>
              </form>

              <div className="divider"></div>
            </div>

            <div className="get-in-touch">
              <h3 className="get-in-touch-title">Get In Touch</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
