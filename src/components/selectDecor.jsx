import React, { useEffect, useState, useRef,useContext } from 'react';
import LabelHeading from '../utils/labelsHeading';
import { colors } from '../utils/colors';
import SelectField from '../utils/selectField';
import Quanitity from '../utils/quantity';
import DrinksContainer from '../utils/drinksContainer';
import beverages from '../assets/beverage.png';
import table from '../assets/table.png';
import seating from '../assets/seating.png';
import chairs from '../assets/chairs.png';
import centerpiece from '../assets/centerpiece.png';
import mandops from '../assets/mandops.png';
import lighting from '../assets/lighting.png';
import DecorContainer from '../utils/decorSelectors';
import MainContext from '../context/mainContext';
import SelectField2 from '../utils/selectField2';
import SelectField4 from '../utils/selectField4';

function SelectDecor() {
    const {setSeatingArrangementModalState,setTableTypeModalState,chairTypeModalState, setChairTypeModalState,StageTypes,selectedStageType, setSelectedStageType ,setStageType,centerpieceModalState, setCenterpieceModalState,mdModalState, setMDModalState,setLightingModalState} = useContext(MainContext);
    return (
        <div className='step4Part1' style={{display:"flex",flexDirection:"column",width:"100%",marginLeft:"20px"}}>
        <div style={{display:'flex',flexDirection:'column'}}>
         <LabelHeading text={"Table Setups"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} />
         <div className='tableSetupType' style={{display:"flex"}}>
            <DecorContainer setFunction={setSeatingArrangementModalState} image={seating} name={"Seating Arrangement"} />
            {/* <div className="distanceBeverages"></div>
            <DecorContainer setFunction={setTableTypeModalState} image={table} name={"Select Table"} /> */}
            <div className="distanceBeverages"></div>
            <DecorContainer setFunction={setChairTypeModalState} image={chairs} name={"Select Chair"} />
         </div>
        </div>
        <div  style={{display:'flex',flexDirection:'column'}}>
        <LabelHeading text={`Select Stage Dimension`} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} />
        <SelectField4
                    options={StageTypes}
                    placeholder={`Select Stage`}
                    label=""
                    onChange={setStageType}
                    value={selectedStageType}
                    width="200px"
                    backgroundColor={colors.primary}
                />
        </div>
        <div style={{display:'flex',flexDirection:'column'}}>
         <LabelHeading text={"Decoration"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} />
         <div  className='tableSetupType' style={{display:"flex"}}>
            <DecorContainer setFunction={setMDModalState} image={centerpiece} name={"Backdrop & Mandap"} />
            <div className="distanceBeverages"></div>
            <DecorContainer setFunction={setCenterpieceModalState} image={mandops} name={"Centerpieces"} />
            <div className="distanceBeverages"></div>
            <DecorContainer setFunction={setLightingModalState} image={lighting} name={"Lighting"} />
         </div>
        </div>
      
        <div style={{display:'flex',flexDirection:'column'}}>

        </div>
    </div>
    )
}

export default SelectDecor;