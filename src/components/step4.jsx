import React, { useEffect, useState, useRef, useContext } from 'react';
import SideStepper1 from './sideStepper1';
import SelectFood from './selectFood';
import SelectDrink from './selectDrink';
import Modal from 'antd/es/modal/Modal';
import SubDrink1 from './subDrink1';
import BeveragesTypeModal from '../utils/juicesTypeModal';
import MainContext from '../context/mainContext';
import SelectDecor from './selectDecor';
import SeatingArrangementModal from '../utils/seatingArrangementModal';
import TableTypeModal from '../utils/tableTypeModal';
import ChairTypeModal from '../utils/chairTypeModal';
import CenterPieceModal from '../utils/centerpieceModal';
import MDModal from '../utils/mANDdModal';
import SelectOther from './selectOther';
import SoundSystemModal from '../utils/soundSystemModal';
import DiningStyleModal from '../utils/diningStyleModal';
import CutleryTypeModal from '../utils/cutleryTypeModal';
import LightingModal from '../utils/lightingModal';
import PackageInfoModal from '../utils/packageInfoModal';

function Step4() {
    const {activeStep,changeStepToPrevious,changeStepToNext,changeStepTo,} = useContext(MainContext);
    return (
        <>
            <div style={{
                width:'80%',
                display:'flex',
                margin:"auto"
            }}>
            <SideStepper1 />
            {activeStep===4?<SelectFood/>:activeStep===5?<SelectDecor/>:activeStep===6?<SelectOther/>:<></>}
            </div>
            <BeveragesTypeModal heading={""} />
            <SeatingArrangementModal/>
            <TableTypeModal/>
            <ChairTypeModal/>
            <CenterPieceModal/>
            <MDModal/>
            <LightingModal/>
            <SoundSystemModal/>
            <DiningStyleModal/>
            <CutleryTypeModal/>
            <PackageInfoModal/>
        </>
    )
}

export default Step4;