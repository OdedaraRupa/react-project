import React from "react";

const RadioGroup = ({
  label,
  type,
  name,
  onChange,
  selected,
  onBlur,
  options,
  required = false,
}) => {
  return (
    <>
      <div className="radio-container">
        {options.map((option, index) => (
          <div className="" key={index}>
            <input
              type={type}
              name={name}
              value={option}
              checked={selected === option}
              onChange={(e) => onChange(name,e.target.value)}
              onBlur={onBlur}
            />
            {option}
          </div>
        ))}
        
      </div>
    </>
  );
};

export default RadioGroup;
