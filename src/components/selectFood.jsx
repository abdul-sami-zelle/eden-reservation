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
import diningStyle from '../../public/diningStyle.png';
import dessert from '../../public/dessert.png';
import tea from '../../public/tea.png';
import juice from '../../public/juice.png';


function SelectFood() {
    

    const { 
        foodTypes ,
        selectedFoodType, 
        setFoodType ,
        selectedFoodTypeName, 
        selectedFoodPackages,
        setSelectedFoodPackages,
        setFoodPackage,
        selectedFoodPackage,
        activeDataSet,
        setActiveDataSet,
        appetizers,dessertS,beverageS,mainEntreeS,selectedPackageDetails,calculatePackagePrice,teaCoffee,juicesDrinks,
    } = useContext(MainContext);

      
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
       {selectedFoodTypeName==='Beverages'? <></> : <div style={{display:'flex',alignItems:'start'}}>
         <div style={{display:'flex',flexDirection:'column'}}>
         <LabelHeading text={`Select ${selectedFoodTypeName} Package`} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} />
         <SelectField2
                    options={selectedFoodPackages}
                    placeholder={`Select ${selectedFoodTypeName} Package`}
                    label=""
                    onChange={setFoodPackage}
                    value={selectedFoodPackage}
                    width="200px"
                    backgroundColor={colors.primary}
               
                />
         </div>
         <div style={{display:'flex',flexDirection:'column',marginLeft:'30px',alignItems:'center',justifyContent:"center"}}>
         {/* <LabelHeading text={``} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} /> */}
         <LabelHeading text={`$ ${calculatePackagePrice(selectedPackageDetails)} / person`} color={colors.secondary} fontSize={"14px"} margin={"45px 0 0 0"} family={'Montserrat'} />
         
         </div>
        </div>}
{ selectedFoodTypeName==='Beverages'? <></> :      <div style={{display:'flex',flexDirection:'row'}}>

       <div style={{display:'flex',flexDirection:'column'}}>
         <LabelHeading text={"Select Appetizers"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} />
         <div style={{display:"flex"}}>
            <DrinksContainer data={appetizers} image={diningStyle} name={"Appetizers"} labelName={'appetizers'} />
            {/* <DrinksContainer image={beverages} name={"Soft Drinks"} />
            <DrinksContainer image={beverages} name={"Mocktails"} /> */}
         </div>
        </div>

        <div style={{display:'flex',flexDirection:'column'}}>
         <LabelHeading text={"Select Main Entree"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} />
         <div style={{display:"flex"}}>
            <DrinksContainer data={mainEntreeS} image={diningStyle} name={"Main Entree"} labelName={'mainEntrees'} />
            {/* <DrinksContainer image={beverages} name={"Soft Drinks"} />
            <DrinksContainer image={beverages} name={"Mocktails"} /> */}
         </div>
        </div>


        <div style={{display:'flex',flexDirection:'column'}}>
         <LabelHeading text={"Select Dessert"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} />
         <div style={{display:"flex"}}>
            <DrinksContainer data={dessertS} image={dessert} name={"Desserts"} labelName={'desserts'} />
            {/* <DrinksContainer image={beverages} name={"Soft Drinks"} />
            <DrinksContainer image={beverages} name={"Mocktails"} /> */}
         </div>
        </div>


        

       </div>}
       {/* <div style={{display:'flex',flexDirection:'column',marginTop:'20px'}}>
         <LabelHeading text={"Select Beverages"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} />
         <div style={{display:"flex"}}>
            <DrinksContainer  image={beverages} name={"Beverages"} />
         </div>
        </div> */}
        <div style={{display:'flex',flexDirection:'column',marginTop:'20px'}}>
         <LabelHeading text={"Select Beverages"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} />
         <div style={{display:"flex"}}>
            <DrinksContainer data={teaCoffee} image={tea} name={"Tea / Coffee"} labelName={"teaCoffee"} />
            <DrinksContainer data={juicesDrinks} image={juice} name={"Juices / Drinks"} labelName={"juicesDrinks"} />
         </div>
        </div>
     
    </div>
    )
}

export default SelectFood;