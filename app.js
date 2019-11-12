$(document).ready(function(){

  var $body = $('#twiddle-body'); 
  var index = streams.home.length - 1; 
  //basic update of all twiddles 
  var updateTwiddle = function() {
    while(index >= 0) { 
      var tweet = streams.home[index];
      var $main = $('<li class="main"></li>');
      $main.appendTo($body);

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

  //allow user to click on username to filter tweets by user
  $(document).on("click", "a", function() {
    var username = $(this).data("value"); 
    $body.html(''); 
    //returns to homepage
    var $home = $('<div class="home"><a href="index.html">Go back to Twiddler</a></div>');
    $home.appendTo($body);
    // header displaying which user's tweets are shown
    var $twiddleUser = $('<header><h4>Now viewing...' + username +'</h4></header>');
    $twiddleUser.appendTo($body);

    // generate user's tweets similar to above
    var userIndex = streams.users[username].length - 1;

    while (userIndex >= 0) {
      var userTweet = streams.users[username][userIndex];
      var $main = $('<ul class="main"></ul>');
      $main.appendTo($body)
      var $tweet = $('<li class="tweet"></li>');
      $tweet.text(userTweet.message);
      $tweet.appendTo($main);
      var $timestamp = $('<p class="timestamp"></p>');
      $timestamp.text(userTweet.created_at);
      $timestamp.appendTo($main);
      var $user = $('<a class="user" data-value="' + userTweet.user + '"></a>');
      $user.text('@' + userTweet.user + ': ');
      $user.prependTo($main);
      userIndex -= 1;
      }
    }); 
 
});
