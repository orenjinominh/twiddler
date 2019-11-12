$(document).ready(function(){

  var $body = $('#twiddle-body'); 
  var index = streams.home.length - 1; 
  
  var updateTwiddle = function() {

    while(index >= 0) { 
      var tweet = streams.home[index];
      var $main = $('<li class="main"></li>');
      $main.appendTo($body)

      var $tweet = $('<div class="tweet"></div>'); 
      $tweet.text(' ' + tweet.message + ' '); 
      $tweet.appendTo($main);
      var $timestamp = $('<div class="timestamp"></div>');
      $timestamp.text(' ' + tweet.created_at + ' '); 
      $timestamp.appendTo($main);

      var $user = $('<a class="user" data-value="' + tweet.user + '"></a>');
      $user.addClass(".user").text('@' + tweet.user + ': '); 
      $user.prependTo($main); 
      index --; 
    }
  };

  updateTwiddle()

 
});
