import React from 'react'

const InputField = ({name,value,onChange,type="text",placeholder}) => {
  return(
    <>
    <div className='input-container'>

      <input 
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(name,e.target.value)}
        placeholder={placeholder}
        />
        
    </div>
    </>
  )
}

export default InputField;