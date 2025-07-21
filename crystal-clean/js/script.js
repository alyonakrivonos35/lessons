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

//==== Calculate ===============================================
const inputs = document.querySelectorAll('input');
const totalPriceElement = document.querySelector('.result-calc__element');
const radioType = document.querySelectorAll('input[name="serviceType"]');
const checkboxType = document.querySelectorAll('input[name="additionalService"]')
const numberType = document.querySelectorAll('input[name="additional"]')

// Площа приміщення
let range = document.querySelector('#range');
let rangeCalcValue = document.querySelector('.range-calc__value');
rangeCalcValue.innerText = range.value;
range.addEventListener("input", (event) => {
	rangeCalcValue.innerText = event.target.value;
});

// Площа вікон
const windowRange = document.querySelector('#window-range-calc');
const windowCalcValue = document.querySelector('.window-range__value');
windowCalcValue.innerText = windowRange.value;
windowRange.addEventListener("input", (event) => {
	windowCalcValue.innerText = event.target.value;
});

// Перемикач для площі приміщення / вікон
for (let radio of radioType) {
	radio.addEventListener('input', function () {
		if (radio.id === 'window-repair' || radio.id === 'window-type' && radio.checked === true) {
			document.querySelector('.window-range').classList.remove('invisible');
			document.querySelector('.range-calc').classList.add('invisible');

		} else {
			document.querySelector('.window-range').classList.add('invisible');
			document.querySelector('.range-calc').classList.remove('invisible');
		}
	})
}

function calculate() {
	let radioValue = 1;
	let checkboxValue = 0;
	let numberValue = 0;

	for (let radio of radioType) {
		if (radio.checked === true) {
			radio.closest('label').classList.add('checked');
			if (radio.id === 'window-repair' || radio.id === 'window-type') {
				radioValue = radio.value * parseFloat(windowRange.value);
			} else {
				radioValue = radio.value * parseFloat(range.value);
			}
		} else {
			radio.closest('label').classList.remove('checked');
		}
	}

	for (let checkbox of checkboxType) {
		if (checkbox.checked === true) {
			checkboxValue += parseFloat(checkbox.value);
			checkbox.closest('label').classList.add('checked');
		} else {
			checkbox.closest('label').classList.remove('checked');
		}
	}

	for (let number of numberType) {
		if (number.value) {
			numberValue += number.value * number.dataset.price;
			number.classList.add('checked');
		} else {
			number.classList.remove('checked');
		}
	}

	let totalPrice = radioValue + checkboxValue + numberValue;
	totalPriceElement.innerText = totalPrice;
}

for (let input of inputs) {
	input.addEventListener('input', function () {
		calculate();
	})
}





