import React, { useState,useContext } from 'react';
import { Col, InputNumber, Row, Slider, Space } from 'antd';
import MainContext from '../context/mainContext';


const SliderRange = () => {
  const {totalPersons,changeTotalPersons} = useContext(MainContext); 
  return (
    <>
      <Col span={30}>
        <Slider
          min={50}
          max={1500}
          onChange={changeTotalPersons}
          value={typeof totalPersons === 'number' ? totalPersons : 0}
        />
      </Col>
      <Col span={12}>
        <InputNumber
          min={50}
          max={1500}
          style={{
            margin: '0 0',
          }}
          value={totalPersons}
          onChange={changeTotalPersons}
        />
      </Col>
    </>
  );
};

export default SliderRange;