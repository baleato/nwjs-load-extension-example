chrome.runtime.onMessageExternal.addListener(
    function(request, sender, sendResponse) {
        sendResponse('Hello World!');
    }
);
