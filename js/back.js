document.addEventListener("DOMContentLoaded", function () {
    chrome.tabs.executeScript({
        file: 'js/jquery.js'
    }, function () {
        chrome.tabs.executeScript({
            file: "js/script.js"
        });
    });
});