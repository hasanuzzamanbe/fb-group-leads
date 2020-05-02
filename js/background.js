var showForPages = ["https://www.facebook.com/groups/*"];

chrome.contextMenus.create({
    "title": "FB Group Leads- set API",
    "id": "fbglgetapi",
    "documentUrlPatterns": showForPages
});

chrome.contextMenus.onClicked.addListener((clickData) => {
    chrome.runtime.openOptionsPage();
})
