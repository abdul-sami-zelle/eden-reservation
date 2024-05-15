import { Calendar } from "antd";
import React, { useState,useContext } from 'react';
import dayjs from "dayjs";
import forward from '../../public/forward.png';
import back from '../../public/back.png';
import { colors } from "../utils/colors";
import LabelHeading from "../utils/labelsHeading";
import MainContext from '../context/mainContext';
import AppointmentDateTabs from "../utils/appointDateTabs";


function Step6() {

    return (
        <>
           <div className="appointmentDates">
           <AppointmentDateTabs isSelected={true}/>
           <AppointmentDateTabs />
           <AppointmentDateTabs/>
           <AppointmentDateTabs/>
           <AppointmentDateTabs/>
           <AppointmentDateTabs/>
           <AppointmentDateTabs/>
           <AppointmentDateTabs/>
           <AppointmentDateTabs/>
           <AppointmentDateTabs/>
           <AppointmentDateTabs/>
           <AppointmentDateTabs/>
           </div>
        </>
    )
}

export default Step6;
