import React, { useEffect } from 'react';
import ReactDOM from "react-dom";
import classes from './NotificationModal.module.css';

const Template = ({ error, closePopUp }) => {
  let timerId;
  let time = 15000;

  useEffect(() => {
    timerId = setTimeout(closePopUp, time);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
  <div
    className={classes.wrap}
  >
    <span>
      {error}
    </span>
    <svg
      width="40px"
      height="40px"
      viewBox="0 0 100 100"
    >
      <circle
        className={classes.timer}
        r="30"
        cx="50"
        cy="50"
      />
    </svg>
    <button
      className={classes.button}
      onClick={closePopUp}
    >
      &#9587;
    </button>
  </div>
)}


const NotificationModal = ({ setError, error }) => {
  const closePopUp = () => {
    setError(null);
  };

  const domNode = document.getElementById("notification");

  if (domNode && error) {
    return ReactDOM.createPortal(<Template error={error} closePopUp={closePopUp} />, domNode);
  }
};

export default NotificationModal;
