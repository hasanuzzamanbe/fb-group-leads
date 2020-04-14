var button = document.createElement('button');
button.id = 'ff-admin-get-data';
button.style.outline = "none";
button.style.height = "35px";
button.style.marginTop = "6px";
button.style.padding = "0px 21px";
button.style.borderRadius = "9px";
button.innerHTML = 'Get Data';
var ap = $("[aria-label='Approve All']");

if (!$('#ff-admin-get-data').get(0)){
    ap.parent().parent().prepend(button);
}

$('#ff-admin-get-data').click(function(){
    console.log('Hello FF');
})
