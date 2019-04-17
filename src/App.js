/* global chrome */
import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

// cool idea, badge could be number of total tabs open!
// filtering function (fuzzy search...)

function sortByTitleAndURL(a, b) {
  const aTitle = a.title.toLowerCase();
  const bTitle = b.title.toLowerCase();

  if (aTitle < bTitle) {
    return -1;
  } else if (aTitle > bTitle) {
    return 1;
  } else {
    return 0;
  }
}

function filterByText(tab, text) {
  return tab.title.toLowerCase().startsWith(text);
}

export default function App() {
  const [text, setText] = useState('');
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    chrome.tabs.query({}, result => {
      result.sort(sortByTitleAndURL);
      setTabs(result);
    })
  }, []);

  function handleTextChange(event) {
    setText(event.target.value.toLowerCase());
  }

  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <input
        autoFocus
        type="text"
        onChange={handleTextChange}
      />
      {tabs.filter(tab => filterByText(tab, text)).map(tab => <div>{tab.title}</div>)}
    </div>
  );
}