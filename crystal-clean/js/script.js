// Строгий режим
"use strict"

window.addEventListener('load', windowLoad);
const html = document.documentElement;

function windowLoad() {
	html.classList.add('loaded');
	slidersInit()
}

function slidersInit() {
	var swiper = new Swiper(".swiper", {
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

