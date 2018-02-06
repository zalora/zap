jQuery(function($){

'use strict';


    // ----------------------------------------------
    // Preloader
    // ----------------------------------------------
	(function () {
	    $(window).load(function() {
	        $('#pre-status').fadeOut();
	        $('#st-preloader').delay(350).fadeOut('slow');
	    });
	}());


    // ---------------------------------------------- 
    //  Isotope Filter 
    // ---------------------------------------------- 
	(function () {
		var winDow = $(window);
		var $container=$('.service-items');
		var $filter=$('.filter');

		try{
			$container.imagesLoaded( function(){
				$container.show();
				$container.isotope({
					filter:'*',
					layoutMode:'masonry',
					animationOptions:{
						duration:750,
						easing:'linear'
					}
				});
			});
		} catch(err) {
		}

		winDow.bind('resize', function(){
			var selector = $filter.find('a.active').attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {
			}
			return false;
		});

		$filter.find('a').click(function(){
			var selector = $(this).attr('data-filter');

			try {
				$container.isotope({ 
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {

			}
			return false;
		});


		var filterItemA	= $('.filter a');

		filterItemA.on('click', function(){
			var $this = $(this);
			if ( !$this.hasClass('active')) {
				filterItemA.removeClass('active');
				$this.addClass('active');
			}
		});
	}()); 

  	// -------------------------------------------------------------
    // Animated scrolling / Scroll Up
    // -------------------------------------------------------------

    (function () {
        $('li a[href*=#]').bind("click", function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top -79
            }, 1000);
            e.preventDefault();
        });
    }());


    // -------------------------------------------------------------
    // Back To Top
    // -------------------------------------------------------------

    (function () {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });
    }());
	

    // ----------------------------------------------
    // Parallax Scrolling
    // ----------------------------------------------
	(function () {
		$(window).bind('load', function () {
			parallaxInit();						  
		});
		function parallaxInit() {		
			$("#testimonial").parallax("50%", 0.3);
		}	
		parallaxInit();
	}());

    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
    
});