<script src='https://raw.github.com/timrwood/moment/1.7.2/min/moment.min.js'></script>
<script>
$(document).ready(function() {
var username = 'aplusk';
var count = 10;

 // var query = "birds";
 // var url="http://search.twitter.com/search.json?q=" + query +
"&rpp=5&include_entities=true&result_type=mixed&callback=?";
$.getJSON('https://api.twitter.com/1/statuses/user_timeline.json?screen_name='
+ username + '&amp;callback=?',
	  function(data) {
	    $.each(data,function() {
             var tweet = this;
             var user = tweet.user;

             var li = $("<li>").addClass("tweet");

             $("<img>").attr("src",user.profile_image_url)
                       .appendTo(li);

             var date = moment(tweet.created_at);

             $("<div>")
                .text(date.fromNow())
                .addClass("tweetDate")
                .appendTo(li);

             $("<div>")
                .text(tweet.text)
                .addClass("tweetText")
                .appendTo(li);

             li.appendTo("#tweets");
             console.log(tweet);
           });
	  });
});
</script>

<ul id='tweets'></ul>



