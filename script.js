if (window.location.hostname !== 'www.facebook.com') {
  alert('Please go to fb member approval page.');
}

var button = document.createElement('button');
button.id = 'ff-admin-get-data';
button.style.outline = "none";
button.innerHTML = 'Get All Data';
var ap = $("[aria-label='Approve All']");
var approve = $("[aria-label='Approve']");

/*
*
* SIngle section begin....
*/

// single button creation - New Mode
if (approve[0] && !$('.ff-admin-getUser').get(0)) {
    approve.each(function (item) {
        $(this).parent().parent().prepend("<button style='height:34px;margin-top:7px;border-radius: 5px;' class='ff-admin-getUser'>Get User</button>");
    })
}

// getting data from single user - New Mode
$('.ff-admin-getUser').click(function () {
    var arr = [];
    let div = $(this).parent().parent().parent().parent().parent().first(); // will modify later
    let obj = {};
    obj.name = div.find('.nc684nl6 .oajrlxb2')[0].innerText;
    let q1 = div.find('.dati1w0a.qt6c0cv9.hv4rvrfc .oi732d6d');
    for (i = 0; i < q1.length; i++) {
        if (i % 2 == 0) {
            obj['question' + (i + 1)] = q1[i].innerText;
        } else {
            obj['answer' + (i)] = q1[i].innerText;
        }
    }
    pushToServer(obj, $(this))
})


// single button creation - Old Mode
if ($("#member_requests_pagelet").get(0) && !$('.ffadminold').get(0)) {
    let t = $("#member_requests_pagelet").find('._3k4n._4-u3');
    let main = t.last().find('.clearfix');
    main.each(function () {
        $(this).first().find('._4wsp._51xa').first().prepend("<button style='height:24px;' class='ffadminold'>Get User</button>");
    })
}

// getting data from single user - Old Mode
$('.ffadminold').click(function () {
    let mainDiv = $(this).closest('.clearfix');
    let obj = {};
    let question = mainDiv.find('.uiList._4kg._6-i._6-h').find('._50f8') // get questions 
    let answer = mainDiv.find('.uiList._4kg._6-i._6-h').find('text') // ans
    obj.name = mainDiv.find('._z_3')[0].innerText;
    for (i = 0; i < question.length; i++) {
        obj['question' + (i + 1)] = question[i].innerText;
        obj['answer' + (i + 1)] = answer[i].innerText;
    }
    pushToServer(obj, $(this));

})





/*
* All data section Begin...
*
*/

if ($("[aria-label='Approve All']")[0]) {
    // getting all data and pushing Button in - New mode
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
} else {
    //getting all data and pushing button in - Old mode
    let t = $("#member_requests_pagelet").find('._3k4n._4-u3');
    let btnContain = t.find('.clearfix').find('._4wsp._3qn7._61-0');
    let main = t.last().find('.clearfix');
    if (!$('#ff-admin-get-data').get(0) && btnContain[0]) {
        button.style.height = "24px";
        button.style.borderRadius = "3px";
        btnContain[0].prepend(button);
    }

    if (main.length > 1) {
        $('#ff-admin-get-data').click(function () {
            var arr = [];
            main.each(function () {
                let obj = {};
                let question = $(this).find('.uiList._4kg._6-i._6-h').find('._50f8') // get questions 
                let answer = $(this).find('.uiList._4kg._6-i._6-h').find('text') // ans
                obj.name = $(this).find('._66jq ._z_3')[0].innerText;
                for (i = 0; i < question.length; i++) {
                    obj['question' + (i + 1)] = question[i].innerText;
                    obj['answer' + (i + 1)] = answer[i].innerText;
                }
                arr.push(obj);
            })
            console.log(arr);
        });
    }

}


function pushToServer(data, button){
 console.log(data,button, 'server func called')
    var name = data.name;
    var field1 = data.answer1;
    var field2 = data.answer2;
    var field3 = data.answer3;
   
    $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLScG1Oj_XmoWcjPnie_0Yrk6uvTFd_6CYtxls0-SqzFXXVgYkw/formResponse?",
        data: { "entry.496258767": name, "entry.273905079": field1, "entry.10002227": field2, "entry.1324394898": field3 },
        type: "POST",
        dataType: "xml",
        success: function (res) {
            button.get(0).innerHTML = '<span style="color:green; cursor: not-allowed;">Added</span>';
            button[0].disabled = true; 
        },
        error: function ( ajaxOptions) {
            alert(ajaxOptions.statusText + ': Data is not pushed !!!' );
        }
    });
    return false;
}
