$(document).ready(function() {
    $(document).off('keyup').on('keyup', function(e) {
      if(e.which !== 84){
        return;
      }
      var selection = window.getSelection();
      var tweet= {
        text:selection.toString().trim()
      };
      chrome.extension.sendMessage(tweet);
    });

  });
