import React, {useState, useEffect} from 'react';
import DropDown from '../Component/dropDown';
const options = [
  {
    key: 1,
    value: 'hieu'
  },
  {
    key: 2,
    value: 'thai'
  },
  {
    key: 3,
    value: 'doanh'
  },
  {
    key: 4,
    value: 'hung'
  },
]


function NewProfile() {
  const [number, setNumber] = useState(1)

  const hanldeGetValueFromDropDown = (item) => {
    console.log('item', item)
  }

  const handleIncrement = () => {
    setNumber(number + 1)
  }
  useEffect(() => {
    console.log('Do something after counter has changed', number);
 }, [number]);
  return (
      <div>
         <p style={{marginBottom: 5}}>New profile</p>
         <DropDown 
         listOptions={options}
         getValueFromDropDown={hanldeGetValueFromDropDown}
         />
         <button onClick={handleIncrement}>Increment</button>
      </div>
  );
}

export default NewProfile;
