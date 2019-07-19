/* global chrome */

export function updateChromeBadgeText(text) {
  chrome.browserAction.setBadgeText({ text: text });
  chrome.browserAction.setBadgeBackgroundColor({ color: '#008080' });
}

export function filterTabByText(tab, text) {
  const title = tab.title.toLowerCase();
  const url = tab.url.toLowerCase();
  return title.indexOf(text) > -1 || url.indexOf(text) > -1;
}

export function switchToTab(tab) {
  chrome.tabs.update(tab.id, { active: true });
  chrome.windows.update(tab.windowId, { focused: true });
}