var $question = $("#question");
var next = function() {
	$question.text(questions[Math.floor(Math.random()*questions.length)]);
}
next();
$(document).bind("touchstart", function(){
	next();
});
