var button = document.createElement('button');
button.id = 'ff-admin-get-data';
button.style.outline = "none";
button.innerHTML = 'Get Data';
var ap = $("[aria-label='Approve All']");

var aprove = $("[aria-label='Approve']");
if (aprove[0] && !$('.ff-admin-getUser').get(0)) {
    aprove.each(function (item) {
        $(this).parent().parent().prepend("<button style='height:24px;margin-top:12px;' class='ff-admin-getUser'>Get User</button>");
    })
}

// single data
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

    arr.push(obj)
    console.log(arr[0])
})


// old single
$('.ffadminold').click(function () {
    // var arr = [];
    // main.each(function () {
    //     let obj = {};
    //     let question = $(this).find('.uiList._4kg._6-i._6-h').find('._50f8') // get questions 
    //     let answer = $(this).find('.uiList._4kg._6-i._6-h').find('text') // ans

    //     obj.name = $(this).find('._66jq ._z_3')[0].innerText;

    //     for (i = 0; i < question.length; i++) {

    //         obj['question' + (i + 1)] = question[i].innerText;

    //         obj['answer' + (i + 1)] = answer[i].innerText;


    //     }
    //     arr.push(obj)

    // })
    console.log($(this), 'hello')
})

if ($("[aria-label='Approve All']")[0]) {
    // all data in new mode
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
    //all data in old mode
    let t = $("#member_requests_pagelet").find('._3k4n._4-u3');
    let btnContain = t.find('.clearfix').find('._4wsp._3qn7._61-0');
    let main = t.last().find('.clearfix');

    if (!$('#ff-admin-get-data').get(0) && btnContain[0]) {
        button.style.height = "24px";
        button.style.borderRadius = "3px";

        btnContain[0].prepend(button);
    }
    main.each(function(){
        $(this).first().find('._4wsp._51xa').first().prepend("<button style='height:24px;margin-top:12px;' class='ffadminold'>Get User</button>");
    })

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
                arr.push(obj)

            })
            console.log(arr)
        });
    }

}



// will post to google sheet

// function postToGoogle() {
//     var field1 = 'ahhasan@mail.com';
//     var field2 = '864223';
//     var field3 = 'MD Shamim';

//     $.ajax({
//         url: "https://docs.google.com/forms/d/1D4pLXakRda5ZP2_rgsEYHs93wAlXRXXz-XcNZfIUqSo/formResponse?",
//         data: { "entry.2032476103": field1, "entry.1520737071": field2, "entry.460425551": field3 },
//         type: "POST",
//         dataType: "xml",
//         success: function (res) {
//             console.log(res)
//         }
//     });
//     return false;
// }