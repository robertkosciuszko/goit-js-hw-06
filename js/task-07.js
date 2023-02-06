const inputChange = document.querySelector('input#font-size-control')
const textAbra = document.querySelector('span#text')

inputChange.addEventListener('input', event => {
    textAbra.style.fontSize = `${event.target.value }px`
})