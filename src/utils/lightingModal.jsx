import React, { useEffect, useState, useRef ,useContext} from 'react';
import Modal from 'antd/es/modal/Modal';
import SubDrink1 from '../components/subDrink1';
import MainContext from '../context/mainContext';
import SeatingArrangementType from './seatingArrangement';
import roundTable from '../../public/roundTable.png'
import rectangularTable from '../../public/rectangularTable.png'
import sqaureTable from '../../public/squaretable.png'
import serperentine from '../../public/serperentine.png'
import TableType from './tableType';
import ChairType from '../components/chairType';

function LightingModal({}) {
    const {lightingModalState, setLightingModalState,selectedLightingType,handleSelectionLightingType,lightingTypesData,} = useContext(MainContext);
    const handleOk = () => {
        setLightingModalState(false);
    };
    const handleCancel = () => {
        setLightingModalState(false);
    };

   

    return (

        <>
            <Modal 
                title={<span style={{ fontSize: '24px', fontFamily: 'Montserrat', fontWeight: 'bold', color: 'var(--primary-color)' }}>Lighting</span>}
                centered
                open={lightingModalState}
                onOk={handleOk}
                onCancel={handleCancel}
                okButtonProps={{ style: { background: 'var(--primary-color)', borderColor: 'var(--primary-color)' } }}
                okText="Done"
                cancelButtonProps={{ style: { display: 'none' } }}
            >
                  {lightingTypesData.map((data, index) => (
                   <ChairType img={data.image} name={data.name} ppg={data.cost} isSelected={selectedLightingType===data} onclickFunct={handleSelectionLightingType} data={data}/>
                ))}
            </Modal>

        </>
    )
}

export default LightingModal;