$(document).ready(function(){
	$(".camp").hide( );
	
	$('#bc-h').hover(function(){
		$('#base').toggle();
		$('.main').toggle();
	});
	$('#hr-h').hover(function(){
		$('#High').toggle();
		$('.main').toggle();
	});
	$('#cf-h').hover(function(){
		$('#camp').toggle();
		$('.main').toggle();
	});
	
});	
	
	
	
