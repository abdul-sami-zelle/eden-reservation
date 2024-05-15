import React, { useEffect, useState, useRef,useContext } from 'react';
import LabelHeading from '../utils/labelsHeading';
import { colors } from '../utils/colors';
import SelectField from '../utils/selectField';
import Quanitity from '../utils/quantity';
import DrinksContainer from '../utils/drinksContainer';
import beverages from '../../public/beverage.png';
import table from '../../public/table.png';
import seating from '../../public/seating.png';
import chairs from '../../public/chairs.png';
import centerpiece from '../../public/centerpiece.png';
import mandops from '../../public/mandops.png';
import coffee from '../../public/coffee.png';
import DecorContainer from '../utils/decorSelectors';
import MainContext from '../context/mainContext';
import SelectField2 from '../utils/selectField2';

function SelectDecor() {
    const {setSeatingArrangementModalState,setTableTypeModalState,chairTypeModalState, setChairTypeModalState,StageTypes,selectedStageType, setSelectedStageType ,setStageType,centerpieceModalState, setCenterpieceModalState,mdModalState, setMDModalState} = useContext(MainContext);
    return (
        <div style={{display:"flex",flexDirection:"column",width:"100%",marginLeft:"20px"}}>
        <div style={{display:'flex',flexDirection:'column'}}>
         <LabelHeading text={"Table Setups"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} />
         <div style={{display:"flex"}}>
            <DecorContainer setFunction={setSeatingArrangementModalState} image={seating} name={"Seating Arrangement"} />
            <DecorContainer setFunction={setTableTypeModalState} image={table} name={"Select Table"} />
            <DecorContainer setFunction={setChairTypeModalState} image={chairs} name={"Select Chair"} />
         </div>
        </div>
        <div style={{display:'flex',flexDirection:'column'}}>
        <LabelHeading text={`Select Stage Dimension`} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} />
        <SelectField2
                    options={StageTypes}
                    placeholder={`Select Stage`}
                    label=""
                    onChange={setStageType}
                    value={selectedStageType}
                    width="300px"
                    backgroundColor={colors.primary}
                />
        </div>
        <div style={{display:'flex',flexDirection:'column'}}>
         <LabelHeading text={"Decoration"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} />
         <div style={{display:"flex"}}>
            <DecorContainer setFunction={setMDModalState} image={centerpiece} name={"Backdrop & Mandap"} />
            <DecorContainer setFunction={setCenterpieceModalState} image={mandops} name={"Centerpieces"} />
         </div>
        </div>
      
        <div style={{display:'flex',flexDirection:'column'}}>

        </div>
    </div>
    )
}

export default SelectDecor;