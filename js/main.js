

$(document).ready(function() {
	$('.js-toggles').click(function(events) {
		$('body').toggleClass('lock is-show');
	});
});

$('.intro-slider').slick({
	slidesToShow: 1,
	adaptiveHeight: true,
	slidesToScroll: 1,
	speed: 700,
	infinite: true,
	responsive: [
		{
			breakpoint: 991,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		}
		},
		{
			breakpoint: 767,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		}
		},
		{
			breakpoint: 420,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		}
	}
	]
});
