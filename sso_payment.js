if(window.location.href.includes("Home")) {
  window.location.assign("https://testarea.pfpleisure.org/LhWebTest/en/Members/MyPayments")
   window.webkit.messageHandlers.handleNativeAction.postMessage({"type":"stopLoading", "key":"val"});
  }
