var apiVal = $('#ff-lead-api');
var fields = $('#ff-lead-fields');
var autoApprove = $('#fbgl-auto-approve')[0];

var csvActive = $('#fbgl-csv-activation')[0]
var ques = $('#fbgl-questions');


jQuery('#update-settings-fb').click(function () {
    chrome.storage.sync.set({ 
        ff_lead_api: apiVal.val().trim(), 
        ff_lead_fields: fields.val().trim(), 
        ffgl_auto_approve: autoApprove.checked,
        fbgl_csv_mode: csvActive.checked,
        fbgl_questions: ques.val().trim()
    }, function () {
        jQuery('#update-settings-fb')[0].innerHTML = 'Updated';
    });
});

$('#fbgl-csv-activation').change(function () {
    if (this.checked) {
        $('#fbgl-questions-block')[0].style.display = 'block';
    } else {
        $('#fbgl-questions-block')[0].style.display = 'none';
    }
})

chrome.storage.sync.get(['ff_lead_api', 'ff_lead_fields', 'ffgl_auto_approve', 'fbgl_csv_mode', 'fbgl_questions'], function (result) {
    if (result && result.ff_lead_api) {
        apiVal.val(result.ff_lead_api);
    }
    if (result && result.ff_lead_fields) {
        fields.val(result.ff_lead_fields);
    }
    if (result && result.ffgl_auto_approve) {
        $('#fbgl-auto-approve')[0].checked = result.ffgl_auto_approve;
    }
    if (result && result.fbgl_csv_mode) {
        $('#fbgl-csv-activation')[0].checked = result.fbgl_csv_mode;
        if (result.fbgl_csv_mode) {
            $('#fbgl-questions-block')[0].style.display = 'block';
        }

    }
    if (result && result.fbgl_questions) {
        $('#fbgl-questions').val(result.fbgl_questions);
    }
});