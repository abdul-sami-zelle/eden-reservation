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
import InputField from '../utils/inputField';
import { MinusOutlined,PlusOutlined } from '@ant-design/icons';

import OthersContainer2 from '../utils/securitySelection';
import ValetSelection from '../utils/valetSelection';
import ExtraRoomSelection from '../utils/extraRoomSelection';


function SelectOther() {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggleCheckbox = () => {
        setIsChecked(!isChecked);
    };
    const [value, setValue] = useState(1);
    const incrementValue = () => {
        setValue(prevValue => prevValue + 1);
    };

    // Function to handle decrementing the value
    const decrementValue = () => {
        setValue(prevValue => (prevValue > 0 ? prevValue - 1 : 0));
    };
    const {
         soundSystemModalState, setSoundSystemModalState,diningStyleModalState, setDiningStyleModalState,cutleryTypeModalState, setCutleryTypeModalState,isRoomSelected,handleRoomSelectedChange,isSecuritySelected,handleSecuritySelectedChange,isValetSelected,handleValetSelectedChange,
         totalRooms,setTotalRoom,handleTotalRoomInputChange,totalSecurity,setTotalSecurity,handleTotalSecurityInputChange,totalValet,setTotalValet,handleTotalValetInputChange,
         totalRoomsSelected, setTotalRoomsSelected,totalGuardsSelected, setTotalGuardsSelected,totalValetSelected, setTotalValetSelected,
        
        } = useContext(MainContext);
    return (
        <div className='step4Part1' style={{display:"flex",flexDirection:"column",width:"100%",marginLeft:"20px",maxHeight:'400px',overflowY:"scroll"}}>
            {/* <div style={{display:"flex",flexDirection:'column',marginLeft:"5px"}}>
                <LabelHeading text={"Dining & Cutlery"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} />
                <div className='tableSetupType' style={{display:'flex',flexDirection:'row',marginLeft:"5px"}}>
                  
                    <DecorContainer setFunction={setDiningStyleModalState}  image={diningStyle} name={"Dining Style"} /> 
                    <div className="distanceBeverages"></div>
                    <DecorContainer setFunction={setCutleryTypeModalState}  image={cutlery} name={"Cutlery"} /> 
                </div>
            </div> */}
            <div style={{display:"flex",flexDirection:'column',marginLeft:"5px"}}>
            <LabelHeading text={"Sound "} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} />
                <div style={{display:'flex',flexDirection:'row',marginLeft:"5px"}}>
                <DecorContainer setFunction={setSoundSystemModalState}  image={soundsystem} name={"Sound System"} />  
                </div>
            </div>
       
        <ExtraRoomSelection name={"Extra Room"} name2={"Tap to add Extra Room ($5 /person)"} />
        <OthersContainer2 name2={"Tap to add Security"} isQuanitity={true} name={"Security"} isChecked={isSecuritySelected} onChangedFn={handleSecuritySelectedChange} />
        <ValetSelection name2={"Tap to add Valet Staff"} name={"Valet Parking"} isQuanitity={true} />

        


            
    </div>
    )
}

export default SelectOther;