import React, { useEffect, useState, useRef, useContext } from 'react';
import MainContext from '../context/mainContext';
import FoodOption from '../utils/foodOptions';
import LabelHeading from '../utils/labelsHeading';
import { colors } from '../utils/colors';
import SelectField from '../utils/selectField';
import SideStepper1 from './sideStepper1';
import SelectField2 from '../utils/selectField2';
import DrinksContainer from '../utils/drinksContainer';
import beverages from '../assets/beverage.png';
import diningStyle from '../assets/diningStyle.png';
import dessert from '../assets/dessert.png';
import tea from '../assets/tea.png';
import juice from '../assets/juice.png';
// import diningStyle from '../assets/diningStyle.png';
import cutlery from '../assets/cutlery.png';
import DecorContainer from '../utils/decorSelectors';
import DecorContainer2 from '../utils/decorSelectors2';
import CheckBox from './CheckBox2/checkBox';
import InputField from '../utils/inputField';
import TextAreaField from '../utils/testAreaField';


function SelectFood() {


    const {
        foodTypes,
        selectedFoodType,
        setFoodType,
        selectedFoodTypeName,
        selectedFoodPackages,
        setSelectedFoodPackages,
        setFoodPackage,
        selectedFoodPackage,
        activeDataSet,
        setActiveDataSet,
        appetizers, dessertS, beverageS, mainEntreeS, selectedPackageDetails, calculatePackagePrice, teaCoffee, juicesDrinks, setDiningStyleModalState,
        setCutleryTypeModalState,
        selectedDiningStyleType, foodByUs, foodByCustomer, handleCheckboxFoodBy,restaurantName, setRestaurantName,foodByCustDescription,setFoodByCustDescription
    } = useContext(MainContext);

    const textAreasConfig = [
        {
            showCount: false,
            maxLength: 10,
            placeholder: `Note`,
            label: `Note`,
            height: 45,
            resize: true,
            width: "100%",
           
        },
    ];


    return (
        <div className='step4Part1' style={{ display: "flex", flexDirection: "column", width: "100%", marginLeft: "20px", maxHeight: '400px', overflowY: "scroll" }}>

            <div style={{
                    display: "flex",
                }} >
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    width:"50%"
                }}>
                    <LabelHeading text={"Event Food By"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} />

                    <div style={{
                        display: "flex",
                        width: "88%",
                        alignItems: "center",
                        justifyContent: "flex-start"
                    }}>

                        <label htmlFor="cbx-22" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <CheckBox id="cbx-22" isChecked={foodByCustomer} onChange={() => handleCheckboxFoodBy('cbx-22')} />
                            <span style={{
                                marginBottom: 5,
                                fontFamily: 'poppins !important',
                                color: '#73787c',
                                fontWeight: '500',
                                fontSize: "15px",
                                marginLeft: 8
                            }}>
                                By Customer
                            </span>
                        </label>

                        <div style={{
                            width: "50px"
                        }}>

                        </div>



                        <label htmlFor="cbx-11" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                            <CheckBox id="cbx-11" isChecked={foodByUs} onChange={() => handleCheckboxFoodBy('cbx-11')} />
                            <span style={{
                                marginBottom: 5,
                                fontFamily: 'poppins !important',
                                color: '#73787c',
                                fontWeight: '500',
                                fontSize: "15px",
                                marginLeft: 8
                            }}>
                                By Edengardens
                            </span>
                        </label>
                    </div>
                </div>
                <div style={{
                    width:"50%",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"flex-start"
                }}>
                    <LabelHeading text={"Restaurant Name"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} />
                     <InputField
                             
                                placeholder="Restaurant Name"
                                width={"90%"}
                                type="text"
                                value={restaurantName}
                                onChange={(value) => {
                                    setRestaurantName(value.target.value);
                                }}
                                
                            />
                </div>
            </div>
            <LabelHeading text={"Food Details"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} />
            <TextAreaField
                                 classname={"foodNote"}
                                placeholder='Food Description'
                                height={160}
                                style={{ padding: '6px',height:"160px" }}
                                // label="Hello"
                                autoSize={{ minRows: 1, maxRows: 7 }}
                                textAreas={textAreasConfig}
                                width={"95%"}
                                value={foodByCustDescription}
                                onChange={(e) => setFoodByCustDescription(e.target.value)}
                            
                            />

            <div className='Step4ContainerSections'>
                <LabelHeading text={"Select Food"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} />
                <div className='foodTypes1'>
                    {foodTypes.map((item, index) => (
                        <FoodOption name={item.name} selected={selectedFoodType === item.id} id={item.id} packages={item.packages} />
                    ))}
                    {/* <FoodOption name={"Breakfast"} selected={true} />
            <FoodOption name={"Lunch"} selected={false} />
            <FoodOption name={"Dinner"} selected={false} /> */}
                </div>
            </div>
            {selectedFoodTypeName === 'Beverages' ? <></> : <div style={{ display: 'flex', alignItems: 'start' }}>
                <div className='Step4ContainerSections'>
                    <LabelHeading text={`Select Package`} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} />
                    <SelectField2
                        options={selectedFoodPackages}
                        placeholder={`Select Package`}
                        label=""
                        onChange={setFoodPackage}
                        value={selectedFoodPackage}
                        width="200px"
                        backgroundColor={colors.primary}

                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '25px', alignItems: 'center', justifyContent: "center" }}>
                    {/* <LabelHeading text={``} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} /> */}
                    {/* <LabelHeading text={`$ ${calculatePackagePrice(selectedPackageDetails)} per person`} color={colors.secondary} fontSize={"14px"} margin={"45px 0 0 0"} family={'Montserrat'} /> */}
                    <div style={{ margin: '45px 0 0 0' }}><span style={{ fontSize: '24px', fontFamily: 'Montserrat', fontWeight: '500' }}>{`$ ${selectedFoodType === '5' ? "0" : calculatePackagePrice(selectedPackageDetails)}`}</span><span style={{ fontSize: '12px', fontFamily: 'Montserrat', fontWeight: '600' }}> per person</span></div>

                </div>
            </div>}
            {selectedFoodTypeName === 'Beverages' ? <></> : <div className='packageItemsSelection'>

                <div className='Step4ContainerSections'>
                    <LabelHeading text={"Select Appetizers"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} />
                    <div className='Step4ContainerSections_0' >
                        <DrinksContainer data={appetizers} image={diningStyle} name={"Appetizers"} labelName={'appetizers'} />
                        {/* <DrinksContainer image={beverages} name={"Soft Drinks"} />
            <DrinksContainer image={beverages} name={"Mocktails"} /> */}
                    </div>
                </div>

                <div className='Step4ContainerSections'>
                    <LabelHeading text={"Select Main Entree"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} />
                    <div className='Step4ContainerSections_0'>
                        <DrinksContainer data={mainEntreeS} image={diningStyle} name={"Main Entree"} labelName={'mainEntrees'} />
                        {/* <DrinksContainer image={beverages} name={"Soft Drinks"} />
            <DrinksContainer image={beverages} name={"Mocktails"} /> */}
                    </div>
                </div>


                <div className='Step4ContainerSections'>
                    <LabelHeading text={"Select Dessert"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} />
                    <div className='Step4ContainerSections_0'>
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
            <div className='Step4ContainerSections' style={{ marginTop: '20px' }}>
                <LabelHeading text={"Select Beverages"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} />
                <div className='packageBeveragesSelection'>
                    <DrinksContainer data={teaCoffee} image={tea} name={"Tea / Coffee"} labelName={"teaCoffee"} />
                    <div className="distanceBeverages"></div>
                    <DrinksContainer data={juicesDrinks} image={juice} name={"Juices / Drinks"} labelName={"juicesDrinks"} />
                    {selectedFoodTypeName === 'Beverages' ? <div style={{ margin: '15px 0 0 0' }}><span style={{ fontSize: '24px', fontFamily: 'Montserrat', fontWeight: '500' }}>{`$ ${calculatePackagePrice(selectedPackageDetails)}`}</span><span style={{ fontSize: '12px', fontFamily: 'Montserrat', fontWeight: '600' }}> per person</span></div> : <></>}
                </div>
            </div>

            <div className='Step4ContainerSections'>
                <LabelHeading text={"Dining & Cutlery"} color={colors.secondary} fontSize={"14px"} margin={"10px 0px"} family={'Montserrat'} />
                <div className='tableSetupType' style={{ display: 'flex', flexDirection: 'row', marginLeft: "0.5px" }}>

                    <DecorContainer2 setFunction={setDiningStyleModalState} isSelected={selectedDiningStyleType !== null ? true : false} image={diningStyle} name={"Dining Style"} />
                    <div className="distanceBeverages"></div>
                    <DecorContainer2 setFunction={setCutleryTypeModalState} image={cutlery} name={"Cutlery"} />
                </div>
            </div>

        </div>
    )
}

export default SelectFood;