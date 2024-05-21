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

function TableTypeModal({}) {
    const {tableTypeModalState, setTableTypeModalState,selectedTable,handleSelectionTable,tableTypesData,} = useContext(MainContext);
    const handleOk = () => {
        setTableTypeModalState(false);
    };
    const handleCancel = () => {
        setTableTypeModalState(false);
    };

   

    return (

        <>
            <Modal 
                title={<span style={{ fontSize: '24px', fontFamily: 'Montserrat', fontWeight: 'bold', color: 'var(--primary-color)' }}>Table Selection</span>}
                centered
                open={tableTypeModalState}
                onOk={handleOk}
                onCancel={handleCancel}
                okButtonProps={{ style: { background: 'var(--primary-color)', borderColor: 'var(--primary-color)' } }}
                okText="Add"
            >
                <div style={{
                    display:'flex',
                    flexWrap:'wrap',
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    {tableTypesData.map((data, index) => (
                    <TableType 
                        key={index}
                        imgAddress={data.image} 
                        name={data.name} 
                        isSelected={selectedTable === data.name}
                        onSelect={handleSelectionTable}
                    />
                ))}
            
                </div>

                {/* <SubDrink1 name={"Orange Juice"} ppg={1} />
                <SubDrink1 name={"Apple Juice"} ppg={3} />
                <SubDrink1 name={"Grape Juice"} ppg={4} />
                <SubDrink1 name={"Cranberry Juice"} ppg={1} />
                <SubDrink1 name={"Pine Apple Juice"} ppg={0.5} />
                <SubDrink1 name={"Mango Juice"} ppg={2} />
                <SubDrink1 name={"Lime Juice"} ppg={1} /> */}
            </Modal>

        </>
    )
}

export default TableTypeModal;