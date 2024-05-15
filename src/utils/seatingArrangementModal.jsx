import React, { useEffect, useState, useRef ,useContext} from 'react';
import Modal from 'antd/es/modal/Modal';
import SubDrink1 from '../components/subDrink1';
import MainContext from '../context/mainContext';
import SeatingArrangementType from './seatingArrangement';
import banquetStyle from '../../public/banquet-style.png'
import broadroomStyle from '../../public/broadroom-style.png'

import classroomStyle from '../../public/classroom-style.png'
import theaterStyle from '../../public/theater-style.png'
import ushapedStyle from '../../public/u-shape-style.png'
import cabaretStyle from '../../public/cabaret-style.png'

function SeatingArrangementModal({}) {
    const {seatingArrangementModalState, setSeatingArrangementModalState} = useContext(MainContext);
    const handleOk = () => {
        setSeatingArrangementModalState(false);
    };
    const handleCancel = () => {
        setSeatingArrangementModalState(false);
    };

   

    return (

        <>
            <Modal 
                title={<span style={{ fontSize: '24px', fontFamily: 'Montserrat', fontWeight: 'bold', color: 'var(--primary-color)' }}>Seating Arrangement</span>}
                centered
                open={seatingArrangementModalState}
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
                <SeatingArrangementType imgAddress={banquetStyle} name={"Banquet"} />
                <SeatingArrangementType imgAddress={broadroomStyle} name={"Broadroom"}/>
                <SeatingArrangementType imgAddress={cabaretStyle} name={"Cabaret"}/>
                <SeatingArrangementType imgAddress={classroomStyle} name={"Classroom"}/>
                <SeatingArrangementType imgAddress={theaterStyle} name={"Theater"}/>
                <SeatingArrangementType imgAddress={ushapedStyle} name={"U Shaped"}/>
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

export default SeatingArrangementModal;