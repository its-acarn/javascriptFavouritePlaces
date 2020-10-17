document.addEventListener('DOMContentLoaded', () => {
	console.log('js loaded');

	const grabForm = document.querySelector('#fave-place-form');
	grabForm.addEventListener('submit', handleFormSubmit);

	const grabDeleteButton = document.querySelector('#delete-all-button');
	grabDeleteButton.addEventListener('click', handleDeleteButton);
});

const handleFormSubmit = function (event) {
	event.preventDefault();

	const newListItem = document.createElement('li');

	const grabList = document.querySelector('#favourite-places-list');
	newListItem.textContent = `${this.name.value}, ${this.country.value}, ${this.city.value}, Been there: ${this.visited.value} `;

	grabList.appendChild(newListItem);

	this.reset();

	console.dir(event.target);
};

const handleDeleteButton = function () {
	const grabList = document.querySelector('#favourite-places-list');

	while (grabList.firstChild) {
		grabList.removeChild(grabList.firstChild);
	}
};
