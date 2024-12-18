import { useState } from 'react';

function App() {

  let [result, setResult] = useState(0);

  let evaluate = () => {
    var first = document.getElementById("first").value;
    var second = document.getElementById("second").value;
    var operator = document.getElementById("operator").value;

    setResult(eval(first + operator + second));
  }

  return (
    <>
      <h1>Calculate</h1>
      <input type="text" name="First" id="first" />
      <select name="Operator" id="operator">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
        <option value="%">%</option>
        <option value="**">**</option>
        <option value="^">^</option>
      </select>
      <input type="text" name="Second" id="second" />
      <button onClick={evaluate}>Get Result</button>
      <p>Result is {result}</p>
    </>
  )
}

export default App
