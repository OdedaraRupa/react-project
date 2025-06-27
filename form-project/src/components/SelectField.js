import React from "react";
const SelectField = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  options,
  required = false,
}) => {
  return (
    <>
      <div className="input-container">
        <select
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(name,e.target.value)}
          onBlur={onBlur}
        >
          <option>Select {label}</option>
          {options.map((opt, index) => (
            <option key={index} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
export default SelectField;
