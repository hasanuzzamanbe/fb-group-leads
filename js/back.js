document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('start-collect').onclick = function () {
        chrome.tabs.executeScript({
            file: 'js/jquery.js'
        }, function () {
            chrome.tabs.executeScript({
                file: "js/script.js"
            });
        });
    }
    document.getElementById('start-setup').onclick = function () {
        chrome.tabs.executeScript({
            file: 'js/jquery.js'
        }, function () {
            chrome.tabs.executeScript({
                file: "js/setup.js"
            });
        });
    }
    document.getElementById('option-setup').onclick = function () {
        chrome.runtime.openOptionsPage();
    }
});