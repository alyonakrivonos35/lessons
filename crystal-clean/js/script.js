// Строгий режим
"use strict"

// window.addEventListener('load', windowLoad);
// const html = document.documentElement;

// function windowLoad() {
// 	document.addEventListener('click', documentActions);
// 	document.addEventListener('keydown', documentActions);
// 	html.classList.add('loaded');
// 	//slidersInit()
// 	//scrollActions()
// }
// function documentActions(e) {
// 	const type = e.type
// 	const targetElement = e.target

// 	if (type === 'click') {
// 		// Меню-бургер
// 		if (targetElement.closest('.icon-menu')) {
// 			html.classList.toggle('menu-open');
// 		}
// 		targetElement.closest('.menu__link') && html.classList.contains('menu-open') ? html.classList.remove('menu-open') : null
// 	}
// }

// function bodyLock(mode) {
// 	let lockPaddingValue = (window.innerWidth - document.body.offsetWidth) + 'px'
// 	lockPaddingValue = mode ? lockPaddingValue : 0;
// 	document.body.style.paddingInlineEnd = lockPaddingValue

// 	const paddingLockElements = document.querySelectorAll('[data-pl]')
// 	paddingLockElements.forEach(paddingLockElement => {
// 		if (paddingLockElement.dataset.pl === 'inset') {
// 			paddingLockElement.style.insetInlineEnd = lockPaddingValue
// 		} else {
// 			paddingLockElement.style.paddingInlineEnd = lockPaddingValue
// 		}
// 	});
// 	document.documentElement.classList.toggle('lock', mode)
// }

// // Swiper
// function slidersInit() {
// 	const sliderListFiveItems = new Swiper('.items-slider__list', {
// 		//slidesPerGroup: 5,
// 		//slidesPerView: 5,
// 		//spaceBetween: 30,
// 		//loop: true,
// 		// Navigation arrows
// 		autoHeight: true,
// 		navigation: {
// 			prevEl: '.slider-controls__arrow--left',
// 			nextEl: '.slider-controls__arrow--right',
// 		},
// 		// If we need pagination
// 		pagination: {
// 			el: '.slider-controls__bullets',
// 			clickable: true,
// 			bulletClass: `slider-controls__bullet-item`,
// 			bulletActiveClass: `slider-controls__bullet-item--active`,
// 		},
// 		scrollbar: {
// 			snapOnRelease: true,
// 			dragSize: 20,
// 			el: '.items-slider__scrollbar',
// 		},
// 		breakpoints: {
// 			// when window width is >= 480px
// 			320: {
// 				slidesPerView: 1.8,
// 				spaceBetween: 20
// 			},
// 			// when window width is >= 600px
// 			600: {
// 				slidesPerView: 3,
// 				spaceBetween: 20
// 			},
// 			// when window width is >= 800px
// 			850: {
// 				slidesPerGroup: 1,
// 				slidesPerView: 4,
// 				spaceBetween: 20
// 			},
// 			992: {
// 				slidesPerGroup: 4,
// 				slidesPerView: 4,
// 				spaceBetween: 20
// 			},
// 			// when window width is >= 1200px
// 			1200: {
// 				slidesPerGroup: 5,
// 				slidesPerView: 5,
// 				spaceBetween: 30
// 			}
// 		}
// 	});
// }
// // Робота зі скролом
// function scrollActions() {
// 	window.addEventListener('scroll', scrollAction)

// 	function scrollAction() {
// 		// Робота з шапкою
// 		const header = document.querySelector('.header')
// 		header.classList.toggle('header--scroll', (scrollY > 20))
// 	}

// 	const options = {
// 		root: null,
// 		rootMargin: "0px 0px 0px 0px",
// 		// Відсоток від розміру об'єкту.
// 		// При появі якого спрацьовує подія
// 		// Де 0 це будь яка поява
// 		// 1 це повна поява об'кта в в'юпорті
// 		threshold: 0.2,
// 	}
// 	const callback = (entries, observer) => {
// 		entries.forEach(entry => {
// 			const currentElement = entry.target
// 			if (entry.isIntersecting) {
// 				currentElement.classList.add('--animate')
// 				//console.log('я тебе бачу')
// 			} else {
// 				//currentElement.classList.remove('--animate')
// 				//console.log('я тебе не бачу')
// 			}
// 		})
// 	}
// 	const observer = new IntersectionObserver(callback, options)

// 	const animElements = document.querySelectorAll('[class*="--anim"]')
// 	animElements.forEach(animElement => {
// 		observer.observe(animElement)
// 	})
// }

