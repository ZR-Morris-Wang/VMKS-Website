import React from "react";
import "./styles.css";

interface ChipProps {
  label: string;
}

const Chip: React.FC<ChipProps> = ({ label }) => {
  return <p className="chip">{label}</p>;
};

export default Chip;
