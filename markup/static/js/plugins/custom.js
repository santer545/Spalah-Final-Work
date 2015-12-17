$(document).ready(function(){
	$(".owl-delivery").owlCarousel({
		themeClass: '.owl-delivery',
		items: 1,
		nav: true,
		navText: ['',''],
		responsiveClass:true
	});
	$(".owl-thumbnail").owlCarousel({
		themeClass: '.owl-thumbnail',
		items: 5,
		nav: true,
		navText: ['',''],
		margin: 30,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			768:{
				items:3,
			},
			1200:{
				items:4,
			},
			1600:{
				items:5
			}
		}
	});
	$(".owl-carousel").owlCarousel({
		items: 1,
		nav: true,
		navText: ['',''],
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			767:{
				nav:true,
			}
		}
	});
	$('.nstSlider').nstSlider({
		"left_grip_selector": ".leftGrip",
		"right_grip_selector": ".rightGrip",
		"value_bar_selector": ".bar",
		"value_changed_callback": function(cause, leftValue, rightValue) {
			$(this).parent().find('.leftLabel').text(leftValue);
			$(this).parent().find('.rightLabel').text(rightValue);
		}
	});
	$(".fancybox").fancybox();
});