/* eslint-disable no-console */
import React from 'react';
import hello, { random } from 'larkintuckerllc-example/dist/hello';
import there from 'larkintuckerllc-example/dist/there';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  console.log(hello);
  console.log(there);
  const randomString = random();
  console.log(randomString);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.tsx</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
