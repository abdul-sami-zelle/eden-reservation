import React, { useEffect, useState, useRef ,useContext} from 'react';
import Modal from 'antd/es/modal/Modal';
import SubDrink1 from '../components/subDrink1';
import MainContext from '../context/mainContext';

function BeveragesTypeModal({}) {
    const {beveragesModalState,setBeveragesModal} = useContext(MainContext);
    const handleOk = () => {
        setBeveragesModal(false);
    };
    const handleCancel = () => {
        setBeveragesModal(false);
    };

   

    return (

        <>
            <Modal 
                title={<span style={{ fontSize: '24px', fontFamily: 'Montserrat', fontWeight: 'bold', color: 'var(--primary-color)' }}>Juices</span>}
                centered
                open={beveragesModalState}
                onOk={handleOk}
                onCancel={handleCancel}
                okButtonProps={{ style: { background: 'var(--primary-color)', borderColor: 'var(--primary-color)' } }}
                okText="Add"
            >
                <SubDrink1 name={"Orange Juice"} ppg={1} />
                <SubDrink1 name={"Apple Juice"} ppg={3} />
                <SubDrink1 name={"Grape Juice"} ppg={4} />
                <SubDrink1 name={"Cranberry Juice"} ppg={1} />
                <SubDrink1 name={"Pine Apple Juice"} ppg={0.5} />
                <SubDrink1 name={"Mango Juice"} ppg={2} />
                <SubDrink1 name={"Lime Juice"} ppg={1} />
            </Modal>

        </>
    )
}

export default BeveragesTypeModal;