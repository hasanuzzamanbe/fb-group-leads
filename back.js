document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('tmp-clipboard').onclick = function () {
        chrome.tabs.executeScript(null, {
            file: "script.js"
        });
    }
});

window.onload = function () {
    var $loader = $('#loader');
    $loader.show();

    chrome.tabs.query({
        "currentWindow": true,  //Filters tabs in current window
        "status": "complete",   //The Page is completely loaded
        "active": true,         // The tab or web page is browsed at this state,
        "windowType": "normal"  // Filters normal web pages, eliminates g-talk notifications etc
    }, function (tabs) {        //It returns an array
        for (tab in tabs) {
            $('#url').val(tabs[tab].url);
            $('#title').val(tabs[tab].title);
            $loader.hide();
        }
    });
};