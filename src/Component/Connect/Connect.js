import React, { useEffect, useState } from "react";
import "./Connect.css";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

const Connect = () => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <>
      <div className="connect-sec">
        <div className="connect-page container">
          <div className="connect-img">
            <div className="image"></div>
          </div>
          <div className="connect-form">
            <p className="connect-title" id="connect">
              Get In Touch
            </p>

            <div className="form">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email Address" />
              <input type="email" placeholder="Phone Number" />
              <textarea placeholder="Message" />
            </div>
            <button
              disabled={isLoading}
              onClick={!isLoading ? handleClick : null}
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Connect;
