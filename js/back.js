
document.addEventListener("DOMContentLoaded", function () {
    chrome.tabs.executeScript({
        file: 'js/jquery.js'
    }, function () {
        chrome.tabs.executeScript({
            file: "js/script.js"
        });
    });
    // Auto approve notify
    // chrome.storage.sync.get('ffgl_auto_approve', function (result) {
    //     if (result.ffgl_auto_approve) {
    //         console.log('hi', document.getElementById("fbgl-auto-notify"))
    //         document.getElementById("fbgl-auto-notify").innerText = 'N.B: Auto Approve Mode Activated';
    //     }
    // })


});