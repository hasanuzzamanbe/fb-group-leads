var showForPages = ["*://docs.google.com/forms/*"];

chrome.contextMenus.create({
    "title": "FB Group Leads- set API",
    "id": "fbglgetapi",
    "documentUrlPatterns": showForPages
});

chrome.contextMenus.onClicked.addListener((clickData) => {
    chrome.runtime.openOptionsPage();
})


