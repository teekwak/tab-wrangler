/* global chrome */
import React, { useState, useEffect } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import { sortByTitleAndURL, filterTabByText, updateChromeBadgeText } from './utils';

export default function App() {
  const [text, setText] = useState('');
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    chrome.tabs.query({}, result => {
      updateChromeBadgeText(result.length.toString());
      result.sort(sortByTitleAndURL);
      setTabs(result);
    });
  }, []);

  function handleTextChange(event) {
    setText(event.target.value.toLowerCase());
  }

  return (
    <div className="App" style={{ overflow: "auto"}}>
      <Form.Control
        autoFocus
        type="text"
        placeholder="Search by Tab Title or URL"
        onChange={handleTextChange}
      />
      <Table hover>
        <tbody>
          {tabs.filter(
            tab => filterTabByText(tab, text)
          ).map(
            tab => <tr><td style={{textAlign: 'left'}} onClick={() => {
              chrome.tabs.update(tab.id, { active: true });
              chrome.windows.update(tab.windowId, { focused: true })
            }}>{tab.title}</td></tr>)
          }
        </tbody>
      </Table>
    </div>
  );
}