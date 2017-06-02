function initSel() {
    var targetSel = $("#issue_assigned_to_id");
    var memberSel = $("#issue_custom_field_values_4");

    targetSel.select2();
    memberSel.select2();

    targetSel.next().width('60%');
    memberSel.next().width('95%');
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if(message && message.msg == "initSel"){
        initSel();
    }
});

initSel();