import React, { useEffect } from "react";
import "./Popup.css";

const Popup = ({ message, onClose }) => {
  useEffect(() => {
    if (message) {

      const timeoutId = setTimeout(() => {
        onClose();
      }, 3000); 

      return () => clearTimeout(timeoutId);
    }
  }, [message, onClose]);

  return (
    <div className={`popup ${message ? "visible" : ""}`}>
      <div className="popup-content">
        <p>{message}</p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default Popup;
