jQuery(function ($) {
    'use strict';
	
        // Header Sticky
		$(window).on('scroll',function() {
            if ($(this).scrollTop() > 350){  
                $('.navbar-area').addClass("is-sticky");
            }
            else{
                $('.navbar-area').removeClass("is-sticky");
            }
		});

		// Mean Menu
		jQuery('.mean-menu').meanmenu({
			meanScreenWidth: "1199"
        });
		
		// Others Option For Responsive JS
		$(".others-option-for-responsive .dot-menu").on("click", function(){
			$(".others-option-for-responsive .container .container").toggleClass("active");
		});
		
		// Button Hover JS
		$('.default-btn')
		.on('mouseenter', function(e) {
			var parentOffset = $(this).offset(),
			relX = e.pageX - parentOffset.left,
			relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
		})
		.on('mouseout', function(e) {
			var parentOffset = $(this).offset(),
			relX = e.pageX - parentOffset.left,
			relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
		});

		

        // WOW Animation JS
		if($('.wow').length){
			var wow = new WOW({
				mobile: false
			});
			wow.init();
		}

		// Go to Top
		$(window).on('scroll', function(){
			var scrolled = $(window).scrollTop();
			if (scrolled > 600) $('.go-top').addClass('active');
			if (scrolled < 600) $('.go-top').removeClass('active');
		});  
		$('.go-top').on('click', function() {
			$("html, body").animate({ scrollTop: "0" },  500);
		});
		
        // Preloader
		jQuery(window).on('load',function(){
			jQuery(".preloader").fadeOut(500);
		});
        
}(jQuery));