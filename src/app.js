chrome.storage.sync.get(['ff_lead_api', 'ffgl_auto_approve'], function (result) {
    if (result && result.ff_lead_api) {
        document.getElementById('ff-lead-api').value = result.ff_lead_api;
    }
    if (result && result.ffgl_auto_approve) {
        document.getElementById('fbgl-auto-approve').checked = result.ffgl_auto_approve;
    }
});

document.getElementById("update-settings-fb")
    .addEventListener("click", function () {
        const apiUrl = document.getElementById('ff-lead-api').value.trim();
        const isAutoChecked = document.getElementById('fbgl-auto-approve').checked;

        chrome.storage.sync.set({
            ff_lead_api: apiUrl,
            ffgl_auto_approve: isAutoChecked,
        }, function () {
            document.getElementById("update-settings-fb").innerHTML = 'Updated';
        });
    });
