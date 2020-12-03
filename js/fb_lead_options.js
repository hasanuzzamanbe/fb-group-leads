var apiVal = $('#ff-lead-api');
var fields = $('#ff-lead-fields');
var autoApprove = $('#fbgl-auto-approve')[0];



jQuery('#update-settings-fb').click(function () {
    chrome.storage.sync.set({
        ff_lead_api: apiVal.val().trim(),
        ffgl_auto_approve: autoApprove.checked,
    }, function () {
        jQuery('#update-settings-fb')[0].innerHTML = 'Updated';
    });
});


chrome.storage.sync.get(['ff_lead_api', 'ffgl_auto_approve'], function (result) {
    if (result && result.ff_lead_api) {
        apiVal.val(result.ff_lead_api);
    }
    if (result && result.ffgl_auto_approve) {
        $('#fbgl-auto-approve')[0].checked = result.ffgl_auto_approve;
    }
});