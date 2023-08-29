$(document).ready(function () {
	$(".sepical-list").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		prevArrow: "<button type='button' class='slick-prev slick-arrow'><i class='fa fa-long-arrow-left' aria-hidden='true'></i></button>",
		nextArrow: "<button type='button' class='slick-next slick-arrow'><i class='fa fa-long-arrow-right' aria-hidden='true'></i></button>",
		autoplay: true,      
		autoplaySpeed: 1000,    
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				},
			},
		],
	});
});

