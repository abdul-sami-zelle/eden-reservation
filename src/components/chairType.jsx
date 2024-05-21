import React, { useEffect, useState, useRef } from 'react';
import fruiteJuice1 from '../../public/fruiteJuice1.png';
import fruiteJuice2 from '../../public/fruiteJuice2.png';
import coffee11 from '../../public/coffee11.png';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

function ChairType({name,ppg,forp,img,isSelected,onclickFunct,data,haveEachOption}) {
    const [value, setValue] = useState(0);

    // Function to handle incrementing the value
    const incrementValue = () => {
        setValue(prevValue => prevValue + 1);
    };

    // Function to handle decrementing the value
    const decrementValue = () => {
        setValue(prevValue => (prevValue > 0 ? prevValue - 1 : 0));
    };
    return(
        <div className="chairType">
            <div className="chairImg">
                <img src={img} alt="" srcset="" />
            </div>
            <div className="nameChair">
                <h2>{name}</h2>
                {!haveEachOption? <h3> ${ppg} Each</h3>:<h3>Description</h3>}
                {/* <div style={{marginTop:"5px"}} className="quantity">
                    <div className='leftQuantityBtn' onClick={decrementValue}><MinusOutlined /></div>
                    <input
                        type="number"
                        value={value}
                        onChange={e => setValue(parseInt(e.target.value) || 0)} // Ensure value is always a number
                    />
                    <div className='rightQuantityBtn' onClick={incrementValue}><PlusOutlined /></div>
                </div> */}
               
            </div>
            <div className="chairTotal">
            {!isSelected ?<button className="drinkContainerBtn" onClick={()=>{
                    onclickFunct(data);
                }} >Select</button>:<button className="drinkContainerBtn" onClick={()=>{
                    onclickFunct(null);
                }} >Remove</button>}
            </div> 
            {/* <div className="nameDescrSubDrink">
                <h2>{name}</h2>
                <h3>Price per Glass : ${ppg}</h3>
            </div>
            <div className="quanitySubDrink">
                <div className="quantity">
                    <div className='leftQuantityBtn' onClick={decrementValue}><MinusOutlined /></div>
                    <input
                        type="number"
                        value={value}
                        onChange={e => setValue(parseInt(e.target.value) || 0)} // Ensure value is always a number
                    />
                    <div className='rightQuantityBtn' onClick={incrementValue}><PlusOutlined /></div>
                </div>
            </div>
            <div className="subTotalSubDrink">
                <h2>
                    $ {ppg*value}
                </h2>
            </div> */}
        </div>
    )
}

export default ChairType