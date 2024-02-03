// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
import { useState, useEffect } from "react";

export default function App() {
  const [amount, setAmount] = useState("1");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedRate, setConvertedRate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      const controller = new AbortController();
      async function convertCurrency() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`,
            { signal: controller.signal }
          );
          if (!res.ok) throw new Error("Something Went wrong");

          const data = await res.json();
          setConvertedRate(data.rates[toCurrency]);
          setError("");
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }

        return function () {
          controller.abort();
        };
      }
      if (fromCurrency === toCurrency) {
        return setConvertedRate(amount);
      }
      convertCurrency();
    },
    [amount, fromCurrency, toCurrency]
  );

  return (
    <div className="container">
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      {isLoading && <Loader>Loading...</Loader>}
      {!isLoading && !error && (
        <p>
          {amount} {fromCurrency} = {convertedRate} {toCurrency}
        </p>
      )}
      {error && <ErrorMessage message={error} />}
    </div>
  );
}

function Loader({ children }) {
  return <p>{children}</p>;
}
function ErrorMessage({ message }) {
  return <p>Error: ⛔{message}</p>;
}
