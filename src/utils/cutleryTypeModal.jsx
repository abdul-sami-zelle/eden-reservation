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
import porcelain from '../../public/porcelain.png'
import plastic from '../../public/plastic.png'


function CutleryTypeModal({}) {
    const {cutleryTypeModalState, setCutleryTypeModalState} = useContext(MainContext);
    const handleOk = () => {
        setCutleryTypeModalState(false);
    };
    const handleCancel = () => {
        setCutleryTypeModalState(false);
    };

   

    return (

        <>
            <Modal 
                title={<span style={{ fontSize: '22px', fontFamily: 'Montserrat', fontWeight: 'bold', color: 'var(--primary-color)' }}>Cutlery Type</span>}
                centered
                open={cutleryTypeModalState}
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
                <DiningStyle imgAddress={porcelain} name={"Banquet"} />
                <DiningStyle imgAddress={plastic} name={"Broadroom"}/>
                </div>
            </Modal>

        </>
    )
}

export default CutleryTypeModal;