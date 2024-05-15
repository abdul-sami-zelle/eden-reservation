import React, { useRef } from 'react';
import { Input } from 'antd';

const InputField = ({ placeholder, label, onChange, value, width, type, disabled, onClick, className, inputRefs, defaultValue,required ,margin}) => {
  const inputRef = useRef(value);



  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: width,margin:margin }}>
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
          border:'2px solid var(--primary-color)'
        }}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
        type={type}
        disabled={disabled}
        onClick={onClick}
        ref={inputRefs}
        defaultValue={defaultValue}
      />
    </div>
  );
}
export default InputField;
