const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
const liArray = [];

ingredients.forEach(ingredient => {
  const listElement =document.createElement('li');
	listElement.className = 'item'
	listElement.textContent = ingredient
	liArray.push(listElement)
})

list.append(...liArray)