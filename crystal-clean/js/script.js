// Строгий режим
"use strict"

window.addEventListener('load', windowLoad);
const html = document.documentElement;

function windowLoad() {
	html.classList.add('loaded');
	slidersInit()
	slidersGallaryInit()
}

function slidersInit() {
	var swiper = new Swiper(".reviews__slider", {
		slidesPerView: 1,
		loop: true,
		sped: 600,
		pagination: {
			el: ".swiper-pagination",
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: true,
		},
		breakpoints: {
			599.98: {
				slidesPerView: 2,
			},
			767.98: {
				slidesPerView: 3,
			},
		},
	});

	if (window.matchMedia("(min-width: 768px)").matches) {
		// Включаем автопрокрутку
		swiper.autoplay.start();
	} else {
		// Отключаем автопрокрутку
		swiper.autoplay.stop();
	}
}

function slidersGallaryInit() {
	var swiperGallary = new Swiper(".slider-works", {
		slidesPerView: 2,
		spaceBetween: 15,
		freeMode: true,
		pagination: {
			el: ".slider-works__pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".slider-works__next",
			prevEl: ".slider-works__prev",
		},
		breakpoints: {
			599.98: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			767.98: {
				slidesPerView: 4,
			},
		},
	});
}
