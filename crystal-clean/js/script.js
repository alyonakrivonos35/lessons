// Строгий режим
"use strict"

window.addEventListener('load', windowLoad);
const html = document.documentElement;

function windowLoad() {
	html.classList.add('loaded');
	slidersInit()
	slidersGallaryInit()
	scrollActions()
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
		slidesPerView: 1.5,
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

// Робота зі скролом
function scrollActions() {
	window.addEventListener('scroll', scrollAction)

	function scrollAction() {
		// Робота з шапкою
		const header = document.querySelector('.header')
		header.classList.toggle('header--scroll', (scrollY > 20))
	}

	const options = {
		root: null,
		rootMargin: "0px 0px 0px 0px",
		// Відсоток від розміру об'єкту.
		// При появі якого спрацьовує подія
		// Де 0 це будь яка поява
		// 1 це повна поява об'кта в в'юпорті
		threshold: 0.2,
	}
	const callback = (entries, observer) => {
		entries.forEach(entry => {
			const currentElement = entry.target
			if (entry.isIntersecting) {
				currentElement.classList.add('--animate')
				//console.log('я тебе бачу')
			} else {
				//currentElement.classList.remove('--animate')
				//console.log('я тебе не бачу')
			}
		})
	}
	const observer = new IntersectionObserver(callback, options)

	const animElements = document.querySelectorAll('[class*="--anim"]')
	animElements.forEach(animElement => {
		observer.observe(animElement)
	})
}