var apiPath = window.location.href;

var infoHtml = '<div style="padding: 12px;background: aliceblue;border: 1px solid #ddd7d7;border-radius: 12px;"><p>API Url:  </p><p>' + apiPath.replace('/viewform', '/formResponse?') + '</p>';
infoHtml += '<br/><i style="color: green;font-size: 12px;margin-top:7px;">copy the line bellow and put on fields. Ex: <span style="color:darkred;">"entry.1007858859,entry.893612991,entry.315525019" </span></i><br/>'
if ((document.domain + '/forms') == 'docs.google.com/forms' && $("input[name^='entry']").get(0)) {
    var elements = $("[name^='entry.']");
    for (let i = 0; i < elements.length; i++) {
        infoHtml += elements[i].name;
        if (i < elements.length-1){
            infoHtml += ','
        }
    }
    infoHtml += '</div>';
    $('.freebirdFormviewerViewFormCard').append(infoHtml);
    $("html, body").animate({ scrollTop: $(document).height() }, 1000);  
} else {
    alert('Please go to form preview page')
}


