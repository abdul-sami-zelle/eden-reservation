import React, { useEffect, useState, useRef,useContext } from 'react';
import MainContext from '../context/mainContext';
import MainContextProvider from '../context/mainContextProvider';
import ShadowText from "./shadowText";
import { colors } from "./colors";
import Heading4 from "./heading4";
import beverage from '../assets/beverage.png'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import infoIcon from '../assets/infoIcon.png';
// import MainContext from '../context/mainContext';


function DecorContainer2({ image, name ,setFunction,isSelected}) {
    const [added, setAddedValue] = useState(false);
    const [value, setValue] = useState(0);

    // Function to handle incrementing the value
    const incrementValue = () => {
        setValue(prevValue => prevValue + 1);
    };

    // Function to handle decrementing the value
    const decrementValue = () => {
        setValue(prevValue => (prevValue > 0 ? prevValue - 1 : 0));
    };
    const {selectedFoodPackage,selectedFoodTypeName,summaryTableData,setSummaryTableData} = useContext(MainContext);

    return (
        <div className="drinksContainer">
            <img src={image} alt="" srcset="" />
            <div style={{ display: "flex", flexDirection: "column" ,marginLeft:"5px"}}>
                <h2>{name}</h2>
                {isSelected ? <button onClick={() => {
                    if (selectedFoodPackage !== null && selectedFoodTypeName !== 'Beverages') {
                        setFunction(true);
                    } else if(selectedFoodPackage === null && selectedFoodTypeName === 'Beverages'){
                        setFunction(true);
                    }
                     else {
                        console.log("empty")
                    }
                    
                     }} className="drinkContainerBtn">Change</button> : <button onClick={() => {
                    if (selectedFoodPackage !== null && selectedFoodTypeName !== 'Beverages') {
                        setFunction(true);
                    } else if(selectedFoodPackage === null && selectedFoodTypeName === 'Beverages'){
                        setFunction(true);
                    }
                     else {
                        console.log("empty")
                    }
                    
                     }} className="drinkContainerBtn">Select Options</button>}
            </div>

            {/* <div onClick={()=>{}} className="infoIcon">
                <img src={infoIcon} alt="" srcset="" />
            </div> */}

        </div>
    )
}

export default DecorContainer2;