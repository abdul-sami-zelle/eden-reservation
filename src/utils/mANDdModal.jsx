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

function MDModal({}) {
    const {mdModalState, setMDModalState} = useContext(MainContext);
    const handleOk = () => {
        setMDModalState(false);
    };
    const handleCancel = () => {
        setMDModalState(false);
    };

   

    return (

        <>
            <Modal 
                title={<span style={{ fontSize: '24px', fontFamily: 'Montserrat', fontWeight: 'bold', color: 'var(--primary-color)' }}>Mandap & Backdrop</span>}
                centered
                open={mdModalState}
                onOk={handleOk}
                onCancel={handleCancel}
                okButtonProps={{ style: { background: 'var(--primary-color)', borderColor: 'var(--primary-color)' } }}
                okText="Add"
            >
                <ChairType img={"https://regalpartyhall.com/main/decor/images/bd1.jpg"} name={"Backdrop 1"} ppg={1} />
                <ChairType img={"https://regalpartyhall.com/main/decor/images/bd2.jpg"} name={"Backdrop 2"} ppg={1} />
                <ChairType img={"https://regalpartyhall.com/main/decor/images/bd3.jpg"} name={"Backdrop 3"} ppg={1} />
                <ChairType img={"https://regalpartyhall.com/main/decor/images/bd4.jpg"} name={"Backdrop 4"} ppg={1} />
                <ChairType img={"https://regalpartyhall.com/main/decor/images/bd31.jpg"} name={"Mandap 1"} ppg={1} />
                <ChairType img={"https://regalpartyhall.com/main/decor/images/bd32.jpg"} name={"Mandap 2"} ppg={1} />
                <ChairType img={"https://regalpartyhall.com/main/decor/images/bd33.jpg"} name={"Mandap 3"} ppg={1} />
                <ChairType img={"https://regalpartyhall.com/main/decor/images/bd34.jpg"} name={"Mandap 4"} ppg={1} />
            </Modal>

        </>
    )
}

export default MDModal;