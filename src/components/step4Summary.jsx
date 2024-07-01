import React, {useContext} from "react";
import diningStyle from '../assets/diningStyle.png';
import other2 from '../assets/other2.png';
import decor22 from '../assets/independence.png';
import MainContext from "../context/mainContext";

function Step4Summary() {
    const {
        selectedPackageDetails,
        calculatePackagePrice,
        selectedFoodTypeName,
        selectedArrangement,
        selectedTable,
        selectedChairType,
        totalPersons,
        selectedStageTypeData,
        selectedMdType,
        selectedCenterpieceType,
        selectedLightingType,
        selectedDiningStyleTypeData,
        selectedCutleryStyleTypeData,
        isRoomSelected,totalRoomsSelected,
        isSecuritySelected,totalGuardsSelected,
        isValetSelected,totalValetSelected,eachRoomCost,eachGuardCost,eachValetCost,selectedSoundSystemType
    } = useContext(MainContext); 
    return (
        <>
        <div className="mainStep4Summary">
            {
                selectedFoodTypeName === 'None' ?<></> :
                <div className="foodSectionSummary">
                <div className="SectionSummaryHeader">
                    <div style={{display:"flex",alignItems:'center'}}>
                        <img height={"30px"} width={"30px"} src={diningStyle} alt="" srcset="" />
                        <div style={{display:'flex',flexDirection:'column'}}>
                            <h2>
                                {selectedFoodTypeName}
                            </h2>
                            <h4>
                                Package 1
                            </h4>
                        </div>
                    </div>

                    <h2>
                        {/* ${calculatePackagePrice(selectedPackageDetails)} */}
                    </h2>

                </div>
                <div className="SectionSummaryBody">
                    
                        {selectedPackageDetails.appetizers && selectedPackageDetails.appetizers.length > 0 && (
                        <div className="SectionSummaryBodyPart">
                            <div style={{display:'flex',flexDirection:'column'}}>
                            <>
                                <h3>Appetizers</h3>
                                <div className="step4SummaryDetails">
                                {selectedPackageDetails.appetizers.map((item, index) => (

                                    <div className="step4SummaryDetail">
                                        <h4>{item.name}</h4>
                                        <h5>...............</h5>
                                        <h6>${item.cost} /Person</h6>
                                    </div>
                                  
                                ))}
                                </div>
                               
                            </>
                            </div>  
                        </div>
                        )}


                        {selectedPackageDetails.desserts && selectedPackageDetails.desserts.length > 0 && (
                        <div className="SectionSummaryBodyPart">
                            <div style={{display:'flex',flexDirection:'column'}}>
                            <>
                                <h3>Desserts</h3>
                                
                                <div className="step4SummaryDetails">
                                {selectedPackageDetails.desserts.map((item, index) => (
                                   <div className="step4SummaryDetail">
                                   <h4>{item.name}</h4>
                                   <h5>...............</h5>
                                   <h6>${item.cost} /Person</h6>
                               </div>
                                ))}
                              
                                </div>
                               
                            </>
                            </div>  
                        </div>
                        )}


                        {selectedPackageDetails.mainEntrees && selectedPackageDetails.mainEntrees.length > 0 && (
                        <div className="SectionSummaryBodyPart">
                            <div style={{display:'flex',flexDirection:'column'}}>
                            <>
                                <h3>Main Entrees</h3>
                                <div className="step4SummaryDetails">
                                {selectedPackageDetails.mainEntrees.map((item, index) => (

                                    <div className="step4SummaryDetail">
                                   <h4>{item.name}</h4>
                                   <h5>...............</h5>
                                   <h6>${item.cost} /Person</h6>
                                    </div>
                                  
                                ))}
                                </div>
                               
                            </>
                            </div>  
                        </div>
                        )}



                        {selectedPackageDetails.teaCoffee && selectedPackageDetails.teaCoffee.length > 0 && (
                        <div className="SectionSummaryBodyPart">
                            <div style={{display:'flex',flexDirection:'column'}}>
                            <>
                                <h3>Tea / Coffee</h3>
                                <div className="step4SummaryDetails">
                                {selectedPackageDetails.teaCoffee.map((item, index) => (

                                    <div className="step4SummaryDetail">
                                  <h4>{item.name}</h4>
                                   <h5>...............</h5>
                                   <h6>${item.cost} /Person</h6>
                                    </div>
                                  
                                ))}
                                </div>
                               
                            </>
                            </div>  
                        </div>
                        )}


                        {selectedPackageDetails.juicesDrinks && selectedPackageDetails.juicesDrinks.length > 0 && (
                        <div className="SectionSummaryBodyPart">
                            <div style={{display:'flex',flexDirection:'column'}}>
                            <>
                                <h3>Juices / Drinks</h3>
                                <div className="step4SummaryDetails">
                                {selectedPackageDetails.juicesDrinks.map((item, index) => (

                                    <div className="step4SummaryDetail">
                                  <h4>{item.name}</h4>
                                   <h5>...............</h5>
                                   <h6>${item.cost}/Person</h6>
                                    </div>
                                  
                                ))}
                                </div>
                               
                            </>
                            </div>  
                        </div>
                        )}

<div className="SectionSummaryBodyPart">
                        <div style={{display:'flex',flexDirection:'column'}}>
                            <h3>
                                Dining Style
                            </h3>
                            <div className="step4SummaryDetails">
                                <div className="step4SummaryDetail">
                                  < h4>{selectedDiningStyleTypeData.name}</h4>
                                   <h5>...............</h5>
                                   <h6>${selectedDiningStyleTypeData.cost} /Person</h6>
                                </div>
                            </div>
                         
                        </div>
                    </div>
                    <div className="SectionSummaryBodyPart">
                        <div style={{display:'flex',flexDirection:'column'}}>
                            <h3>
                                Cutlery
                            </h3>
                            <div className="step4SummaryDetails">
                               <div className="step4SummaryDetail">
                               <h4>
                                   {selectedCutleryStyleTypeData.name}
                                </h4>
                                <h5>
                                    ...............
                                </h5>
                                <h6>
                                    ${selectedCutleryStyleTypeData.cost} /Person
                                </h6>
                               </div>
                            </div>
                        </div>
                    </div>

                        
                       

                    
                </div>
            </div>
            }


            <div style={{height:"20px"}}></div>


            <div className="foodSectionSummary">
                <div className="SectionSummaryHeader">
                    <div style={{display:"flex",alignItems:'center'}}>
                        <img height={"30px"} width={"30px"} src={decor22} alt="" srcset="" />
                        <div style={{display:'flex',flexDirection:'column'}}>
                            <h2>
                                Decor
                            </h2>
                            <h4>
                              
                            </h4>
                        </div>
                    </div>

                    <h2>
                        
                    </h2>

                </div>
                <div className="SectionSummaryBody">
                    <div className="SectionSummaryBodyPart">
                        <div style={{display:'flex',flexDirection:'column'}}>
                            <h3>
                                Seating Arrangement
                            </h3>
                            <div style={{display:"flex",alignItems:'center',justifyContent:"space-between",padding:'10px 10px 0 0px'}}>
                                <h4>
                                    {selectedArrangement}
                                </h4>
                                {/* <h4>
                                    ...............
                                </h4>
                                <h4>
                                    
                                </h4> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="SectionSummaryBodyPart">
                        <div style={{display:'flex',flexDirection:'column'}}>
                            <h3>
                                Table Type
                            </h3>
                            <div style={{display:"flex",alignItems:'center',justifyContent:"space-between",padding:'10px 10px 0 0px'}}>
                                <h4>
                                    {selectedTable}
                                </h4>
                            </div>
                        </div>
                    </div> */}
                    <div className="SectionSummaryBodyPart">
                        <div className="step4SummaryDetails">
                            <h3>
                                Chair Selection
                            </h3>
                            <div className="step4SummaryDetail" >
                                <h4>
                                   {selectedChairType.name}
                                </h4>
                                <h5>
                                    ...............
                                </h5>
                                <h6>
                                    ${selectedChairType.cost} /Person
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="SectionSummaryBodyPart">
                        <div className="step4SummaryDetails">
                            <h3>
                                Stage Size
                            </h3>
                            <div className="step4SummaryDetail">
                                <h4>
                                    {selectedStageTypeData.value}
                                </h4>
                                <h5>
                                    ...............
                                </h5>
                                <h6>
                                    ${selectedStageTypeData.cost}
                                </h6>
                            </div>
                        </div>
                    </div>
                    {selectedMdType&&(selectedMdType!==null)?<div className="SectionSummaryBodyPart">
                        <div className="step4SummaryDetails">
                            <h3>
                                Backdrop & Mandap
                            </h3>
                            <div className="step4SummaryDetail">
                                <h4>
                                    {selectedMdType.name}
                                </h4>
                                <h5>
                                    ...............
                                </h5>
                                <h6>
                                    ${selectedMdType.cost}
                                </h6>
                            </div>
                        </div>
                    </div>:<></>}
                    {selectedCenterpieceType && selectedCenterpieceType !== null?<div className="SectionSummaryBodyPart">
                        <div className="step4SummaryDetails">
                            <h3>
                                Centerpieces
                            </h3>
                            <div className="step4SummaryDetail">
                                <h4>
                                    {selectedCenterpieceType.name}
                                </h4>
                                <h5>
                                    ...............
                                </h5>
                                <h6>
                                    ${selectedCenterpieceType.cost} /Person
                                </h6>
                            </div>
                        </div>
                    </div>:<></>}
                  {selectedLightingType && selectedLightingType !==null?  <div className="SectionSummaryBodyPart">
                        <div className="step4SummaryDetails">
                            <h3>
                                Lighting
                            </h3>
                            <div className="step4SummaryDetail">
                                <h4>
                                   {selectedLightingType.name}
                                </h4>
                                <h5>
                                    ...............
                                </h5>
                                <h6>
                                    ${selectedLightingType.cost}
                                </h6>
                            </div>
                        </div>
                    </div>:<></>}
                </div>
            </div>


            <div style={{height:'20px'}}></div>


         { (isRoomSelected===true || isSecuritySelected===true || isSecuritySelected === true || selectedSoundSystemType !== null )? <div className="foodSectionSummary">
                <div className="SectionSummaryHeader">
                    <div style={{display:"flex",alignItems:'center'}}>
                        <img height={"30px"} width={"30px"} src={other2} alt="" srcset="" />
                        <div style={{display:'flex',flexDirection:'column'}}>
                            <h2>
                                MIS
                            </h2>
                            <h4>
                                
                            </h4>
                        </div>
                    </div>

                    <h2>
                        
                    </h2>

                </div>
                <div className="SectionSummaryBody">
               
                   {isRoomSelected? <div className="SectionSummaryBodyPart">
                        <div className="step4SummaryDetails">
                            <h3>
                                Extra Room
                            </h3>
                            <div className="step4SummaryDetail">
                                <h4>
                                   {totalRoomsSelected} {totalRoomsSelected===1 ?"Room" :"Rooms"}
                                </h4>
                                <h5>
                                    ...............
                                </h5>
                                <h6>
                                    ${eachRoomCost*totalRoomsSelected} /Person
                                </h6>
                            </div>
                        </div>
                    </div>:<></>}
                    {isValetSelected? <div className="SectionSummaryBodyPart">
                        <div className="step4SummaryDetails">
                            <h3>
                                Valet Parking
                            </h3>
                            <div className="step4SummaryDetail">
                                <h4>
                                   {totalValetSelected} {totalValetSelected===1?"Valet":"Valets"}
                                </h4>
                                <h5>
                                    ...............
                                </h5>
                                <h6>
                                    ${eachValetCost} x {totalValetSelected}
                                </h6>
                            </div>
                        </div>
                    </div>:<></>}
                    {isSecuritySelected? <div className="SectionSummaryBodyPart">
                        <div className="step4SummaryDetails">
                            <h3>
                                Security
                            </h3>
                            <div className="step4SummaryDetail">
                                <h4>
                                   {totalGuardsSelected} {totalGuardsSelected===1?"Security":"Security"}
                                </h4>
                                <h5>
                                    ...............
                                </h5>
                                <h6>
                                    ${eachGuardCost} x {totalGuardsSelected}
                                </h6>
                            </div>
                        </div>
                    </div>:<></>}
                </div>
            </div> :<></> }
       


            {/* <div style={{height:'20px'}}></div>

            <div className="foodSectionSummary">
                <div style={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'space-between'
                }}>
                    <div style={{display:"flex",alignItems:'center'}}>
                        <img height={"30px"} width={"30px"} src={decor22} alt="" srcset="" />
                        <div style={{display:'flex',flexDirection:'column'}}>
                            <h2>
                                Decor
                            </h2>
                            <h4>
                                
                            </h4>
                        </div>
                    </div>

                    <h2>
                        
                    </h2>

                </div>

                <div style={{
                    width:'100%',
                    display:'flex'
                }}>
                    <div style={{width:'50%',height:"100px",backgroundColor:'white',padding:'10px'}}>
                        <div style={{display:'flex',flexDirection:'column'}}>
                            <h3>
                                Appetizers
                            </h3>
                            <div style={{display:"flex",alignItems:'center',justifyContent:"space-between",padding:'10px 10px 0 0px'}}>
                                <h4>
                                    Package 1 
                                </h4>
                                <h4>
                                    ...............
                                </h4>
                                <h4>
                                    
                                </h4>
                            </div>
                            <div style={{display:"flex",alignItems:'center',justifyContent:"space-between",padding:'10px 10px 0 0px'}}>
                                <h4>
                                    Package 1 
                                </h4>
                                <h4>
                                    ...............
                                </h4>
                                <h4>
                                    
                                </h4>
                            </div>
                            <div style={{display:"flex",alignItems:'center',justifyContent:"space-between",padding:'10px 10px 0 0px'}}>
                                <h4>
                                    Package 1 
                                </h4>
                                <h4>
                                    ...............
                                </h4>
                                <h4>
                                    
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div style={{width:'50%',height:"100px",backgroundColor:'white',padding:'10px'}}>
                        <div style={{display:'flex',flexDirection:'column'}}>
                            <h3>
                                Appetizers
                            </h3>
                            <div style={{display:"flex",alignItems:'center',justifyContent:"space-between",padding:'10px 10px 0 0px'}}>
                                <h4>
                                    Package 1 
                                </h4>
                                <h4>
                                    ...............
                                </h4>
                                <h4>
                                    
                                </h4>
                            </div>
                            <div style={{display:"flex",alignItems:'center',justifyContent:"space-between",padding:'10px 10px 0 0px'}}>
                                <h4>
                                    Package 1 
                                </h4>
                                <h4>
                                    ...............
                                </h4>
                                <h4>
                                    
                                </h4>
                            </div>
                            <div style={{display:"flex",alignItems:'center',justifyContent:"space-between",padding:'10px 10px 0 0px'}}>
                                <h4>
                                    Package 1 
                                </h4>
                                <h4>
                                    ...............
                                </h4>
                                <h4>
                                    
                                </h4>
                            </div>
                        </div>
                    </div>

                </div>


         
              
            </div>

            <div style={{height:'20px'}}></div>
            <div className="foodSectionSummary">
                <div style={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'space-between'
                }}>
                    <div style={{display:"flex",alignItems:'center'}}>
                        <img height={"30px"} width={"30px"} src={other2} alt="" srcset="" />
                        <div style={{display:'flex',flexDirection:'column'}}>
                            <h2>
                                Others
                            </h2>
                            <h4>
                                Package 1
                            </h4>
                        </div>
                    </div>

                    <h2>
                        
                    </h2>

                </div>

                <div style={{
                    width:'100%',
                    display:'flex'
                }}>
                    <div style={{width:'50%',height:"100px",backgroundColor:'white',padding:'10px'}}>
                        <div style={{display:'flex',flexDirection:'column'}}>
                            <h3>
                                Appetizers
                            </h3>
                            <div style={{display:"flex",alignItems:'center',justifyContent:"space-between",padding:'10px 10px 0 0px'}}>
                                <h4>
                                    Package 1 
                                </h4>
                                <h4>
                                    ...............
                                </h4>
                                <h4>
                                    
                                </h4>
                            </div>
                            <div style={{display:"flex",alignItems:'center',justifyContent:"space-between",padding:'10px 10px 0 0px'}}>
                                <h4>
                                    Package 1 
                                </h4>
                                <h4>
                                    ...............
                                </h4>
                                <h4>
                                    
                                </h4>
                            </div>
                            <div style={{display:"flex",alignItems:'center',justifyContent:"space-between",padding:'10px 10px 0 0px'}}>
                                <h4>
                                    Package 1 
                                </h4>
                                <h4>
                                    ...............
                                </h4>
                                <h4>
                                    
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div style={{width:'50%',height:"100px",backgroundColor:'white',padding:'10px'}}>
                        <div style={{display:'flex',flexDirection:'column'}}>
                            <h3>
                                Appetizers
                            </h3>
                            <div style={{display:"flex",alignItems:'center',justifyContent:"space-between",padding:'10px 10px 0 0px'}}>
                                <h4>
                                    Package 1 
                                </h4>
                                <h4>
                                    ...............
                                </h4>
                                <h4>
                                    
                                </h4>
                            </div>
                            <div style={{display:"flex",alignItems:'center',justifyContent:"space-between",padding:'10px 10px 0 0px'}}>
                                <h4>
                                    Package 1 
                                </h4>
                                <h4>
                                    ...............
                                </h4>
                                <h4>
                                    
                                </h4>
                            </div>
                            <div style={{display:"flex",alignItems:'center',justifyContent:"space-between",padding:'10px 10px 0 0px'}}>
                                <h4>
                                    Package 1 
                                </h4>
                                <h4>
                                    ...............
                                </h4>
                                <h4>
                                    
                                </h4>
                            </div>
                        </div>
                    </div>

                </div>


         
              
            </div> */}

        </div>
        </>
    )
}

export default Step4Summary;