var $ = jQuery.noConflict();

$(document).ready(function ($) {
	"use strict";

	/*-------------------------------------------------*/
	/* =  Header Navigation
	/*-------------------------------------------------*/
	$('.responsive-nav').on('click', function (e) {
		$(this).toggleClass('active');
		$('.main-nav, .brand').toggleClass('active');
		$('.main-nav ul').slideToggle();
		if ($('body').hasClass('no-scroll-after')) {
			$('body').removeClass('no-scroll-after').addClass('no-scroll');
			return;
		}
		if ($('body').hasClass('no-scroll')) {
			$('body').removeClass('no-scroll').addClass('no-scroll-after');
			return;
		}
	});

	$('.main-nav li').hover(function () {
		$(this).addClass('hover');
	}, function () {
		$(this).removeClass('hover');
	});

	$('.main-nav a').on('click', function (e) {
		$(this).parent().siblings().removeClass('hover');
		if (!$(this).hasClass('clicked') && $('.main-nav').hasClass('active') && $(this).parent().find('.dropdown').length) {
			e.preventDefault();
			e.stopPropagation();
			$(this).addClass('clicked');
			$(this).parent().siblings().find('a').removeClass('clicked');
		} else {
			$('.main-nav li.hover').removeClass('hover');
		}
	});

	/*-------------------------------------------------*/
	/* =  Isotope
	/*-------------------------------------------------*/
	var winDow = $(window);

	// Needed variables
	var $container = $('.filter-container');
	var $filter = $('.filter');

	$('.filter-container').isotope({
		filter: '.class1',
		layoutMode: 'masonry',
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false,
		}
	});

	try {
		$container.imagesLoaded(function () {
			$container.show();
			$container.isotope({
				filter: '*',
				layoutMode: 'masonry',
				animationOptions: {
					duration: 750,
					easing: 'linear'
				}
			});
		});
	} catch (err) {
	}

	winDow.bind('resize', function () {
		var selector = $filter.find('a.active').attr('data-filter');

		try {
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false,
				}
			});
		} catch (err) {
		}
		return false;
	});

	// Isotope Filter 
	$filter.find('a').click(function () {
		var selector = $(this).attr('data-filter');

		try {
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false,
				}
			});
		} catch (err) {

		}
		return false;
	});


	var filterItemA = $('.filter a');

	filterItemA.on('click', function () {
		var $this = $(this);
		if (!$this.hasClass('active')) {
			filterItemA.removeClass('active');
			$this.addClass('active');
		}
	});


	/*-------------------------------------------------*/
	/* =  Smooth scrolling
	/*-------------------------------------------------*/

	// Smooth scrolling using jQuery easing
	$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Scroll to top button appear
	$(document).scroll(function () {
		var scrollDistance = $(this).scrollTop();
		if (scrollDistance > 100) {
			$('.scroll-to-top').fadeIn();
		} else {
			$('.scroll-to-top').fadeOut();
		}
	});

});
