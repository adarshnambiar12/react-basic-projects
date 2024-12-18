import React, { useState } from "react";
import useCurrencyData from "./hooks/useCurrencyData";
import InputBox from "./components/InputBox";
import { useEffect } from "react";

const App = () => {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const { rates } = useCurrencyData(from);
  const options = Object.keys(rates || {});

  const swapCurrencies = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setAmount(value);
    setConvertedAmount((value * (rates[to] || 0)).toFixed(2));
  };

  const handleCurrencyChange = (setter) => (e) => {
    setter(e.target.value);
  };

  useEffect(() => {
    setConvertedAmount((amount * (rates[to] || 0)).toFixed(2));
  }, [amount, rates, to]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-lg rounded-lg w-full max-w-md">
        <h1 className="text-xl font-bold text-gray-800 text-center mb-6">
          Currency Converter
        </h1>
        <form>
          <InputBox
            label="From"
            amount={amount}
            onAmountChange={handleAmountChange}
            onCurrencyChange={handleCurrencyChange(setFrom)}
            currencyOptions={options}
            selectedCurrency={from}
          />
          <div className="flex justify-center my-4">
            <button
              type="button"
              onClick={swapCurrencies}
              className="p-2 bg-blue-500 rounded-full shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M320-440v-287L217-624l-57-56 200-200 200 200-57 56-103-103v287h-80ZM600-80 400-280l57-56 103 103v-287h80v287l103-103 57 56L600-80Z"/></svg>
            </button>
          </div>
          <InputBox
            label="To"
            amount={convertedAmount}
            amountDisabled={true}
            onCurrencyChange={handleCurrencyChange(setTo)}
            currencyOptions={options}
            selectedCurrency={to}
          />
        </form>
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setConvertedAmount((amount * (rates[to] || 0)).toFixed(2))}
            className="w-full py-2 bg-green-500 text-white font-bold rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Convert
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
