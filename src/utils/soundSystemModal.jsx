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
import microphoneSpeaker from '../../public/microphoneSpeaker.png';
import SoundSystemType from './soundSystemType';

function SoundSystemModal({}) {
    const { soundSystemModalState, setSoundSystemModalState} = useContext(MainContext);
    const handleOk = () => {
        setSoundSystemModalState(false);
    };
    const handleCancel = () => {
        setSoundSystemModalState(false);
    };

   

    return (

        <>
            <Modal 
                title={<span style={{ fontSize: '24px', fontFamily: 'Montserrat', fontWeight: 'bold', color: 'var(--primary-color)' }}>Sound System</span>}
                centered
                open={soundSystemModalState}
                onOk={handleOk}
                onCancel={handleCancel}
                okButtonProps={{ style: { background: 'var(--primary-color)', borderColor: 'var(--primary-color)' } }}
                okText="Add"
            >
                <SoundSystemType imgAddress={microphoneSpeaker} name={"Microphone & Speaker"} />
                
            </Modal>

        </>
    )
}

export default SoundSystemModal;