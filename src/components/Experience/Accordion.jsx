import React from "react";

const Accordion = ({ title, children, bgColor }) => {
  return (
    <div>
      <div className={`collapse collapse-arrow w-full ${bgColor} !outline-none`}>
        <input type="radio" name="my-accordion-2"/>
        <div className="collapse-title text-xl font-medium">
          {title}
        </div>
        <div className="collapse-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
