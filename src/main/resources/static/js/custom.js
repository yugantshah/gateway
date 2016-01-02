/*
Copyright (c) 2015 Getway Properties
------------------------------------------------------------------
[Master Jquery]

Project:	Getway Properties

-------------------------------------------------------------------*/

(function ($) {
	"use strict";
	var getway_properties = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function () {

			if(!this.initialised) {
				this.initialised = true;
			} else {
				return;
			}

			// getway_properties Functions Calling
			this.RTL();
			this.Header_bottom_section();
			this.Search_property_tab();
			this.OWL();
			this.Nav_toggle();
			this.Listing_sidebar_tab();
			this.Check_all();
			this.Price_filter();

			///* Call function if Owl Carousel plugin is included */
//			if ( $.fn.owlCarousel ) {
//				this.owlCarousels();
//			}
//
//			/* Call function if Magnific Popup plugin is included */
//			if ( $.fn.magnificPopup) {
//				this.newsletterPopup();
//				this.lightBox();
//			}
//
//			/* Call function if Media element plugin is included */
//			if ($.fn.mediaelementplayer) {
//				this.mediaElement();
//			}
//
//			/* Call function if Media noUiSlider plugin is included */
//			if ($.fn.noUiSlider) {
//				this.priceSlider();
//			}

			var self = this;
			/* Imagesloaded plugin included in isotope.pkgd.min.js */
			/* Portfolio isotope + Blog masonry with images loaded plugin */
			if (typeof imagesLoaded === 'function') {
				/* */
				imagesLoaded(self.container, function() {
					self.isotopeActivate();
					// recall for plugin support
					self.isotopeFilter();
				});

				/* check images for blog masonry/grid */
				imagesLoaded(self.blogContainer, function() {
					self.blogMasonry();
				});

				/* check images for product masonry/grid index11 */
				imagesLoaded(self.productContainer, function() {
					self.productMasonry();
				});
			}

		},

		// getway_properties Functions definition
		RTL: function () {
			// On Right-to-left(RTL) add class
			var rtl_attr = $("html").attr('dir');
			if(rtl_attr){
				$('html').find('body').addClass("rtl");
			}
		},
		Search_property_tab: function(){
			$('.gp_search_property_tab > ul').each(function(){
				// For each set of tabs, we want to keep track of
				// which tab is active and it's associated content
				var $active, $content, $links = $(this).find('a');

				// If the location.hash matches one of the links, use that as the active tab.
				// If no match is found, use the first link as the initial active tab.
				$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
				$active.addClass('active');

				$content = $($active[0].hash);

				// Hide the remaining content
				$links.not($active).each(function () {
				  $(this.hash).hide();
				});

				// Bind the click event handler
				$(this).on('click', 'a', function(e){
				  // Make the old tab inactive.
				  $active.removeClass('active');
				  $content.hide();

				  // Update the variables with the new link and content
				  $active = $(this);
				  $content = $(this.hash);

				  // Make the tab active.
				  $active.addClass('active');
				  $content.show();

				  // Prevent the anchor's default click action
				  e.preventDefault();
				});
			  });
		},
		Header_bottom_section: function(){
			$('#gp_search_link').on('click', function(){
				$('.gp_header .gp_bottom').slideToggle();
				$("html, body").animate({ scrollTop: 0 }, "slow");
			});	
		},
		OWL: function(){
			var sync1 = $("#sync1");
			var sync2 = $("#sync2");
	
			sync2.on('changed.owl.carousel', function(event) {
				sync1.trigger('next.owl.carousel');
			});
			
			 
			// $('#prevItem').click(function () {
				// sync1.trigger('prev.owl.carousel');
				// sync2.trigger('prev.owl.carousel');
			// });
	
			sync1.owlCarousel({
				center : true,
				loop : true,
				items : 1,
				margin:0,
				nav : false,
				dots: false,
				animateOut: 'fadeOut',
			    animateIn: 'fadeIn',
				mouseDrag: false,
				pullDrag: false
				
				
			});
	
			sync2.owlCarousel({
				center : true,
				loop : true,
				items : 1,
				margin:10,
				nav : false,
				animateOut: 'fadeOut',
			    animateIn: 'fadeIn',
				mouseDrag: false,
				pullDrag: false
			});
			
			$('#custom_prev').click(function () {
				 sync2.trigger('prev.owl.carousel');
			 });
			$('#custom_next').click(function () {
				 sync2.trigger('next.owl.carousel');
			 }); 
			 
			 
			 
			 var gp_fps = $(".gp_featured_property_slider");
			 gp_fps.owlCarousel({
				center : false,
				loop : false,
				items : 4,
				margin:10,
				nav : true,
				animateOut: 'fadeOut',
			    animateIn: 'fadeIn',
				mouseDrag: false,
				pullDrag: false,
				navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
				responsive:{
					0:{
						items:1
					},
					768:{
						items:2
					},
					1024:{
						items:4
					}
				}
			  });
			
			
			var gp_rls = $(".gp_recent_listings_slider");
			 gp_rls.owlCarousel({
				center : false,
				loop : false,
				items : 1,
				margin:0,
				nav : false,
				dots: true,
				mouseDrag: false,
				pullDrag: false
			  });
			
			
			var gp_testimonial = $(".gp_testimonials_slider");
			 gp_testimonial.owlCarousel({
				center : false,
				loop : false,
				items : 1,
				margin:0,
				nav : false,
				dots: true,
				mouseDrag: false,
				pullDrag: false
			  });
			  
			  
			  
			// product slider   
			var $sync3 = $("#sync3"),
				$sync4 = $("#sync4"),
				flag = false,
				duration = 300;
			
			$sync3
				.owlCarousel({
					items: 1,
					margin: 0,
					nav: false,
					dots: false,
					afterInit : function(el){
					  el.find(".owl-item").eq(0).addClass("synced");
					}
				})
				.on('changed.owl.carousel', function (e) {
					if (!flag) {
						flag = true;
						$sync4.trigger('to.owl.carousel', [e.item.index, duration, true]);
						flag = false;
					}
				});
			
			$sync4
				.owlCarousel({
					margin: 7,
					items: 6,
					nav: true,
					navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'], 
					center: false,
					dots: false,
					navRewind: false
				})
				.on('click', '.owl-item', function () {
					$sync3.trigger('to.owl.carousel', [$(this).index(), duration, true]);
			
				})
				.on('changed.owl.carousel', function (e) {
					if (!flag) {
						flag = true;        
						$sync3.trigger('to.owl.carousel', [e.item.index, duration, true]);
						flag = false;
					}
			
			
				});
			
			$('#sync4').on('initialized.owl.carousel change.owl.carousel changed.owl.carousel', function(e) { 
				if (!e.namespace || e.type != 'initialized' && e.property.name != 'position') return
		
				var current = e.relatedTarget.current()
				var items = $(this).find('.owl-stage').children()
				var add = e.type == 'changed' || e.type == 'initialized'
				items.eq(e.relatedTarget.normalize(current)).toggleClass('current', add);
				
				$('#sync4 .owl-stage .owl-item:first-child').addClass('current');
				
			});
				
			
			
		},
		Nav_toggle: function(){
			$('.gp_nav_toggle').on('click', function(){
				$('.gp_header').toggleClass('nav_open');
				$(this).toggleClass('nav_open_toggle');	
			});	
		},
		Listing_sidebar_tab: function(){
			$('.listing_sidebar_tab > ul').each(function(){
				// For each set of tabs, we want to keep track of
				// which tab is active and it's associated content
				var $active, $content, $links = $(this).find('a');

				// If the location.hash matches one of the links, use that as the active tab.
				// If no match is found, use the first link as the initial active tab.
				$active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
				$active.addClass('active');

				$content = $($active[0].hash);

				// Hide the remaining content
				$links.not($active).each(function () {
				  $(this.hash).hide();
				});

				// Bind the click event handler
				$(this).on('click', 'a', function(e){
				  // Make the old tab inactive.
				  $active.removeClass('active');
				  $content.hide();

				  // Update the variables with the new link and content
				  $active = $(this);
				  $content = $(this.hash);

				  // Make the tab active.
				  $active.addClass('active');
				  $content.show();

				  // Prevent the anchor's default click action
				  e.preventDefault();
				});
			  });

		},
		Check_all: function(){
			// check all 
			$('.check_all').click(function(event) {  
				if(this.checked) {
					$('.property_type ul li ul.dropdown input').each(function() {
						this.checked = true;
					});
				}else{
					$('.property_type ul li ul.dropdown input').each(function() {
						this.checked = false;                       
					});         
				}
			});
			
			// check once
			$('.property_type ul li ul.dropdown input').click(function(event) {  
				if(this.checked) {
					$('.check_all').each(function() {
						this.checked = true;
					});
				}else{
					$('.check_all').each(function() {
						                  
					});         
				}
			});
    
		},
		Price_filter: function(){
			//woocommerce filter by price slider
			$('.slider').slider();	
		}
		
		
		






	};

	getway_properties.init();

	// Load Event
	$(window).on('load', function() {
		/* Trigger side menu scrollbar */
		//getway_properties.menuScrollbar();
	});

	// Scroll Event
	$(window).on('scroll', function () {

	});


})(jQuery);
