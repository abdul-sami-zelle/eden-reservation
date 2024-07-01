import React, { useEffect, useState, useRef,useContext } from 'react';
import MainContext from '../context/mainContext';
import MainContextProvider from '../context/mainContextProvider';
import ShadowText from "./shadowText";
import { colors } from "./colors";
import Heading4 from "./heading4";
import beverage from '../assets/beverage.png'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import infoIcon from '../assets/infoIcon.png';
import security from '../assets/security.png'


function OthersContainer2({name,name2 ,isChecked,onChangedFn,isQuanitity}) {
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

    const {totalGuardsSelected, setTotalGuardsSelected,isSecuritySelected,
        handleSecuritySelectedChange} = useContext(MainContext);

    return (
        <div style={{display:"flex",marginTop:'10px',marginLeft:"10px"}}>
            <label className="OthersContainer2" htmlFor="checkbox-18-sec" style={{cursor: "pointer"}}>
    
    {/* <img src={image} alt="" srcset="" /> */}
    <div className='OthersContainer2_inner'>
        <img src={security} alt="" />
        <h2>{name}</h2>
       
        {isSecuritySelected?<h3>Costs $5 /Security Person</h3>:<h3>{name2}</h3>}
    </div>

          <div className='radioButton_0'>
          <div className="checkbox-wrapper-18">
                <div className="round">
                    <input checked={isSecuritySelected} onChange={handleSecuritySelectedChange} type="checkbox" id="checkbox-18-sec" />
                    <label htmlFor="checkbox-18-sec"></label>
                </div>
            </div>
          </div>


</label>

{isSecuritySelected? <div className="quantity2">

<div className='leftQuantityBtn2' onClick={()=>{
    setTotalGuardsSelected(pre=>pre-1);
}}><MinusOutlined /></div>
<div className="valueQuantity2">
    {totalGuardsSelected}
</div>
{/* <input
    type="number"
    value={value}
    onChange={e => setValue(parseInt(e.target.value) || 0)} // Ensure value is always a number
/> */}
<div className='rightQuantityBtn2' onClick={()=>{
    setTotalGuardsSelected(pre => pre +1);
}}><PlusOutlined /></div>

</div>:<></>}
        </div>
    )
}

export default OthersContainer2;