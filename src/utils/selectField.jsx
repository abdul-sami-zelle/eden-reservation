
import React from 'react';
import { Select } from 'antd';
import abc from '../assets/independence.png'


const SelectField = ({ options, placeholder, label, onChange, value, width, showSearch, disabled, defaultValue,backgroundColor }) => (
    <div style={{ display: 'flex', flexDirection: 'column', width: width }}>
      {label && <label style={{ marginBottom: 5, fontFamily: 'poppins', fontWeight: '500', color: "#73787c", fontSize: "14px" }}>{label}</label>}
      <Select className='ant-select-selector'
        showSearch={showSearch}
        style={{
          width: "100%",
          height: 45,
          marginBottom: 15,
          borderColor: "#b78953 !important",
          backgroundColor:`${backgroundColor} !important`,
          
        }}
        placeholder={placeholder}
        optionFilterProp="children"
        filterOption={(input, option) => (option?.name ?? '').includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.name ?? '').toLowerCase().localeCompare((optionB?.name ?? '').toLowerCase())
        }
        value={value}
        onChange={onChange}
        disabled={disabled}
        defaultValue={defaultValue}
      >
        {options.map(option => (
          <Select.Option key={option.name} value={option.name} >
            <img src={value === option.name ? ("https://eden.skyhub.pk"+option.iconOnePath) : ("https://eden.skyhub.pk"+option.iconTwoPath)} alt="" srcset="" style={{ height: "25px", width: "25px", marginRight: "10px" }} />
            <h4 style={{margin:'4px 0px',color:value === option.name?'#fff':'#353E49',fontFamily:'Montserrat',fontWeight:'600'}}>{option.name}</h4>
          </Select.Option>
        ))}
      </Select>
    </div>
  );

export default SelectField;
