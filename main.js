chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message && message.msg == "initSel") {
        initSel();
    }
});

function initSel() {
    var targetSel = $("#issue_assigned_to_id");
    var memberSel = $("#issue_custom_field_values_4");

    targetSel.select2();
    memberSel.select2();

    targetSel.next().width('60%');
    memberSel.next().width('95%');
}

function selectAuthor() {
    var author = $("p.author>a.user.active")[0].innerText;
    $("#issue_assigned_to_id option").each(function () {
        var t = $(this);
        if(t.text() == author) {
            var targetSel = $("#issue_assigned_to_id");
            targetSel.val(t.val());
            return;
        }
    });
}

function initEvent() {
    var st = $("#issue_status_id");
    // 驳回或待验证
    if (st.val() == 6 || st.val() == 24) {
        selectAuthor();
    }
    setTimeout(function () {
        $("#issue_status_id").change(initEvent);
    }, 700);
}

$(function () {
    var issue = $("#issue_tracker_id");
    // 缺陷类型
    if (issue.val() == 6) {
        $("#issue_status_id").change(initEvent);
    }
});

initSel();