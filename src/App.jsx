import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const Badge = ({ variant, text, size }) => {
  const getClasses = () => {
    const baseClasses =
      'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium';

    const variantClasses = {
      success: 'bg-green-100 text-green-800',
      error: 'bg-red-100 text-red-800',
      warning: 'bg-yellow-100 text-yellow-800',
      info: 'bg-blue-100 text-blue-800',
    };

    const sizeClasses = {
      sm: 'text-xs',
      lg: 'text-base',
    };

    return `${baseClasses} ${variantClasses[variant] || ''} ${
      sizeClasses[size] || ''
    }`;
  };

  return <span className={getClasses()}>{text}</span>;
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Badge variant="success" text="Success" />
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
