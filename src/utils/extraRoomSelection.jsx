import React, { useEffect, useState, useRef,useContext } from 'react';
import MainContext from '../context/mainContext';
import MainContextProvider from '../context/mainContextProvider';
import ShadowText from "./shadowText";
import { colors } from "./colors";
import Heading4 from "./heading4";
import beverage from '../assets/beverage.png'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import infoIcon from '../assets/infoIcon.png'


function ExtraRoomSelection({name,name2 }) {

    const {isRoomSelected,handleRoomSelectedChange} = useContext(MainContext);

    return (
        <label className="OthersContainer2" htmlFor="checkbox-18-room" style={{cursor: "pointer",marginTop:'10px',marginLeft:"10px"}}>
    
            {/* <img src={image} alt="" srcset="" /> */}
            <div className='OthersContainer2_inner'>
                <h2>{name}</h2>
               
                {isRoomSelected?<h3>Costs $5 /Person</h3>:<h3>{name2}</h3>}
            </div>
            

            {/* <div onClick={()=>{}} className="infoIcon">
                <img src={infoIcon} alt="" srcset="" />
            </div> */}

                  <div className='radioButton_0'>
                  <div className="checkbox-wrapper-18">
                            <div className="round">
                                <input checked={isRoomSelected} onChange={handleRoomSelectedChange} type="checkbox" id="checkbox-18-room" />
                                <label htmlFor="checkbox-18-room"></label>
                            </div>
                        </div>
                  </div>

       
        </label>
    )
}

export default ExtraRoomSelection;