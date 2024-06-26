import React from "react";
import back from '../../assets/back.png'
import forward from '../../assets/forward.png'

function CircularButtons({type,onpressed}) {
    return(
       <div className="circularButton" onClick={onpressed}>
            <img src={type==='back'? back:forward} alt="" srcset="" />
       </div>
    )
}

export default CircularButtons;