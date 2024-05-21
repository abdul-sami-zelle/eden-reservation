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

function CenterPieceModal({}) {
    const {centerpieceModalState, setCenterpieceModalState,selectedCenterpieceType,handleSelectionCenterpieceType,centerpieceTypesData} = useContext(MainContext);
    const handleOk = () => {
        setCenterpieceModalState(false);
    };
    const handleCancel = () => {
        setCenterpieceModalState(false);
    };

   

    return (

        <>
            <Modal 
                title={<span style={{ fontSize: '24px', fontFamily: 'Montserrat', fontWeight: 'bold', color: 'var(--primary-color)' }}>Centerpiece Selection</span>}
                centered
                open={centerpieceModalState}
                onOk={handleOk}
                onCancel={handleCancel}
                okButtonProps={{ style: { background: 'var(--primary-color)', borderColor: 'var(--primary-color)' } }}
                okText="Add"
            >

{centerpieceTypesData.map((data, index) => (
                   <ChairType img={data.image} name={data.name} ppg={data.cost} isSelected={selectedCenterpieceType===data} onclickFunct={handleSelectionCenterpieceType} data={data}/>
                ))}
                {/* <ChairType img={"https://regalpartyhall.com/main/decor/images/cp1.jpg"} name={"CP1"} ppg={1} />
                <ChairType img={"https://regalpartyhall.com/main/decor/images/cp2.jpg"} name={"CP2"} ppg={1} />
                <ChairType img={"https://regalpartyhall.com/main/decor/images/cp3.jpg"} name={"CP3"} ppg={1} />
                <ChairType img={"https://regalpartyhall.com/main/decor/images/cp4.jpg"} name={"CP4"} ppg={1} />
                <ChairType img={"https://regalpartyhall.com/main/decor/images/cp5.jpg"} name={"CP5"} ppg={1} />
                <ChairType img={"https://regalpartyhall.com/main/decor/images/cp6.jpg"} name={"CP6"} ppg={1} />
                <ChairType img={"https://regalpartyhall.com/main/decor/images/cp7.jpg"} name={"CP7"} ppg={1} /> */}
            </Modal>

        </>
    )
}

export default CenterPieceModal;