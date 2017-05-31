
var $question = $("#question");
var $navigation = $("#navigation");
var cache = {};
$.each(types, function(index, aType) {
	$navigation.append("<span class=\"types\" data-index=\""+index+"\">"+aType.desc+"</span> ");
});

var jumpTo = function(index) {
	var aType = types[index];
	var updateData = function (data) {
		questions = _.filter(data.split("\n"), function(o) {
			o = o.trim();
			return !(o.length == 0 || o[0] == "#");
		});
		next();
	}
	if (cache[aType.link]) {
		updateData(cache[aType.link]);
	} else {
		$.get("config/"+aType.link, function(data) {
			alert(data);
			cache[aType.link] = data;
			updateData(data);
		});
	}
}
alert("asdfasdfdf");
$(".types").on("touchstart", function(event) {
	var $target = $(event.target);
	jumpTo(parseInt($target.data("index")));
});
alert("ccccccccccccccc");

var next = function() {
	$question.text(questions[Math.floor(Math.random()*questions.length)]);
}
$(document).bind("touchstart", function(){
	next();
});

alert("abc");
if (types.length > 0) {
	jumpTo(0);
}
alert("dddd");
