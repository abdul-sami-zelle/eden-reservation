import React, { useEffect, useState, useRef ,useContext} from 'react';
import Modal from 'antd/es/modal/Modal';
import SubDrink1 from '../components/subDrink1';
import MainContext from '../context/mainContext';
import SeatingArrangementType from './seatingArrangement';
import roundTable from '../assets/roundTable.png'
import rectangularTable from '../assets/rectangularTable.png'
import sqaureTable from '../assets/squaretable.png'
import serperentine from '../assets/serperentine.png'
import TableType from './tableType';
import microphoneSpeaker from '../assets/microphoneSpeaker.png';
import SoundSystemType from './soundSystemType';
import ChairType from '../components/chairType';

function SoundSystemModal({}) {
    const { soundSystemModalState, setSoundSystemModalState,selectedSoundSystemType,handleSelectionSoundSystemType, soundSystemTypesData,} = useContext(MainContext);
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
                okText="Done"
                cancelButtonProps={{ style: { display: 'none' } }}
            >
               {soundSystemTypesData.map((data, index) => (
                   <ChairType img={data.image} name={data.name} ppg={data.cost} isSelected={selectedSoundSystemType===data} onclickFunct={handleSelectionSoundSystemType} data={data} haveEachOption={false}/>
                ))}
                
            </Modal>

        </>
    )
}

export default SoundSystemModal;