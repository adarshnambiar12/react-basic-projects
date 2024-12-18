import React from "react";
import { useId } from "react";

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions,
  selectedCurrency,
  amountDisabled = false,
  currencyDisabled = false,
}) => {
  const amountInputId = useId();

  return (
    <div className="flex flex-col space-y-2 w-full">
      <label
        htmlFor={amountInputId}
        className="text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        type="number"
        id={amountInputId}
        value={amount}
        onChange={onAmountChange}
        disabled={amountDisabled}
        placeholder="Enter amount"
        className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        value={selectedCurrency}
        onChange={onCurrencyChange}
        disabled={currencyDisabled}
        className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {currencyOptions.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputBox;
