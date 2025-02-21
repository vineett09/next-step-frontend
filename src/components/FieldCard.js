import React from "react";
import "../styles/roadmaps/FieldCard.css";

const FieldCard = ({ description }) => {
  return (
    <div className="field-card">
      <p>{description || "Click a node to learn more about this field."}</p>
    </div>
  );
};

export default FieldCard;
