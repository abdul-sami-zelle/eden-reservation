import React from 'react';
import { Select } from 'antd';

const SelectField2 = ({
  options,
  placeholder,
  label,
  onChange,
  value,
  width,
  showSearch,
  disabled,
  defaultValue,
  backgroundColor
}) => {

  const handleChange = (selectedValue, option) => {
    // Call the original onChange function with the selected value and the entire option object
    if (onChange) {
      onChange(selectedValue, option);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: width }}>
      {label && (
        <label
          style={{
            marginBottom: 5,
            fontFamily: 'Poppins',
            fontWeight: '500',
            color: "#73787c",
            fontSize: "14px"
          }}
        >
          {label}
        </label>
      )}
      <Select
        className='ant-select-selector'
        showSearch={showSearch}
        style={{
          width: "100%",
          height: 45,
          marginBottom: 15,
          borderColor: "#b78953 !important",
          backgroundColor: `${backgroundColor} !important`,
        }}
        placeholder={placeholder}
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? '').includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
        }
        value={value}
        onChange={handleChange}
        disabled={disabled}
        defaultValue={defaultValue}
      >
        {options.map(option => (
          <Select.Option key={option.value} value={option.value} {...option}>
            <h4
              style={{
                margin: '4px 0px',
                color: value === option.value ? '#fff' : '#353E49',
                fontFamily: 'Montserrat',
                fontWeight: '600'
              }}
            >
              {option.label}
            </h4>
          </Select.Option>
        ))}
      </Select>
    </div>
  );
};

export default SelectField2;
