var colors = ['red', 'blue', 'navy', 'black', 'yellow', 'orange'];


i = 0;

$('#changecolor').click(function(){

	$('div').css("backgroundColor", colors[i]);
	i = (i==colors.length-1) ? 0 : (i+1);


});