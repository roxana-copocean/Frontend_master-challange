const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');

navToggle.addEventListener('click', () => {
	primaryNav.hasAttribute('data-visible')
		? navToggle.setAttribute('aria-expended', false)
		: navToggle.setAttribute('aria-expended', true);
	primaryNav.toggleAttribute('data-visible');
	primaryHeader.toggleAttribute('data-overlay');
});

// const slider = new A11YSlider(document.querySelector('.slider'));
const slider = new A11YSlider(document.querySelector('.slider'), {
	adaptiveHeight: true,
	arrows: false,
	dots: true,
	centerMode: true,

	responsive: {
		480: {
			dots: false,
			arrows: false
		}
	}
});
