// InputField.js
import React from 'react';

const InputField3 = ({ label, type, value, onChange,name }) => {
  return (
    <div>
      {/* <label>{label}</label> */}
      <input name={name} type={type} value={value} onChange={onChange} required />
    </div>
  );
};

export default InputField3;
