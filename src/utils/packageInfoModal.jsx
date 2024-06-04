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
import porcelain from '../assets/porcelain.png'
import plastic from '../assets/plastic.png'


function PackageInfoModal({}) {
    const {infoPackageModalState, setInfoPackageModalState,activePackageInfoData} = useContext(MainContext);
    
    const handleOk = () => {
        setInfoPackageModalState(false);
    };
    const handleCancel = () => {
        setInfoPackageModalState(false);
    };

   

    return (

        <>
            <Modal 
                title={<span style={{ fontSize: '22px', fontFamily: 'Montserrat', fontWeight: 'bold', color: 'var(--primary-color)' }}>{activePackageInfoData && activePackageInfoData.name} Packages Info</span>}
                centered
                open={infoPackageModalState}
                onOk={handleOk}
                onCancel={handleCancel}
                okButtonProps={{ style: { background: 'var(--primary-color)', borderColor: 'var(--primary-color)' } }}
                okText="Understood"
                cancelText=""
                cancelButtonProps={{ style: { display: 'none' } }}
            >
                <div style={{
                    display:'flex',
                    flexWrap:'wrap',
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                  
                </div>
            </Modal>

        </>
    )
}

export default PackageInfoModal;