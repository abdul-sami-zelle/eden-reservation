import React, { useEffect, useState, useRef } from 'react';
import LabelHeading from '../utils/labelsHeading';
import { colors } from '../utils/colors';
import SelectField from '../utils/selectField';
import Quanitity from '../utils/quantity';
import DrinksContainer from '../utils/drinksContainer';
import beverages from '../../public/beverage.png';
import coffee from '../../public/coffee.png';

function SelectDrink() {
    return (
        <div style={{display:"flex",flexDirection:"column",width:"100%",marginLeft:"20px"}}>
        <div style={{display:'flex',flexDirection:'column'}}>
         <LabelHeading text={"Beverages"} color={colors.secondary} fontSize={"16px"} margin={"0px 0px"} family={'Montserrat'} />
         <div style={{display:"flex"}}>
            <DrinksContainer image={beverages} name={"Fruit Juices"} />
            <DrinksContainer image={beverages} name={"Soft Drinks"} />
            <DrinksContainer image={beverages} name={"Mocktails"} />
         </div>
        </div>
        <div style={{display:'flex',flexDirection:'column',marginTop:'20px'}}>
         <LabelHeading text={"Hot Beverages"} color={colors.secondary} fontSize={"16px"} margin={"0px 0px"} family={'Montserrat'} />
         <div style={{display:"flex"}}>
            <DrinksContainer image={beverages} name={"Tea"} />
            <DrinksContainer image={beverages} name={"Coffee"} />
            <DrinksContainer image={beverages} name={"Hot Chocolate"} />
         </div>
        </div>
        <div style={{display:'flex',flexDirection:'column',marginTop:'20px'}}>
         <LabelHeading text={"Sparkling Beverages"} color={colors.secondary} fontSize={"16px"} margin={"0px 0px"} family={'Montserrat'} />
         <div style={{display:"flex"}}>
            <DrinksContainer image={beverages} name={"Fruit Juices"} />
            <DrinksContainer image={beverages} name={"Soft Drinks"} />
            <DrinksContainer image={beverages} name={"Mocktails"} />
         </div>
        </div>
        <div style={{display:'flex',flexDirection:'column'}}>
         
        {/* <LabelHeading text={"Select Breakfast Package"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} /> */}
        {/* <SelectField
                    options={options}
                    placeholder="Select your mood"
                    label=""
                    onChange={handleChange}
                    value={selectedValue}
                    width="300px"
                    backgroundColor={colors.primary}
                /> */}
        </div>
    </div>
    )
}

export default SelectDrink;