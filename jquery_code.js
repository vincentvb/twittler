$(document).ready(function(){
      var $body = $('body');
      $body.html('');
      var newDiv = ('<div class="title"><p>Twittler: A project by Vincent Van Buskirk for Hack Reactor</p></div>');
      $($body).append(newDiv);

      var index = streams.home.length - 1;
      while(index >= 0){
        var tweet = streams.home[index];
        var $tweet = $('<div class="tweets"></div>');
        $tweet.text('@' + tweet.user + ': ' + tweet.message);
        $('<p class=user>posted by <a href="#">@'+tweet.user+'</a></p>').appendTo($tweet);
        $(".title").after($tweet);
        index -= 1;
      }
      generateLastTweet = function() {
        var tweet = streams.home[streams.home.length-1];
        var $tweet = $('<div class="tweets"></div>');
        $tweet.text('@' + tweet.user + ': ' + tweet.message)
        if (tweet.user === "shawndrost") {
          $('<p class=user>posted by <a class="shawndrost" href="#">@'+tweet.user+'</a></p>').appendTo($tweet);
          $(".title").after($tweet);
        }
        else if (tweet.user === "sharksforcheap") {
          $('<p class=user>posted by <a class="sharksforcheap" href="#">@'+tweet.user+'</a></p>').appendTo($tweet);
          $(".title").after($tweet);
        }
        else if (tweet.user === "mracus") {
          $('<p class=user>posted by <a class="mracus" href="#">@'+tweet.user+'</a></p>').appendTo($tweet);
          $(".title").after($tweet);
        }
        else if (tweet.user === "douglascalhoun") {
          $('<p class=user>posted by <a class="douglascalhoun" href="#">@'+tweet.user+'</a></p>').appendTo($tweet);
          $(".title").after($tweet);
        }

      }

      setInterval(generateLastTweet, 2000);

      


    });
