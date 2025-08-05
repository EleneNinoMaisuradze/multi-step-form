// src/components/buttons/nextStepBtn/NextStepBtn.jsx
import React from "react";

const NextStepBtn = ({ onClick, text = "Next Step" }) => {
  return (
    <button onClick={onClick} className="next-step-btn">
      {text}
    </button>
  );
};

export default NextStepBtn;
