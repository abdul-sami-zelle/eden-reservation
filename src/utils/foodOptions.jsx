import ShadowText from "./shadowText";
import { colors } from "./colors";
import Heading4 from "./heading4";
import checkmark1 from '../../public/checkmark1.png'
import React, {useContext} from "react";
import MainContext from "../context/mainContext";
function FoodOption({name,selected,id,packages}) {

    const { setFoodType , setFoodTypeName , selectedFoodPackages,setSelectedFoodPackages } = useContext(MainContext);

    return (
    <div onClick={()=>{
        setFoodType(id);
        setFoodTypeName(name);
        setSelectedFoodPackages(packages);
    }} className="foodOptionMain">
          <div  className={ `foodOption ${selected?'selected':''}`}>
                <img style={{display:`${selected?"block":"none"}`}} src={checkmark1} alt="" srcset="" />
                {name}         
            </div>
    </div>
     
    )
}

export default FoodOption;