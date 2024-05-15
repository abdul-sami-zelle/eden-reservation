import React, { useEffect, useState, useRef,useContext } from 'react';
import SelectField from '../utils/selectField';
import { SmileOutlined, FrownOutlined, MehOutlined } from '@ant-design/icons';
import Checkboxes from './checkbox/checkbox';
import LabelHeading from '../utils/labelsHeading';
import { colors } from '../utils/colors';
import SliderRange from './slider';
import MainContext from '../context/mainContext';

function Step1() {
   

 

    const {publicEventChecked, privateEventChecked, handleCheckboxEventType,publicEvents,privateEvents,selectedEventValue,handleEventChange} = useContext(MainContext);


    return (
        <>
            <div style={{
                display:"flex",
                flexDirection:"column",
                paddingTop:"30px"
            }}>
                <div style={{
                    marginBottom:'20px'
                }} >
                    <LabelHeading text={"Please Select Event Type"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} weight={"500"} />
                    <label htmlFor="cbx-1" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Checkboxes id="cbx-1" isChecked={publicEventChecked} onChange={handleCheckboxEventType} />
                        <LabelHeading text={"Public Event"} color={colors.primary} fontSize={"12px"} margin={"0px 5px"} family={'Montserrat'} />
                    </label>
                    <div style={{ height: '10px' }}></div>
                    <label htmlFor="cbx-2" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Checkboxes id="cbx-2" isChecked={privateEventChecked} onChange={handleCheckboxEventType} />
                        <LabelHeading text={"Private Event"} color={colors.primary} fontSize={"12px"} margin={"0px 5px"} family={'Montserrat'} />
                    </label>
                </div>
                <div style={{
                    marginBottom:'20px'
                }}>
                    <LabelHeading text={"Please Select Event"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} weight={"500"} />
                    <SelectField
                        options={ publicEventChecked?publicEvents:privateEvents}
                        placeholder="Select Event"
                        label=""
                        onChange={handleEventChange}
                        value={selectedEventValue}
                        width="300px"
                        backgroundColor={colors.primary}
                    />
                </div>



                <div>
                    <LabelHeading text={"Please Select No. of Guests"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} weight={"500"} />
                    <SliderRange />
                </div>

            </div>
        </>
    )
}
export default Step1;