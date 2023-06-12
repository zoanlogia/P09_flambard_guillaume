import React, { useState } from "react";
import angle from "../../assets/svg/angle.png";
import "./Dropdown.scss";

const Dropdown = ({ text, title }) => {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show); // Toggle the show state
  };

  return (
    <div className="dropdown__container" onClick={handleClick}>
      <p className="title">{title}</p>
      <span>
        <img src={angle} alt="angle" className={!show ? "up" : "down"} />
      </span>
      <div className={`content ${show ? "active" : ""}`}>
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default Dropdown;
