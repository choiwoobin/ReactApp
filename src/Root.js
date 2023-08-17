import React, { useState } from 'react';

function Root() {
  const [counter, setNumber] = useState(0);
  const countUp = () => {
    setNumber(counter + 1);
  }

  const countDown = () => {
    setNumber(counter - 1);
  }

  return (
    <div>
      <h1>{counter} </h1>
      <button onClick={countUp}>up</button>
      <button onClick={countDown}>down</button>
    </div>
  );
}
 

export default Root;
