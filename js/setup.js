var apiPath = window.location.href;
var infoHtml = '<div style="padding: 12px;background: aliceblue;border: 1px solid #ddd7d7;border-radius: 12px;">';
infoHtml += `<br/><i style="color: green;font-size: 12px;margin-top:7px;">
copy the API url and fields key bellow then paste in option page (Right click on this page and select 
"FB Group Leads - set API" from context menu. And paste api info there.). </i><br/>`;
infoHtml += '<p style="margin-bottom: -11px">API Url:  </p><p style="background: #ffffff;padding: 5px;border-radius: 6px;">' + apiPath.replace('/viewform', '/formResponse?') + '</p>';
infoHtml += '<br/><p style="margin-bottom: -11px">Fields key:</p>'
if ((document.domain + '/forms') == 'docs.google.com/forms' && $("input[name^='entry']").get(0)) {
    var elements = $("[name^='entry.']");
    infoHtml += '<p style="background: #ffffff;padding: 5px; border-radius: 6px;">';
    $.each($(elements), function (index, value) {
        infoHtml += value.name;
        if (index < elements.length - 1) {
            infoHtml += ','
        }
    });
    infoHtml += '</p></div>';
    $('.freebirdFormviewerViewFormCard').append(infoHtml);
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);
} else {
    alert('Please go to form preview page')
}


