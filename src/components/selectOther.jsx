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
import coffee from '../assets/coffee.png';
import MainContext from '../context/mainContext';
import DecorContainer from '../utils/decorSelectors';
import soundsystem from '../assets/sound-system.png';
import diningStyle from '../assets/diningStyle.png';
import cutlery from '../assets/cutlery.png';

function SelectOther() {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggleCheckbox = () => {
        setIsChecked(!isChecked);
    };
    const { soundSystemModalState, setSoundSystemModalState,diningStyleModalState, setDiningStyleModalState,cutleryTypeModalState, setCutleryTypeModalState,isRoomSelected,handleRoomSelectedChange,isSecuritySelected,handleSecuritySelectedChange,isValetSelected,handleValetSelectedChange,} = useContext(MainContext);
    return (
        <div className='step4Part1' style={{display:"flex",flexDirection:"column",width:"100%",marginLeft:"20px",maxHeight:'400px',overflowY:"scroll"}}>
            <div style={{display:"flex",flexDirection:'column',marginLeft:"5px"}}>
                <LabelHeading text={"Dining & Cutlery"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} />
                <div style={{display:'flex',flexDirection:'row',marginLeft:"5px"}}>
                  
                    <DecorContainer setFunction={setDiningStyleModalState}  image={diningStyle} name={"Dining Style"} /> 
                    <DecorContainer setFunction={setCutleryTypeModalState}  image={cutlery} name={"Cutlery"} /> 
                </div>
            </div>
            <div style={{display:"flex",flexDirection:'column',marginLeft:"5px"}}>
            <LabelHeading text={"Sound "} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} />
                <div style={{display:'flex',flexDirection:'row',marginLeft:"5px"}}>
                <DecorContainer setFunction={setSoundSystemModalState}  image={soundsystem} name={"Sound System"} />  
                </div>
            </div>
            <div style={{display:'flex',flexDirection:'column',marginTop:"10px",marginLeft:'10px'}}>
                <LabelHeading text={"Extra Room Selection ($5 / person)"} color={colors.secondary} fontSize={"14px"} margin={"5px 0px"} family={'Montserrat'} />
                <div style={{display:"flex",alignItems:"center"}}>
                    <div className="checkbox-wrapper-18">
                        <div className="round">
                            <input checked={isRoomSelected} onChange={handleRoomSelectedChange} type="checkbox" id="checkbox-18-room" />
                            <label htmlFor="checkbox-18-room"></label>
                        </div>
                    </div>
                    <label htmlFor="checkbox-18-room" style={{cursor: "pointer"}}>
                        <LabelHeading text={"Yes, I want an Extra Room."} color={colors.secondary} fontSize={"12px"} margin={"5px 5px"} family={'Montserrat'} />
                    </label>
                </div>
            </div>


            <div style={{display:'flex',flexDirection:'column',marginTop:"10px",marginLeft:'10px'}}>
                <LabelHeading text={"Security"} color={colors.secondary} fontSize={"14px"} margin={"5px 0px"} family={'Montserrat'} />
                <div style={{display:"flex",alignItems:"center"}}>
                    <div className="checkbox-wrapper-18">
                        <div className="round">
                            <input checked={isSecuritySelected} onChange={handleSecuritySelectedChange} type="checkbox" id="checkbox-18-sec" />
                            <label htmlFor="checkbox-18-sec"></label>
                        </div>
                    </div>
                    <label htmlFor="checkbox-18-sec" style={{cursor: "pointer"}}>
                        <LabelHeading text={"Yes, I want Security."} color={colors.secondary} fontSize={"12px"} margin={"5px 5px"} family={'Montserrat'} />
                    </label>
                </div>
            </div>

            <div style={{display:'flex',flexDirection:'column',marginTop:"10px",marginLeft:'10px'}}>
                <LabelHeading text={"Valet Parking"} color={colors.secondary} fontSize={"14px"} margin={"5px 0px"} family={'Montserrat'} />
                <div style={{display:"flex",alignItems:"center"}}>
                    <div className="checkbox-wrapper-18">
                        <div className="round">
                            <input checked={isValetSelected} onChange={handleValetSelectedChange} type="checkbox" id="checkbox-18-valet" />
                            <label htmlFor="checkbox-18-valet"></label>
                        </div>
                    </div>
                    <label htmlFor="checkbox-18-valet" style={{cursor: "pointer"}}>
                        <LabelHeading text={"Yes, I want Valet Parking."} color={colors.secondary} fontSize={"12px"} margin={"5px 5px"} family={'Montserrat'} />
                    </label>
                </div>
            </div>

            
    </div>
    )
}

export default SelectOther;