var button = document.createElement('button');
button.id = 'ff-admin-get-data';
button.style.outline = "none";
button.innerHTML = 'Get Data';
var ap = $("[aria-label='Approve All']");


if ($("[aria-label='Approve All']")[0]) {
    if (!$('#ff-admin-get-data').get(0)) {
        button.style.height = "35px";
        button.style.marginTop = "6px";
        button.style.padding = "0px 21px";
        button.style.borderRadius = "9px";
        
        ap.parent().parent().prepend(button);
    }

    $('#ff-admin-get-data').click(function () {
        var arr = [];
        $(".k4urcfbm.dp1hu0rb.d2edcug0 .a8nywdso.f10w8fjw.rz4wbd8a.pybr56ya").each(function () {
            let obj = {};
            obj.name = $(this).find('.nc684nl6 .oajrlxb2')[0].innerText;
            let q1 = $(this).find('.dati1w0a.qt6c0cv9.hv4rvrfc .oi732d6d');

            for (i = 0; i < q1.length; i++) {
                if (i % 2 == 0) {
                    obj['question' + (i + 1)] = q1[i].innerText;
                } else {
                    obj['answer' + (i)] = q1[i].innerText;
                }

            }

            arr.push(obj)

        });

        console.log(arr, 'Hello FF')

    })
}else {
    let t = $("#member_requests_pagelet").find('._3k4n._4-u3');
    let btnContain = t.find('.clearfix').find('._4wsp._3qn7._61-0');

    if (!$('#ff-admin-get-data').get(0)) {
        button.style.height = "24px";
        button.style.borderRadius = "3px";

        btnContain[0].prepend(button);
    }

    

    let main = t[2];
    $('#ff-admin-get-data').click(function () {
        
        console.log(main)
    
    });

}


