import React, { useState } from 'react';
import { Input } from 'antd';

const InputField = ({ placeholder, label, onChange, value, width, type, disabled, onClick, defaultValue, required, margin, name,id,readOnly  }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange({
        target: {
          name,
          value: newValue
        },
       
      }
   
    );
    }
    if (name==='zip') {
      console.log(newValue)
    } 
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: width, margin: margin }}>
      {label && (
        <label
          style={{
            marginBottom: 5,
            fontFamily: 'poppins !important',
            color: 'var(--primary-color)',
            fontWeight: '600',
            fontSize: "16px",
          }}
        >
          {label}
        </label>
      )}
      <Input
      id={id}
        className="custom-input"
        style={{
          width: "100%",
          height: 45,
          marginBottom: 15,
          background: "#fff",
          border: '2px solid var(--primary-color)'
        }}
        placeholder={placeholder}
        value={value}
        name={name}
        required={required}
        onChange={onChange}
        type={type}
        disabled={disabled}
        onClick={onClick}
        defaultValue={defaultValue}
        readOnly={readOnly }
      />
    </div>
  );
};

export default InputField;
