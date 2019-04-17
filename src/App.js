/* global chrome */
import React, { useState, useEffect } from 'react';
import './App.css';

// cool idea, badge could be number of total tabs open!

function sortByTitleAndURL(a, b) {
  // TODO: add sorting by URL
  // TODO: add fuzzy search
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
    <div className="App" style={{ overflow: "auto"}}>
      <input
        autoFocus
        type="text"
        onChange={handleTextChange}
      />
      {tabs.filter(
        tab => filterByText(tab, text)
      ).map(
        tab => <div onClick={() => {
          chrome.tabs.update(tab.id, { active: true });
          chrome.windows.update(tab.windowId, { focused: true })
        }}>{tab.title}</div>)
      }
    </div>
  );
}