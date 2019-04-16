/* global chrome */
import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// cool idea, badge could be number of total tabs open!
export default function App() {
  useEffect(() => {
    chrome.tabs.query({}, tabs => {
      tabs.forEach(tab => {
        console.log(tab.title);
      })
    })
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
}