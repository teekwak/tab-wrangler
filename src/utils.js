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

export function sortByTitleAndURL(a, b) {
  const aTitle = a.title.toLowerCase();
  const bTitle = b.title.toLowerCase();

  if (aTitle < bTitle) {
    return -1;
  } else if (aTitle > bTitle) {
    return 1;
  } else {
    const aURL = a.url.toLowerCase()
    const bURL = b.url.toLowerCase()

    if(aURL < bURL) {
      return -1;
    } else if (aURL > bURL) {
      return 1;
    } else {
      return 0;
    }
  }
}

export function switchToTab(tab) {
  chrome.tabs.update(tab.id, { active: true });
  chrome.windows.update(tab.windowId, { focused: true });
}