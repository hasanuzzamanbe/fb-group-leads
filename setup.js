

var apiPath = window.location.href;


var infoHtml = '<div style="padding: 12px;background: aliceblue;border: 1px solid #ddd7d7;border-radius: 12px;"><p>API:  ' + apiPath.replace('/viewform', '/formResponse?') + '</p>';
infoHtml += '<i style="color: green;font-size: 12px;margin-top:7px;">Collect the fields value. Ex: <span style="color:darkred;">"entry.XXXXXXX" </span></i>'
if ((document.domain + '/forms') == 'docs.google.com/forms' && $("input[name^='entry']").get(0)) {
    var elements = $("[name^='entry.']");
    for (let i = 0; i < elements.length; i++) {
        infoHtml += '<h4>' + 'field' + (i + 1) + ':' + '<span style="background: antiquewhite;padding: 5px;color: darkred;">' + elements[i].name + '</span ></h4>';
    }
    infoHtml += '</div>';
    alert('Please go to bottom of the page and collect your API info');
    $('.freebirdFormviewerViewFormCard').append(infoHtml);
} else {
    alert('Please go to form preview page')
}


