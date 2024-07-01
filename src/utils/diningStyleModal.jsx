import React, { useEffect, useState, useRef ,useContext} from 'react';
import Modal from 'antd/es/modal/Modal';
import MainContext from '../context/mainContext';
import banquetStyle from '../assets/banquet-style.png'
import broadroomStyle from '../assets/broadroom-style.png'
import cabaretStyle from '../assets/cabaret-style.png'
import DiningStyle from './diningStyle';
import buffet0 from '../assets/buffet0.png'
import tableService0 from '../assets/tableService0.png'
import familyStyle0 from '../assets/familyStyle0.png'


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
                okText="Done"
                cancelButtonProps={{ style: { display: 'none' } }}
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
                                pricing={data.cost}
                                item={data}
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