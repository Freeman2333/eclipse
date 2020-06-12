$(document).ready(function(){
	$(".js-workers-slider").slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		prevArrow:".woker-nav__prev",
		nextArrow:".woker-nav__next",
		responsive: [{
			breakpoint: 1300,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},{
			breakpoint: 900,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},
		 {
			breakpoint: 666,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});
});
