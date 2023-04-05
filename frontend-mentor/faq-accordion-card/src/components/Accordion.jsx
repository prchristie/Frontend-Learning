import { useState } from "react";
import "./Accordion.css";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <button className="accordion-btn" onClick={() => openAccordion()}>
        <div className="accordion-header">
          <h2 className={`accordion-title ${isOpen ? "bold" : ""}`}>{title}</h2>
        </div>
        <div className="img-container">
          <img
            src="/images/icon-arrow-down.svg"
            alt="Drop down arrow"
            className={`arrow ${isOpen ? "flipped" : ""}`}
          />
        </div>
      </button>
      <p className={`accordion-content ${isOpen ? "" : "hidden"}`}>{content}</p>
    </div>
  );
};

export default Accordion;
