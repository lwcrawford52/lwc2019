jQuery(document).ready(function($){

	var $menu_toggle = $('.menu-toggle');

	// Open and close the mobile navigation when clicking on the menu icon.

	$menu_toggle.on('click', function(event){
		event.preventDefault();

		$menu_toggle.toggleClass('clicked');
		$(".secondary-navigation").toggleClass("slide-content-down");
		$(".mobile-navigation").toggleClass("show-secondary-navigation");

	});

	// Reset the mobile navigation when the broswer is larger than 960 pixels.

	$(window).resize(function(){

		var minwidth = $(window).innerWidth();

		if(minwidth > 800){
			$menu_toggle.removeClass('clicked');
			$(".secondary-navigation").removeClass("slide-content-down");
			$(".mobile-navigation").removeClass("show-secondary-navigation");

		}
	});

	// Animates anchor scroll effect.

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
			var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
			}, 500);
				return false;
			}
		}
	});

	// Removes orphans in paragraph text reflow.

	$('p').each(function(){
		var string = $(this).html();
		string = string.replace(/ ([^ ]*)$/,'&nbsp;$1');
		$(this).html(string);
	});

});
