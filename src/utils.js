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
