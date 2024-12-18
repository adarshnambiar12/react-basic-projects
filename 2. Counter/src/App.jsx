import { useState } from 'react';
import Button from './Button';
import './App.css';
import Error from './Error';


function App() {
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState(false);

  const plusCounter = () => {
    if (counter < 20)
    {
      setCounter(counter + 1);
      setError(false);
    }
    else{
      setError(true)
    }
  }
  const minusCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      setError(false);
    } else {
      setError(true);
    }
  };


  return (
    <>
      <div>
        <h1>{counter}</h1>
        <Button onClick={minusCounter}>-</Button>
        <Button onClick={plusCounter}>+</Button>
        <Error value={error}/>
      </div>
    </>
  );
}

export default App;
