var height = 16; 
var width = 16;

$(document).ready(function(){
	
	makegrid(height, width);
	
	
	$('.button').hover(
		function(){
			$(this).addClass('active');
		},
		function(){
			$(this).removeClass('active');
		}
	);

	$('.button').click(function(){
		$('.start').remove();
		height = prompt("Choose height of etch-sketch:"); 
		width = prompt("Choose width of etch-sketch:");
		$('#wrap').append('<div class = "start"></div>');
		makegrid(height, width);
	});

});

function makegrid(height, width) {
	var len = Math.floor(800/(height)); 
	len = (len - 4); 
	for (var i = 0; i < height; i++) {
		for (var j = 0; j < width; j++) {
			$('.start').append('<div class = "pixel"></div>');
			
			$('.pixel').css({"height":len+"px"}); 
			$('.pixel').css({"width":len+"px"}); 
		}
		$('.start').append('<br/>');
	}
	$('.pixel').hover(function(){
		$(this).addClass('red'); 
	});
}



