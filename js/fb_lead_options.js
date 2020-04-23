var apiVal = $('#ff-lead-api');
var fields = $('#ff-lead-fields');
jQuery('#update-settings-fb').click(function () {
    chrome.storage.sync.set({ ff_lead_api: apiVal.val().trim(), ff_lead_fields: fields.val().trim() }, function () {
        jQuery('#update-settings-fb')[0].innerHTML = 'Updated';
    });
});

chrome.storage.sync.get(['ff_lead_api', 'ff_lead_fields'], function (result) {
    if (result && result.ff_lead_api) {
        apiVal.val(result.ff_lead_api);
    }
    if (result && result.ff_lead_fields) {
        fields.val(result.ff_lead_fields);
    }
});