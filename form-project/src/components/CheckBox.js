import React from "react";

const CheckBox = ({
  label,
  name,
  options,
  selected,
  onChange,

}) => {

 
  return (
    
    <>
      <div className="checkbox-container">
        {options.map((option,index) => (
          <div className="checkb0x-group" key={index}> 
            <input
              type="checkbox"
              name={name}
              value={option}
              checked={selected.includes(option)}
              onChange={(e) => onChange(name,option)}
            />
            {option}
          </div>
        ))}
      </div>
    </>
  );
};

export default CheckBox;