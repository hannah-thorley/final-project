console.log('ready');

$(document).ready(function() {
  $('#prices-button').on('click', function(event){
		event.preventDefault();
    $('#show-this-on-click').slideToggle();
  });
  $('.readmore').on('click', function(event){
		event.preventDefault();
    $('#show-this-to-read').slideDown();
    $('.readmore').hide();
    $('.readless').show();
  });
  $('.readless').on('click', function(event){
		event.preventDefault();
	$('#show-this-to-read').slideUp();
    $('.readless').hide();
    $('.readmore').show();
  });

    $('.readmore-2').on('click', function(event){
		event.preventDefault();
    $('#show-this-to-read-2').slideDown();
    $('.readmore-2').hide();
    $('.readless-2').show();
  });
  $('.readless-2').on('click', function(event){
		event.preventDefault();
	$('#show-this-to-read-2').slideUp();
    $('.readless-2').hide();
    $('.readmore-2').show();
  });

  $('#about').mouseenter(function(){
  	$('#about').fadeTo('fast', 1);
  });

    $('#session-info').mouseenter(function(){
  	$('#session-info').fadeTo('fast', 1);
  });

    $('#testimonials').mouseenter(function(){
  	$('#testimonials').fadeTo('fast', 1);
  });

    $('#contact').mouseenter(function(){
  	$('#contact').fadeTo('fast', 1);
  });

$(function(){
	$('.hero-carousel').slick()
});

});