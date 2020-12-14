console.log('by Taranenko Vladislav');

const menu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
const page = document.querySelector('.page');
const icon = document.querySelector('.bx');
const list = document.querySelector('.menu__list');
const li = list.querySelectorAll('.menu__link');

//нажатие на бургер
menu.addEventListener('click', () => {
	menuBody.classList.toggle('active');
	page.classList.toggle('lock');
});

//массив на все элементы li
for (var i = 0; i < li.length; i++) {
	li[i].addEventListener('click', () => {
		if (icon.classList.contains('bx-x')) {
			icon.classList.add('bx-menu');
			icon.classList.remove('bx-x');
		}
		menu.classList.remove('active');
		menuBody.classList.remove('active');
		page.classList.remove('lock');
	})
}