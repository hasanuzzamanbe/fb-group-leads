
console.log('hello from Fb-Leads script pages');
jQuery(window).on('load', function() {
    console.log('page loaded');
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


    function pushToServer(data, button) {
        chrome.storage.sync.get(['ff_lead_api', 'ffgl_auto_approve'], function (result) {
            let apiUrl = result.ff_lead_api;
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
