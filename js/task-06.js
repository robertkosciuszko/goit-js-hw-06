const textInput = document.querySelector('#validation-input')
console.log(textInput.getAttribute('data-length'))
textInput.addEventListener('input', event => {
	if (event.target.value.length == textInput.getAttribute('data-length')) {
		textInput.classList.add('valid')
		textInput.classList.remove('invalid')	
	} else {
		textInput.classList.add('invalid')
		textInput.classList.remove('valid')
	}	
})
/*
Zadanie 6: postaraj się zrobić jeszcze walidację od razu na "wpisywanie" wartości w input -
	żeby od razu Ci pokazywało ramkę czy jest git - czy nie: slightly_smiling_face: walidacja na blur -
	jest spoko, ale zazwyczaj po próbie wysłania formularza, żeby pokazać, że np.hasło jest złe -
		dla treningu możesz jeszcze zrobić walidację "live" na wpisywanie:)*/