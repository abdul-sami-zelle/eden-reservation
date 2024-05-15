import './utils.css';
import Heading4 from './heading4';
import { colors } from './colors';

function IndividualStepper({stepNo,activeState,StepName,clickAction}) {
    return (
    <div onClick={clickAction} className="indvStepper">
        <div className={`bubble-bottom2 ${activeState?'active11':''}`}>
            {stepNo}
        </div>
        <Heading4 text={`Step ${stepNo}`} color={`${activeState?colors.primary:colors.secondary}`} margin={'8px 0px'} fontSize={'12px'} family={'Montserrat'} />
        <div className="underlinedActiveTab">
        </div>
    </div>
    )
}
export default IndividualStepper;