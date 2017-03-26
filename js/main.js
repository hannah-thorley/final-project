console.log('ready');

$(document).ready(function() {
  $('#prices-button').on('click', function(event){
		event.preventDefault();
    $('#show-this-on-click').slideToggle();
});

$(function(){
	$('.hero-carousel').slick();
});
});