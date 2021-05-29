import React, {useState, useEffect} from 'react';

// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  // it works like that! it has a function inside and this is called callBack function
  useEffect(() => {
    console.log('call useEffect');
    document.title = `new message(${value})`
  });

  console.log('render components')


  return <>
  <h1> {value} </h1>
   <button className='btn' onClick={() => setValue(value +1)} > Add me here</button>

</>
};

export default UseEffectBasics;
