$(document).ready(function(){
	$("body").css("background-color", "red");
	$(".the-head").append("<div>I've been dynamically added. Neat-o</div>");
	$(".click").on("click", function(){
		$(".click p").append("<div>I\'m new content. Dynamic, huh?</div>");
	});
	$(".copied").on("mouseover", function(){
		$(this).html("<div>I\'m new here. \'Twas a mouseover.</div>")
	});
	$("button").on("click", function(e){
		e.preventDefault();
		var theInput = $("#my-input").val();
		$("#my-list").append("<li>" + theInput + "</li>");
		$("my-input").val(" ");
	})
});