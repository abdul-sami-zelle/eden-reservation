import React, { useEffect, useState, useRef ,useContext} from 'react';
import Modal from 'antd/es/modal/Modal';
import SubDrink1 from '../components/subDrink1';
import MainContext from '../context/mainContext';

function BeveragesTypeModal({}) {
    const {beveragesModalState,setBeveragesModal,activeHeadingPopUp,activeDataSet,setActiveDataSet,selectedPackageDetails,activeHeadingPopUpLabel,setSelectedPackageDetails} = useContext(MainContext);
    const handleOk = () => {
        setBeveragesModal(false);
    };
    const handleCancel = () => {
        setBeveragesModal(false);
    };


    const updateFunction = (parentName,id,name,pacFor,ppg) =>{
        let selectedPac = selectedPackageDetails;
               
                if (parentName==='Appetizers') {
                    setSelectedPackageDetails(prevState => ({
                        ...prevState,
                        appetizers: [...prevState.appetizers, {
                            id: id,
                            name:name,
                            pacFor:pacFor,
                            cost:ppg,
                            constant1:"false",
                        }]
                      }))
                } else if(parentName==='Desserts'){
                    setSelectedPackageDetails(prevState => ({
                        ...prevState,
                        desserts: [...prevState.desserts, {
                            id: id,
                            name:name,
                            pacFor:pacFor,
                            cost:ppg,
                            constant1:"false",
                        }]
                      }))
                } else if(parentName==='Main Entree'){
                    setSelectedPackageDetails(prevState => ({
                        ...prevState,
                        mainEntrees: [...prevState.mainEntrees, {
                            id: id,
                            name:name,
                            pacFor:pacFor,
                            cost:ppg,
                            constant1:"false",
                        }]
                      }))
                }else if(parentName==='Tea / Coffee'){
                    setSelectedPackageDetails(prevState => ({
                        ...prevState,
                        teaCoffee: [...prevState.teaCoffee, {
                            id: id,
                            name:name,
                            pacFor:pacFor,
                            cost:ppg,
                            constant1:"false",
                        }]
                      }))
                }else if(parentName==='Juices / Drinks'){
                    setSelectedPackageDetails(prevState => ({
                        ...prevState,
                        juicesDrinks: [...prevState.juicesDrinks, {
                            id: id,
                            name:name,
                            pacFor:pacFor,
                            cost:ppg,
                            constant1:"false",
                        }]
                      }))
                }
                 else {
                    console.log("no")
                }

                console.log(selectedPac);
                // setSelectedFoodPackage()
     
    }


    const deleteFunction = (parentName, id) => {
        if (parentName === 'Appetizers') {
            setSelectedPackageDetails(prevState => ({
                ...prevState,
                appetizers: prevState.appetizers.filter(item => item.id !== id)
            }));
        } else if (parentName === 'Desserts') {
            setSelectedPackageDetails(prevState => ({
                ...prevState,
                desserts: prevState.desserts.filter(item => item.id !== id)
            }));
        } else if (parentName === 'Main Entree') {
            setSelectedPackageDetails(prevState => ({
                ...prevState,
                mainEntrees: prevState.mainEntrees.filter(item => item.id !== id)
            }));
        } else if (parentName === 'Tea / Coffee') {
            setSelectedPackageDetails(prevState => ({
                ...prevState,
                teaCoffee: prevState.teaCoffee.filter(item => item.id !== id)
            }));
        } else if (parentName === 'Juices / Drinks') {
            setSelectedPackageDetails(prevState => ({
                ...prevState,
                juicesDrinks: prevState.juicesDrinks.filter(item => item.id !== id)
            }));
        } 
        else {
            console.log("Unknown category");
        }
    };

   

    return (
        <Modal 
            title={<span style={{ fontSize: '24px', fontFamily: 'Montserrat', fontWeight: 'bold', color: 'var(--primary-color)' }}>{activeHeadingPopUp}</span>}
            centered
            open={beveragesModalState}
            onOk={handleOk}
            onCancel={handleCancel}
            okButtonProps={{ style: { background: 'var(--primary-color)', borderColor: 'var(--primary-color)' } }}
            okText="Done"
            cancelButtonProps={{ style: { display: 'none' } }}
        >
            {activeDataSet &&
                activeDataSet.map((data, index) => {
                    const isSelected = 
                        activeHeadingPopUpLabel === 'appetizers' ? 
                        selectedPackageDetails.appetizers.some(selectedItem => selectedItem.id === data.id) :
                        activeHeadingPopUpLabel === 'desserts' ? 
                        selectedPackageDetails.desserts.some(selectedItem => selectedItem.id === data.id) :
                        activeHeadingPopUpLabel === 'mainEntrees' ? 
                        selectedPackageDetails.mainEntrees.some(selectedItem => selectedItem.id === data.id) :
                        activeHeadingPopUpLabel === 'teaCoffee' ? 
                        selectedPackageDetails.teaCoffee.some(selectedItem => selectedItem.id === data.id) :
                        activeHeadingPopUpLabel === 'juicesDrinks' ? 
                        selectedPackageDetails.juicesDrinks.some(selectedItem => selectedItem.id === data.id) :
                        null;
    
                    const isEditable = 
                        activeHeadingPopUpLabel === 'appetizers' ? 
                        selectedPackageDetails.appetizers.some(selectedItem => selectedItem.id === data.id && selectedItem.constant1 === 'true') :
                        activeHeadingPopUpLabel === 'desserts' ? 
                        selectedPackageDetails.desserts.some(selectedItem => selectedItem.id === data.id && selectedItem.constant1 === 'true') :
                        activeHeadingPopUpLabel === 'mainEntrees' ? 
                        selectedPackageDetails.mainEntrees.some(selectedItem => selectedItem.id === data.id && selectedItem.constant1 === 'true') :
                        false;
    
                    return (
                        <SubDrink1 
                            key={data.id} 
                            isSelected={isSelected} 
                            name={data.name} 
                            ppg={data.cost} 
                            pacFor={data.pacFor}
                            id={data.id}
                            parentName={activeHeadingPopUp}
                            updatedFunct1={updateFunction}
                            constant1={isEditable}
                            deleteFunct1={deleteFunction}
                        />
                    );
                })
            }
        </Modal>
    );
    
}

export default BeveragesTypeModal;