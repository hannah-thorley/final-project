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
  
  $('#hamburger').on('click', function () {
    $('header nav').slideToggle()
  });

  $('.content-fade').waypoint(function() {
    $(this.element).addClass('is-visible'); 
  }, {
    offset: '75%'
  });

  $('header nav .scroll').on('click', function(e) {
    e.preventDefault();

    var target = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 800);
  });

  	$('.hero-carousel').slick({
		slidesToShow: 1,
	  	slidesToScroll: 1,
	  	autoplay: true,
	  	autoplaySpeed: 1800,
	});

});