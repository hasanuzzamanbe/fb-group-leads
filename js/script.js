
console.log('hello from Fb-Leads script page');
jQuery(document).ready(function () {
    var button = document.createElement('button');
    button.id = 'ff-admin-get-data';
    button.style.outline = "none";
    button.innerHTML = 'Get All Data';
    var ap = $("[aria-label='Approve All']");
    var approve = $("[aria-label='Approve']");

    /*
    * SIngle section begin....
    */

    // single button creation - New Mode
    if (approve[0] && !$('.ff-admin-getUser').get(0)) {
        approve.each(function (item) {
            $(this).parent().parent().prepend("<button style='height:34px;margin-top:7px;border-radius: 5px;' class='ff-admin-getUser'>Capture Data</button>");
        })
    }

    // getting data from single user - New Mode
    $('.ff-admin-getUser').click(function () {
        var arr = [];
        let div = $(this).parents().eq(4).first(); // will modify later
        let name = div.find('.nc684nl6 .oajrlxb2')[0].innerText;
        let url = div.find('.nc684nl6 .oajrlxb2').attr('href');

        let formattedAnswers = [];
        let formattedQuestions = [];

        let q1 = div.find('.dati1w0a.qt6c0cv9.hv4rvrfc .oi732d6d');
        for (i = 0; i < q1.length; i++) {
            if (i % 2 !== 0) {
                formattedAnswers.push(q1[i].innerText)
            } else {
                formattedQuestions.push(q1[i].innerText)
            }
        }
        var otherInfo = '';
        $.each(div.find('.dwo3fsh8.g5ia77u1.rt8b4zig.n8ej3o3l'), function (index, item) {
            otherInfo += item.innerText + '\n';
        });

        let data = {
            questions: formattedQuestions,
            answers: formattedAnswers,
            user: {
                name: name,
                url: url,
                other_info: otherInfo
            }
        };
        pushToServer(data, $(this));
    });


    // single button creation - Old Mode
    if ($("#member_requests_pagelet").get(0) && !$('.ffadminold').get(0)) {
        let t = $("#member_requests_pagelet").find('._3k4n._4-u3');
        let main = t.last().find('.clearfix');
        main.each(function () {
            $(this).first().find('._4wsp._51xa').first().prepend("<button class='ffadminold _4jy0 _4jy3 _517h _51sy _42ft'>Capture Data</button>");
        })
    }

    // getting data from single user - Old Mode
    $('.ffadminold').click(function () {
        let mainDiv = $(this).closest('.clearfix');
        let arr = [];
        let name = mainDiv.find('._z_3')[0].innerText;
        let url = 'https://www.facebook.com' + mainDiv.find('._z_3').attr('href');
        let formattedQuestions = [];
        let formattedAnswers = [];

        $.each(mainDiv.find('.uiList._4kg._6-i._6-h').find('._50f8'), function (index, item) {
            formattedQuestions.push($(item).text());
        });

        $.each(mainDiv.find('.uiList._4kg._6-i._6-h').find('text'), function (index, item) {
            formattedAnswers.push($(item).text());
        });

        // other-info-for single user
        let otherInfo = mainDiv.find('._z_4').find('._366h.uiList._4kg').first()[0].innerText;

        let data = {
            questions: formattedQuestions,
            answers: formattedAnswers,
            user: {
                name: name,
                url: url,
                other_info: otherInfo
            }
        };
        pushToServer(data, $(this));
    });


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
                let name = $(this).find('.nc684nl6 .oajrlxb2')[0].innerText;
                let url = $(this).find('.nc684nl6 .oajrlxb2').attr('href');
                let q1 = $(this).find('.dati1w0a.qt6c0cv9.hv4rvrfc .oi732d6d');
                let formattedQuestions = [];
                let formattedAnswers = []
                for (i = 0; i < q1.length; i++) {
                    if (i % 2 == 0) {
                        formattedQuestions.push(q1[i].innerText);
                    } else {
                        formattedAnswers.push(q1[i].innerText);
                    }
                }
                let otherInfo = '';
                $.each($(this).find('.dwo3fsh8.g5ia77u1.rt8b4zig.n8ej3o3l'), function (index, item) {
                    otherInfo += item.innerText + '\n';
                });
                let data = {
                    questions: formattedQuestions,
                    answers: formattedAnswers,
                    user: {
                        name: name,
                        url: url,
                        other_info: otherInfo
                    }
                };

                arr.push(data);
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
                    let name = $(this).find('._66jq ._z_3')[0].innerText;
                    let url = 'https://www.facebook.com' + $(this).find('._z_3').attr('href');
                    let formattedQuestions = [];
                    let formattedAnswers = [];
                    $.each($(this).find('.uiList._4kg._6-i._6-h').find('._50f8'), function (index, item) {
                        formattedQuestions.push($(item).text());
                    });

                    $.each($(this).find('.uiList._4kg._6-i._6-h').find('text'), function (index, item) {
                        formattedAnswers.push($(item).text());
                    });

                    // other-info-for single user
                    let otherInfo = $(this).find('._z_4').find('._366h.uiList._4kg').first()[0].innerText;


                    let data = {
                        questions: formattedQuestions,
                        answers: formattedAnswers,
                        user: {
                            name: name,
                            url: url,
                            other_info: otherInfo
                        }
                    };

                    arr.push(data);
                })
                console.log(arr);
            });
        }

    }


    function pushToServer(data, button) {
        chrome.storage.sync.get(['ff_lead_api', 'ff_form_id', 'ffgl_auto_approve'], function (result) {
            let apiUrl = result.ff_lead_api;
            data.form_id = result.ff_form_id;
            data.fb_capture = 1;
            var str = window.location.pathname;
            var parts = str.split("/");
            var index = parts.indexOf("groups") + 1;
            data.group_id = parts[index];

            $.get(apiUrl, data)
                .then(response => {
                    button.text('Added');
                })
                .fail((error) => {
                    button.text('failed');
                });
        });

    }

});
