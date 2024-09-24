'use strict'

function letters(cadena) {
	return cadena.length
}

function words(cadena) {
	return cadena.split(' ').length
}

function upperString(cadena) {
 return cadena.toUpperCase()
}

function titleString(cadena) {
	const palabras = cadena.split(' ')
	return palabras.map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)) .join(' ')
}

function backwardsLetters(cadena) {
	let frase = "";
	for (let i = cadena.length - 1; i >= 0; i--) {
	  frase += cadena.charAt(i); 
	}
	return frase;
  }
  

function backwardsWords(cadena) {
	return cadena.split(' ').reverse().join(' ')
}

function palindrome(cadena) {
	const preparadaOriginal = cadena.replace(/\s+/g, '').toLowerCase()
	const preparadaInversa = backwardsLetters(preparadaOriginal)
	if(preparadaOriginal === preparadaInversa){
		return true
	}else{
		return false
	}
	
}

export {
	letters,
	words,
	upperString,
	titleString,
	backwardsLetters,
	backwardsWords,
	palindrome
}
