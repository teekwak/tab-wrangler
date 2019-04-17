/* global chrome */
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// cool idea, badge could be number of total tabs open!
export default function App() {
  const [text, setText] = useState('');
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    chrome.tabs.query({}, result => {
      setTabs(result);
    })
  }, []);

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
      <input type="text" />
      {tabs.map(tab => <div>{tab.title}</div>)}
    </div>
  );
}