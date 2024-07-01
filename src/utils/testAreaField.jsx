import React from 'react';
import { Input } from 'antd';
const { TextArea } = Input;

const TextAreaField = ({ textAreas, value, onChange, readOnly, width, disabled, autoSize, height ,classname}) => (
  <>
    {textAreas.map((textArea, index) => (
      <div key={index} style={{ width: width ,}}>
        {/* {textArea.label && (
          <label className='input-labels' style={{ display: 'block', marginBottom: 5, color: '#73787c', fontWeight: 500, }}>{textArea.label}</label>
        )} */}
        <TextArea className={classname}
          autoSize={autoSize}
          value={value}
          showCount={textArea.showCount || false}
          onChange={onChange}
          placeholder={textArea.placeholder}
          readOnly={readOnly}
          disabled={disabled}
          style={{
            height: "100px !important" ,  // Use height prop if provided, otherwise default to textArea.height or 35
            resize: textArea.resize || 'none',
            maxHeight: textArea.maxHeight,
            color: "#000",
             border: '2px solid var(--primary-color)'
          }}
        />
        <br />
      </div>
    ))}
  </>
);

export default TextAreaField;
