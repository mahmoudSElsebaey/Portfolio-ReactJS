import React from "react";
import "./Email.css";

export default function Email() {
  return (
    <>
      <div className="email-sec">
        <div className="email-page container">
          <div className="email-content">
            <p>see my projects at once & leave here your email address</p>
            <div className="email-submit">
              <input type="email" placeholder="Email Address" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
