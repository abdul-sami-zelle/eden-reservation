import React, { useEffect, useState, useRef,useContext } from 'react';
import MainContext from '../context/mainContext';
import MainContextProvider from '../context/mainContextProvider';
import ShadowText from "./shadowText";
import { colors } from "./colors";
import Heading4 from "./heading4";
import beverage from '../../public/beverage.png'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import infoIcon from '../../public/infoIcon.png'


function DrinksContainer({ image, name ,data,labelName}) {
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

    const {setBeveragesModal,activeHeadingPopUp,setActiveHeadingPopUp,setActiveDataSet,activeHeadingPopUpLabel,setActiveHeadingPopUpLabel}  = useContext(MainContext);
    return (
        <div className="drinksContainer">
            <img src={image} alt="" srcset="" />
            <div style={{ display: "flex", flexDirection: "column" ,marginLeft:"5px"}}>
                <h2>{name}</h2>
                {added ? <div className="quantity">

                    <div className='leftQuantityBtn' onClick={decrementValue}><MinusOutlined /></div>
                    <input
                        type="number"
                        value={value}
                        onChange={e => setValue(parseInt(e.target.value) || 0)} // Ensure value is always a number
                    />
                    <div className='rightQuantityBtn' onClick={incrementValue}><PlusOutlined /></div>

                </div> : <button onClick={() => {
                    console.log(`${data} here is data`);
                    setActiveHeadingPopUp(name);
                    setActiveHeadingPopUpLabel(labelName);
                    setActiveDataSet(data);
                    console.log(data);
                    setBeveragesModal(true); }} className="drinkContainerBtn">Select Options</button>}
            </div>

            <div onClick={()=>{}} className="infoIcon">
                <img src={infoIcon} alt="" srcset="" />
            </div>

        </div>
    )
}

export default DrinksContainer;