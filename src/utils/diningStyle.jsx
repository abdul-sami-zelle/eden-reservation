import React, { useState ,useContext} from 'react';
import fruiteJuice1 from '../assets/fruiteJuice1.png';
import fruiteJuice2 from '../assets/fruiteJuice2.png';
import coffee11 from '../assets/coffee11.png';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import MainContext from '../context/mainContext';

function DiningStyle({ imgAddress, name ,isSelected, onSelect,pricing ,item}) {
    const {summaryTableData,setSummaryTableData} = useContext(MainContext);
    const handleToggleCheckbox = () => {
        onSelect(name);
        
        // setSummaryTableData([...summaryTableData,item]);
        console.log(summaryTableData);
    };


    return (
        <div style={{
            backgroundImage:`url(${imgAddress})`
        }} className="diningStyle" onClick={handleToggleCheckbox}>
            
            <div className="pricing_dining">
                ${pricing} / Person
            </div>

            <div className="checkbox-wrapper-31">
                <input type="checkbox" checked={isSelected} readOnly />
                <svg viewBox="0 0 35.6 35.6">
                    <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                    <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                    { <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>}
                </svg>
            </div>
        </div>
    );
}

export default DiningStyle;
