import React, { useState } from 'react';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

function Quanitity() {
    const [value, setValue] = useState(0);

    // Function to handle incrementing the value
    const incrementValue = () => {
      setValue(prevValue => prevValue + 1);
    };
  
    // Function to handle decrementing the value
    const decrementValue = () => {
      setValue(prevValue => (prevValue > 0 ? prevValue - 1 : 0));
    };
    return(
        <div className="quantity">

      <div className='leftQuantityBtn' onClick={decrementValue}><PlusOutlined /></div>
      <input
        type="number"
        value={value}
        onChange={e => setValue(parseInt(e.target.value) || 0)} // Ensure value is always a number
      />
      <div className='rightQuantityBtn' onClick={incrementValue}><MinusOutlined /></div>

        </div>
    )
}
export default Quanitity;