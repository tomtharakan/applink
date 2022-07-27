if(window.location.href.endsWith("Members/Home")) {
  window.location.assign("https://testarea.pfpleisure.org/LhWebTest/en/Members/Home/MyMemberships")
   
}
if(window.location.href.includes("MyMemberships")) {
  setTimeout(function() {
  window.webkit.messageHandlers.handleNativeAction.postMessage({"type":"stopLoading", "key":"val"});
  }, 150);
}
