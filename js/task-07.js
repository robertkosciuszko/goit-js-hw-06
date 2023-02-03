const inputChange = document.querySelector('input#font-size-control')
const textAbra = document.querySelector('span#text')

inputChange.addEventListener('change', ble => {
    textAbra.style.fontSize = `${ble.target.value }px`
})