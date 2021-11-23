let accordionItem = document.querySelectorAll('.accordion__item');



for (let i = 0; i < accordionItem.length; i++) {
	accordionItem[i].addEventListener('click', function clickAccordionItem() {

    	accordionItem[i].classList.toggle('active');

	});
}