var scriptFetch = document.createElement('script');
scriptFetch.src = chrome.runtime.getURL('override-fetch.js');
(document.head || document.documentElement).appendChild(scriptFetch);

var scriptXHR = document.createElement('script');
scriptXHR.src = chrome.runtime.getURL('override-xhr.js');
(document.head || document.documentElement).appendChild(scriptXHR);
