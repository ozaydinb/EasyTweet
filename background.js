chrome.extension.onMessage.addListener(function(request) {
  if(request && request.text && request.text.length <= 140){
    var tweetUrl = 'https://twitter.com/intent/tweet?text=' + request.text;
    chrome.tabs.create({ url: tweetUrl });
  } else if(request && request.text && request.text.length > 140) {
    alert('too long to tweet!');
  }
});
