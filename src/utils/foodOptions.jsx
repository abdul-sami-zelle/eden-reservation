import ShadowText from "./shadowText";
import { colors } from "./colors";
import Heading4 from "./heading4";
import checkmark1 from '../assets/checkmark1.png'
import React, {useContext} from "react";
import MainContext from "../context/mainContext";
function FoodOption({name,selected,id,packages}) {

    const { setFoodType , setFoodTypeName , setFoodTypeSelection,selectedFoodPackages,setSelectedFoodPackages ,setSelectedFoodPackage,calculatePackagePrice,setSelectedPackageDetails} = useContext(MainContext);

    return (
    <div onClick={()=>{
        setFoodType(id);
        setFoodTypeSelection(name);
        setSelectedFoodPackages(packages);
        setSelectedFoodPackage(null);
        console.log(selectedFoodPackages);
        if (name==='Beverages') {
            setSelectedPackageDetails( {
                    label:"Create Your Own",
                    value:"cyo",
                    icon1:"../assets/artexh.png",
                    icon2:"../assets/artexh0.png",
                    appetizers:[],
                    mainEntrees:[],
                    desserts:[],
                    teaCoffee:[],
                    juicesDrinks:[]
                })
        }
        console.log(name)
    }} className="foodOptionMain">
          <div  className={ `foodOption ${selected?'selected':''}`}>
                <img style={{display:`${selected?"block":"none"}`}} src={checkmark1} alt="" srcset="" />
                {name}         
            </div>
    </div>
     
    )
}

export default FoodOption;