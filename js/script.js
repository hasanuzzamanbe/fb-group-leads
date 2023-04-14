console.log('hello from Fb-Leads script pages');

var buttonLoaded = false;

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
                if(result.ffgl_auto_approve) {
                    $(button).parent().find("[aria-label='Approve']").click();
                }
            })
            .fail((error) => {
                button.text('failed');
            });
    });
}

function loadApproveButtons(approve) {
    var button = document.createElement('button');
    button.id = 'ff-admin-get-data';
    button.style.outline = "none";
    button.innerHTML = 'Capture All Data';
    var ap = $("[aria-label='Approve All']");

    console.log(approve);

    // single button creation - New Mode
    if (approve[0] && !$('.ff-admin-getUser').get(0)) {
        approve.each(function (item) {
            $(this).parent().parent().prepend("<button style='height: 34px;margin-top: 7px;border-radius: 5px;background: #7742e6;color: white;border: 0;padding: 5px 15px;font-weight: bold; cursor: pointer;' class='ff-admin-getUser'>Capture Data</button>");
        });
    }

    // single button creation - Old Mode
    if ($("#member_requests_pagelet").get(0) && !$('.ffadminold').get(0)) {
        let t = $("#member_requests_pagelet").find('._3k4n._4-u3');
        let main = t.last().find('.clearfix');
        main.each(function () {
            $(this).first().find('._4wsp._51xa').first().prepend("<button class='ffadminold _4jy0 _4jy3 _517h _51sy _42ft'>Capture Data</button>");
        })
    }
}

function registerButtonClick() {
    // getting data from single user - New Mode
    $('.ff-admin-getUser').click(function () {
        var arr = [];
        let div = $(this).closest('.x1y1aw1k'); // will modify later
        const $profleName = div.find('.xt0psk2 a');

        const profileData = {};

        profileData.name = $profleName.text();
        profileData.url = $profleName.attr('href');

        var otherInfo = '';
        $.each(div.find('.x1yztbdb .xjyslct'), function (index, item) {
            otherInfo += item.innerText + '\n';
        });

        let formattedAnswers = [];
        let formattedQuestions = [];

        let questionBlocks = div.find('.x1y1aw1k.x4uap5');

        jQuery.each(questionBlocks, function (index, block) {
            formattedQuestions[index] = $(block).find('>span').text();
            formattedAnswers[index] = $(block).find('>div').text()
        });

        profileData.other_info = otherInfo;

        let data = {
            questions: formattedQuestions,
            answers: formattedAnswers,
            user: profileData
        };

        pushToServer(data, $(this));
    });

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
}

function loadButtons() {

    var approve = $("[aria-label='Approve']");

    if(!approve.length) {
        setTimeout(loadButtons, 2000);
        return ;
    }


    if(buttonLoaded) {
        return ;
    }

    buttonLoaded = true;
    loadApproveButtons(approve);
    registerButtonClick();
}

jQuery(window).on('load', function() {
    loadButtons();
});


