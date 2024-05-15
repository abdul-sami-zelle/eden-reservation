import React, { useState } from 'react';

function SoundSystemType({ imgAddress, name }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="soundSystem" onClick={handleToggleCheckbox} onMouseEnter={handleToggleCheckbox} onMouseLeave={handleToggleCheckbox}>
            <img src={imgAddress} alt="" srcSet="" />
            <div className="soundSystemName">
                {name}
            </div>
            <div className="checkbox-wrapper-31">
                <input type="checkbox" checked={isChecked} readOnly />
                <svg viewBox="0 0 35.6 35.6">
                    <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                    <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                    {isChecked && <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>}
                </svg>
            </div>
        </div>
    );
}

export default SoundSystemType;
