import React, { useEffect, useState, useRef,useContext } from 'react';
import MainContext from '../context/mainContext';
import FoodOption from '../utils/foodOptions';
import LabelHeading from '../utils/labelsHeading';
import { colors } from '../utils/colors';
import SelectField from '../utils/selectField';
import SideStepper1 from './sideStepper1';
import SelectField2 from '../utils/selectField2';
import DrinksContainer from '../utils/drinksContainer';
import beverages from '../../public/beverage.png';


function SelectFood() {
    

    const { foodTypes ,selectedFoodType, setFoodType ,selectedFoodTypeName, selectedFoodPackages,setSelectedFoodPackages,setFoodPackage,selectedFoodPackage,} = useContext(MainContext);

      
    return (
        <div className='step4Part1' style={{display:"flex",flexDirection:"column",width:"100%",marginLeft:"20px",maxHeight:'400px',overflowY:"scroll"}}>
        <div style={{display:'flex',flexDirection:'column'}}>
        <LabelHeading text={"Select Food"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} />
        <div style={{display:"flex"}}>
            {foodTypes.map((item, index) => (
                <FoodOption name={item.name} selected={selectedFoodType===item.id} id={item.id} packages={item.packages} />
            ))}
            {/* <FoodOption name={"Breakfast"} selected={true} />
            <FoodOption name={"Lunch"} selected={false} />
            <FoodOption name={"Dinner"} selected={false} /> */}
        </div>
        </div>
        <div style={{display:'flex',flexDirection:'column'}}>
        <LabelHeading text={`Select ${selectedFoodTypeName} Package`} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} />
        <SelectField2
                    options={selectedFoodPackages}
                    placeholder={`Select ${selectedFoodTypeName} Package`}
                    label=""
                    onChange={setFoodPackage}
                    value={selectedFoodPackage}
                    width="300px"
                    backgroundColor={colors.primary}
                />
        </div>
        <div style={{display:'flex',flexDirection:'column'}}>
         <LabelHeading text={"Beverages"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} />
         <div style={{display:"flex"}}>
            <DrinksContainer image={beverages} name={"Fruit Juices"} />
            <DrinksContainer image={beverages} name={"Soft Drinks"} />
            <DrinksContainer image={beverages} name={"Mocktails"} />
         </div>
        </div>
        <div style={{display:'flex',flexDirection:'column',marginTop:'20px'}}>
         <LabelHeading text={"Hot Beverages"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} />
         <div style={{display:"flex"}}>
            <DrinksContainer image={beverages} name={"Tea"} />
            <DrinksContainer image={beverages} name={"Coffee"} />
            <DrinksContainer image={beverages} name={"Hot Chocolate"} />
         </div>
        </div>
        <div style={{display:'flex',flexDirection:'column',marginTop:'20px'}}>
         <LabelHeading text={"Sparkling Beverages"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} />
         <div style={{display:"flex"}}>
            <DrinksContainer image={beverages} name={"Fruit Juices"} />
            <DrinksContainer image={beverages} name={"Soft Drinks"} />
            <DrinksContainer image={beverages} name={"Mocktails"} />
         </div>
        </div>
    </div>
    )
}

export default SelectFood;