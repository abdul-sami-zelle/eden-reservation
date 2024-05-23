import React, { useState } from 'react';
import { Input } from 'antd';

const PhoneNumberField = ({label, onChange, value, width, type, disabled, onClick, defaultValue, required, margin, name }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = (e) => {
    const newValue = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    let formattedValue = '';

    for (let i = 0; i < newValue.length; i++) {
      if (i === 1 || i === 4 || i ===7) {
        formattedValue += '-';
      }
      formattedValue += newValue[i];
    }

    setInputValue(formattedValue);

    if (onChange) {
      onChange({
        target: {
          name,
          value: formattedValue
        }
      });
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
        className="custom-input"
        style={{
          width: "100%",
          height: 45,
          marginBottom: 15,
          background: "#fff",
          border: '2px solid var(--primary-color)'
        }}
        placeholder={'X-XXX-XXX-XXX'}
        value={value}
        name={name}
        required={required}
        onChange={handleInputChange}
        type={type}
        disabled={disabled}
        onClick={onClick}
        defaultValue={defaultValue}
        maxLength={13}
      />
    </div>
  );
};

export default PhoneNumberField;
