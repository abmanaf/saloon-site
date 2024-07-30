import React from "react";
import "./Toast.css";

const Toast = () => {
  return (
    <div className="toast-container">
      <h2 className="toast-title">
        <img src="/assets/images/icon-success.svg" alt="icon-success" />
        <span style={{ color: "white" }}>Submitted successfully</span>
      </h2>
      <p style={{ fontSize: "10px" }} className="toast-desc">
        Thanksfor Booking appointment with us. Welcome to the soceity!
      </p>
    </div>
  );
};

export default Toast;
