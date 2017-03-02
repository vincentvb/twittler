$(document).ready(function(){
      var $body = $('body');
      $body.html('');

      var newDiv = ('<div class="title"><p>Twittler: A project by Vincent Van Buskirk for Hack Reactor</p></div>');
      $($body).append(newDiv);
      var newDiv2 = $('<div class = "shawndrosttweets"<p><a href="#" class="myButton">close</a></p></div>');
      $($body).append(newDiv2);
      var newDiv3 = $('<div class = "mracustweets"<p><a href="#" class="myButton">close</a></p></div>');
      $($body).append(newDiv3);
      var newDiv4 = $('<div class = "sharksforcheaptweets"<p><a href="#" class="myButton">close</a></p></div>');
      $($body).append(newDiv4);
      var newDiv5 = $('<div class = "douglascalhountweets"<p><a href="#" class="myButton">close</a></p></div>');
      $($body).append(newDiv5);

      var main = $('<main></main>')
      $($body).append(main)

      var index = streams.home.length - 1;
      while(index >= 0){
        var tweet = streams.home[index];
        var $tweet = $('<div class="tweets"></div>');
        $tweet.text('@' + tweet.user + ': ' + tweet.message);
        if (tweet.user === "shawndrost") {
          var $tweet2 = $('<div class="tweets"></div>');
          $tweet2.text('@' + tweet.user + ': ' + tweet.message);
          $('<p class=user>posted by <a class="shawndrost" href="#">@'+tweet.user+'</a></p>').appendTo($tweet);
          $(main).prepend($tweet);
          $(".shawndrosttweets").prepend($tweet2);
          index -= 1;
        }
        else if (tweet.user === "sharksforcheap") {
          var $tweet2 = $('<div class="tweets"></div>');
          $tweet2.text('@' + tweet.user + ': ' + tweet.message);
          $('<p class=user>posted by <a class="sharksforcheap" href="#">@'+tweet.user+'</a></p>').appendTo($tweet);
          $(main).prepend($tweet);
          $('.sharksforcheaptweets').prepend($tweet2);
          index -= 1
        }
        else if (tweet.user === "mracus") {
          var $tweet2 = $('<div class="tweets"></div>');
          $tweet2.text('@' + tweet.user + ': ' + tweet.message);
          $('<p class=user>posted by <a class="mracus" href="#">@'+tweet.user+'</a></p>').appendTo($tweet);
          $(main).prepend($tweet);
          $('.mracustweets').prepend($tweet2);
          index -= 1;
        }
        else if (tweet.user === "douglascalhoun") {
          var $tweet2 = $('<div class="tweets"></div>');
          $tweet2.text('@' + tweet.user + ': ' + tweet.message);
          $('<p class=user>posted by <a class="douglascalhoun" href="#">@'+tweet.user+'</a></p>').appendTo($tweet);
          $(main).prepend($tweet);
          $('.douglascalhountweets').prepend($tweet2);
          index -= 1;
        }
      }


      generateLastTweet = function() {
        var tweet = streams.home[streams.home.length-1];
        var $tweet = $('<div class="tweets"></div>');
        var $tweet2 = $('<div class="tweets"></div>');
        $tweet.text('@' + tweet.user + ': ' + tweet.message);
        $tweet2.text('@' + tweet.user + ': ' + tweet.message);
        if (tweet.user === "shawndrost") {
          $('<p class=user>posted by <a class="shawndrost" href="#">@'+tweet.user+'</a></p>').appendTo($tweet);
          $(main).prepend($tweet);
          $(".shawndrosttweets").prepend($tweet2);
        }
        else if (tweet.user === "sharksforcheap") {
          $('<p class=user>posted by <a class="sharksforcheap" href="#">@'+tweet.user+'</a></p>').appendTo($tweet);
          $(main).prepend($tweet);
          $(".sharksforcheaptweets").prepend($tweet2);
        }
        else if (tweet.user === "mracus") {
          $('<p class=user>posted by <a class="mracus" href="#">@'+tweet.user+'</a></p>').appendTo($tweet);
          $(main).prepend($tweet);
          $(".mracustweets").prepend($tweet2);
        }
        else if (tweet.user === "douglascalhoun") {
          $('<p class=user>posted by <a class="douglascalhoun" href="#">@'+tweet.user+'</a></p>').appendTo($tweet);
          $(main).prepend($tweet);
          $(".douglascalhountweets").prepend($tweet2);
        }

      }

      $(document).on('click', ".shawndrost", function() {
        $(".shawndrosttweets").show();
      })
      $(document).on('click', ".mracus", function() {
        $(".mracustweets").show();
      });
      $(document).on('click', ".sharksforcheap", function() {
        $(".sharksforcheaptweets").show();
      });
      $(document).on('click', ".douglascalhoun", function() {
        $(".douglascalhountweets").show();
      });
      $(".myButton").on('click', function() {
        $(this).closest("div").hide();
      });

      setInterval(generateLastTweet, 2000);




    });
