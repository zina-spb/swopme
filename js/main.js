// Burger menu

$(document).ready(function(){
  $('.icon').click(function(){
    $('.icon').toggleClass('active');
    $('.menu-mob').toggleClass('menu-on');
  })
})

jQuery(document).ready(function($){
	//open popup
	$('.button').on('click', function(event){
		event.preventDefault();
		$('.cd-popup').addClass('is-visible');
	});

	//close popup
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup').removeClass('is-visible');
	    }
    });
});
