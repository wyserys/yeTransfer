const burgerIcon = document.querySelector('.menu__button');
const menu = document.querySelector('.menu');


burgerIcon.addEventListener('click', () => {

	menu.classList.toggle('active');
	burgerIcon.classList.toggle('active');
});


const menuLinks = document.querySelectorAll('.menu__link');


menuLinks.forEach(link => {
	link.addEventListener('click', () => {

		menu.classList.remove('active');
		burgerIcon.classList.remove('active');
	});
});
