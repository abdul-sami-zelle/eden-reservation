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

function ChairTypeModal({}) {
    const {chairTypeModalState, setChairTypeModalState,selectedChairType,handleSelectionChairType,chairTypesData,setSelectedChairType} = useContext(MainContext);
    const handleOk = () => {
        setChairTypeModalState(false);
    };
    const handleCancel = () => {
        setChairTypeModalState(false);
    };

   

    return (

        <>
            <Modal 
                title={<span style={{ fontSize: '24px', fontFamily: 'Montserrat', fontWeight: 'bold', color: 'var(--primary-color)' }}>Table Selection</span>}
                centered
                open={chairTypeModalState}
                onOk={handleOk}
                onCancel={handleCancel}
                okButtonProps={{ style: { background: 'var(--primary-color)', borderColor: 'var(--primary-color)' } }}
                okText="Add"
            >
                {/* <div style={{
                    display:'flex',
                    flexWrap:'wrap',
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                <TableType imgAddress={roundTable} name={"Round Table"} />
                <TableType imgAddress={rectangularTable} name={"Rectangular Table"}/>
                <TableType imgAddress={sqaureTable} name={"Square Table"}/>
                <TableType imgAddress={serperentine} name={"Serperentine Table"}/>
                </div> */}

{chairTypesData.map((data, index) => (
                   <ChairType img={data.image} name={data.name} ppg={data.cost} isSelected={selectedChairType===data} onclickFunct={setSelectedChairType} data={data}/>
                ))}

                {/* <ChairType img={"https://regalpartyhall.com/main/decor/images/ch.jpg"} name={"Silver Chiavari Chairs"} ppg={4} />
                <ChairType img={"https://regalpartyhall.com/main/decor/images/ch1.jpg"} name={"Gold Chiavari Chairs"} ppg={4} />
                <ChairType img={"https://regalpartyhall.com/main/decor/images/ch2.jpg"} name={"Chair Covers with Bows"} ppg={4} />
                <ChairType img={"https://regalpartyhall.com/main/decor/images/ch5.jpg"} name={"High Chairs"} ppg={100} />
                <ChairType img={"https://regalpartyhall.com/main/decor/images/ch6.jpg"} name={"Wedding Chair"} ppg={100} />
                <ChairType img={"https://regalpartyhall.com/main/decor/images/ch7.jpg"} name={"Reception Sofa"} ppg={100} /> */}
            </Modal>

        </>
    )
}

export default ChairTypeModal;