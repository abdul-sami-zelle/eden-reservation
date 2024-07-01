import React, { useEffect, useState, useRef,useContext } from 'react';
import MainContext from '../context/mainContext';
import MainContextProvider from '../context/mainContextProvider';
import ShadowText from "./shadowText";
import { colors } from "./colors";
import Heading4 from "./heading4";
import beverage from '../assets/beverage.png'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import infoIcon from '../assets/infoIcon.png';
import valet from "../assets/valet.png";


function ValetSelection({name,name2 ,isQuanitity}) {

    const {totalValetSelected, setTotalValetSelected,isValetSelected, handleValetSelectedChange} = useContext(MainContext);

    return (
        <div style={{display:'flex',marginTop:'10px',marginLeft:"10px"}}>


<label className="OthersContainer2" htmlFor="checkbox-18-valet" style={{cursor: "pointer"}}>
    
    {/* <img src={image} alt="" srcset="" /> */}
    <div className='OthersContainer2_inner'>
        <img src={valet} alt="" srcset="" />
        <h2>{name}</h2>
   
        {isValetSelected?<h3>Costs $5 /Valet Person</h3>:<h3>{name2}</h3>}
    </div>
    

    {/* <div onClick={()=>{}} className="infoIcon">
        <img src={infoIcon} alt="" srcset="" />
    </div> */}

          <div className='radioButton_0'>
          <div className="checkbox-wrapper-18">
                <div className="round">
                    <input checked={isValetSelected} onChange={handleValetSelectedChange} type="checkbox" id="checkbox-18-valet" />
                    <label htmlFor="checkbox-18-valet"></label>
                </div>
            </div>
          </div>





</label>
           {isValetSelected? <div className="quantity2">

           <div className='leftQuantityBtn2' onClick={()=>{
               setTotalValetSelected(pre=>pre-1);
           }}><MinusOutlined /></div>
           <div className="valueQuantity2">
               {totalValetSelected}
           </div>
           {/* <input
               type="number"
               value={value}
               onChange={e => setValue(parseInt(e.target.value) || 0)} // Ensure value is always a number
           /> */}
           <div className='rightQuantityBtn2' onClick={()=>{
               setTotalValetSelected(pre => pre +1);
           }}><PlusOutlined /></div>
           
           </div> :<></> }
        </div>
    )
}

export default ValetSelection;