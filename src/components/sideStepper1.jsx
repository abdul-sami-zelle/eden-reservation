import selectfood1 from '../assets/selectfood1.png';
import selectfood2 from '../assets/selectfood2.png';
import selectdrink1 from '../assets/selectdrink1.png';
import selectdrink2 from '../assets/selectdrink2.png';
import selectdecor1 from '../assets/selectdecor1.png';
import selectdecor2 from '../assets/selectdecor2.png';
import other1 from '../assets/other1.png';
import other2 from '../assets/other2.png';
import AppContext from 'antd/es/app/context';
import MainContext from '../context/mainContext';
import React, {useContext} from 'react';

function SideStepper1() {
    const {activeStep,changeStepToPrevious,changeStepToNext,changeStepTo} = useContext(MainContext);
    return (
        <div className="sideStepper">
            <div onClick={()=>{
                changeStepTo(4);
            }} className="sideStepperOpt">
                <img src={activeStep===4? selectfood2 : selectfood1} alt="" srcset="" />
                {activeStep===4?<h6>Food Selection</h6>:<p>Food Selection</p>}
                { activeStep===4? <div className="dividerActive"></div>:<div className="dividerDeActive"></div>}
            </div>
            <div onClick={()=>{
                changeStepTo(5);
            }} className="sideStepperOpt">
                <img src={activeStep===5? selectdecor2 : selectdecor1} alt="" srcset="" />
                {activeStep===5?<h6>Decor Selection</h6>:<p>Decor Selection</p>}
                { activeStep===5? <div className="dividerActive"></div>:<div className="dividerDeActive"></div>}
            </div>
            <div onClick={()=>{
                changeStepTo(6);
            }} className="sideStepperOpt">
                <img src={activeStep===6? other2: other1} alt="" srcset="" />
                {activeStep===6?<h6>Other Selection</h6>:<p>Other Selection</p>}
                { activeStep===6? <div className="dividerActive"></div>:<div className="dividerDeActive"></div>}
            </div>
        </div>
    )
}

export default SideStepper1;