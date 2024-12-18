import { useEffect, useState } from "react";

const useCurrencyData = (currency) => {
  const [rates, setRates] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          `https://api.exchangerate-api.com/v4/latest/${currency}`
        );
        const data = await response.json();
        setRates(data.rates || {});
      } catch (err) {
        setError("Failed to fetch exchange rates");
      }
    };

    fetchRates();
  }, [currency]);

  return { rates, error };
};

export default useCurrencyData;
