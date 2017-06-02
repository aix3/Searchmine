chrome.webRequest.onCompleted.addListener(function(details) {
	// var console = chrome.extension.getBackgroundPage().console;
	if (details.url.match(/https?:\/\/.*?\/issues\/\d+\/edit.js/g) != null 
		|| details.url.match(/https?:\/\/.*?\/projects\/.*?\/issues\/new.js/g)) {
		chrome.tabs.query({"active": true, "currentWindow": true}, function (tabs) {
			var tabId = tabs[0].id;
			chrome.tabs.sendMessage(tabId, {"msg":"initSel"});
		});
	}
}, {urls: ["<all_urls>"]});