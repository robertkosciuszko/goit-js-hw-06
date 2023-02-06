/*let counterValue = 0

const displayCounter = document.querySelector('#value')
const buttonMinus = document.querySelector('button[data-action="decrement"]')
const buttonPlus = document.querySelector('button[data-action="increment"]')

buttonMinus.addEventListener('click', () => {
	counterValue--
	displayCounter.textContent = counterValue
})

buttonPlus.addEventListener('click', () => {
	counterValue++
	displayCounter.textContent = counterValue
})
*/


let counterValue = 0

const displayCounter = document.querySelector('#value')
const buttonMinus = document.querySelector('button[data-action="decrement"]')
const buttonPlus = document.querySelector('button[data-action="increment"]')

buttonMinus.addEventListener("click", () => {
if (counterValue > 0) {
counterValue--;
displayCounter.textContent = counterValue;
}
if (counterValue === 0) {
buttonMinus.disabled = true;
} else {
buttonMinus.disabled = false;
}
});

buttonPlus.addEventListener('click', () => {
	counterValue++
	displayCounter.textContent = counterValue
	buttonMinus.disabled = false;
})


/*let counterValue = 0

const displayCounter = document.querySelector('#value')
const buttonMinus = document.querySelector('button[data-action="decrement"]')
const buttonPlus = document.querySelector('button[data-action="increment"]')

buttonMinus.addEventListener('click', () => {
if (counterValue > 0) {
counterValue--
displayCounter.textContent = counterValue
}
})

buttonPlus.addEventListener('click', () => {
counterValue++
displayCounter.textContent = counterValue
})*/