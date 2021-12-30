import { useEffect, useState } from 'react';
import { AutoComplete } from './components/AutoComplete';
import { CurrenciesDataModel } from './interfaces/type';
import './App.css';

function App() {

  const [currencies, setCurrencies] = useState<CurrenciesDataModel | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const getCurrencies = async () => {
      try {
        const res = await fetch('https://api.coinbase.com/v2/currencies');
        const data = await res.json();
        if (!data || 'errors' in data) {
          throw data.errors[0].message;
        } else {
          setCurrencies(data);
        }
      } catch (error) {
        let message = 'Unknown Error';
        // Check for unknown error types
        error instanceof Error ? setErrorMessage(error.message) : setErrorMessage(message); 
        console.error(errorMessage);
      }
    }
    getCurrencies();
  }, [errorMessage]);

  return (
    <div className="App">
      <h1>React Currencies AutoComplete</h1>
      { currencies ? <AutoComplete currencies={currencies.data} /> :  <p> { errorMessage ? 'Oops! Something went wrong!' : 'Loading...' } </p> }
    </div>
  );
}

export default App;
