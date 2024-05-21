import React, { useEffect, useState, useRef ,useContext} from 'react';
import Modal from 'antd/es/modal/Modal';
import MainContext from '../context/mainContext';
import banquetStyle from '../../public/banquet-style.png'
import broadroomStyle from '../../public/broadroom-style.png'
import cabaretStyle from '../../public/cabaret-style.png'
import DiningStyle from './diningStyle';
import buffet0 from '../../public/buffet0.png'
import tableService0 from '../../public/tableService0.png'
import familyStyle0 from '../../public/familyStyle0.png'


function DiningStyleModal({}) {
    const {diningStyleModalState, setDiningStyleModalState,selectedDiningStyleType,handleSelectionDiningStyleType,diningStyleTypesData} = useContext(MainContext);
    const handleOk = () => {
        setDiningStyleModalState(false);
    };
    const handleCancel = () => {
        setDiningStyleModalState(false);
    };

   

    return (

        <>
            <Modal 
                title={<span style={{ fontSize: '22px', fontFamily: 'Montserrat', fontWeight: 'bold', color: 'var(--primary-color)' }}>Dining Style</span>}
                centered
                open={diningStyleModalState}
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
                      {diningStyleTypesData.map((data, index) => (
                            <DiningStyle 
                                key={index}
                                imgAddress={data.image} 
                                name={data.name} 
                                isSelected={selectedDiningStyleType === data.name}
                                onSelect={handleSelectionDiningStyleType}
                            />
                        ))}
                {/* <DiningStyle imgAddress={buffet0} name={"Banquet"} />
                <DiningStyle imgAddress={tableService0} name={"Broadroom"}/>
                <DiningStyle imgAddress={familyStyle0} name={"Cabaret"}/> */}
                </div>
            </Modal>

        </>
    )
}

export default DiningStyleModal;