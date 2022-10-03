$(function(){
	$('.other_heading').click(function(){
		$(this).toggleClass('selected');
		$(this).next().slideToggle();
	});
});