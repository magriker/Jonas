import { useEffect, useState } from "react";
import "./challenge2.css";

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function Challenge2() {
  const [currencyFrom, setCurrencyFrom] = useState("USD");
  const [currencyTo, setcurrencyTo] = useState("USD");
  const [value, setValue] = useState("");
  const [rate, setRate] = useState(null);

  const handleValue = (value) => {
    setValue(value);
  };

  const handleCurrencyChange = (currency, state) => {
    state === "from" ? setCurrencyFrom(currency) : setcurrencyTo(currency);
  };

  useEffect(
    function () {
      const fetchCurrencyRate = async () => {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${value}&from=${currencyFrom}&to=${currencyTo}`
        );

        const data = await res.json();
        // const value = data.rates[currencyTo];
        console.log(data);
        setRate(data.rates[currencyTo]);
      };

      fetchCurrencyRate();
    },
    [value, currencyFrom, currencyTo]
  );

  return (
    <div>
      <input type="number" onChange={(e) => handleValue(e.target.value)} />
      <select onChange={(e) => handleCurrencyChange(e.target.value, "from")}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select onChange={(e) => handleCurrencyChange(e.target.value, "to")}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{rate ? rate.toFixed(2) : "OUTPUT"}</p>
    </div>
  );
}
