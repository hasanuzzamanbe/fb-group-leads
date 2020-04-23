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
    // document.getElementById('option-setup').onclick = function () {
    //     chrome.runtime.openOptionsPage();
    // }
    // 
    // Auto approve notify
    chrome.storage.sync.get('ffgl_auto_approve', function (result) {
        if (result.ffgl_auto_approve) {
            console.log('hi', document.getElementById("fbgl-auto-notify"))
            document.getElementById("fbgl-auto-notify").innerText =  'N.B: Auto Approve Mode Activated';
        }
    })

});