import React, { useContext } from 'react';
import Modal from 'antd/es/modal/Modal';
import MainContext from '../context/mainContext';
import SeatingArrangementType from './seatingArrangement';

function SeatingArrangementModal() {
    const { 
        seatingArrangementModalState, 
        setSeatingArrangementModalState, 
        selectedArrangement, 
        handleSelectionSeatingArrang, 
        seatingArrangementTypesData 
    } = useContext(MainContext);

    const handleOk = () => {
        setSeatingArrangementModalState(false);
    };

    const handleCancel = () => {
        setSeatingArrangementModalState(false);
    };

    return (
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
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {seatingArrangementTypesData.map((data, index) => (
                    <SeatingArrangementType 
                        key={index}
                        imgAddress={data.image} 
                        name={data.name} 
                        isSelected={selectedArrangement === data.name}
                        onSelect={handleSelectionSeatingArrang}
                    />
                ))}
            </div>
        </Modal>
    );
}

export default SeatingArrangementModal;
