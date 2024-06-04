import React, { useEffect, useState, useRef ,useContext} from 'react';
import fruiteJuice1 from '../assets/fruiteJuice1.png';
import fruiteJuice2 from '../assets/fruiteJuice2.png';
import coffee11 from '../assets/coffee11.png';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import MainContext from '../context/mainContext';

function SubDrink1({name,ppg,forp,isSelected,id,pacFor,parentName,updatedFunct1,constant1,deleteFunct1}) {
    const [value, setValue] = useState(0);

    // Function to handle incrementing the value
    const incrementValue = () => {
        setValue(prevValue => prevValue + 1);
    };

    // Function to handle decrementing the value
    const decrementValue = () => {
        setValue(prevValue => (prevValue > 0 ? prevValue - 1 : 0));
    };

    const {selectedFoodPackage,setSelectedFoodPackage,setSelectedPackageDetails,selectedPackageDetails} = useContext(MainContext)
    return(
        <div className="subDrink">
            <div className="iconImgSubDrink1">
                <img src={forp==='J'?fruiteJuice1:forp==='H'?coffee11:fruiteJuice1} alt="" srcset="" />
            </div>
            <div className="nameDescrSubDrink">
                <h2>{name}</h2>
                <h3>Price per Person : ${ppg}</h3>
            </div>
            {(!isSelected)? <button className="drinkContainerBtn" onClick={()=>{
                updatedFunct1(parentName,id,name,pacFor,ppg,constant1);
            }} >Select</button>  :(isSelected && constant1===true)?"already Added":<button className="drinkContainerBtn" onClick={()=>{
                deleteFunct1(parentName,id);
            }} >Remove</button>}
            {/* <div className="subTotalSubDrink">
                <h2>
                    $ {ppg*value}
                </h2>
            </div> */}
        </div>
    )
}

export default SubDrink1