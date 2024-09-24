import {letters, words, upperString, titleString, backwardsLetters, backwardsWords, palindrome}from './src/functions';

document.querySelector('#app').innerHTML = `
  <p>Abre la consola</p>
`
'use strict'

const frase = prompt('Introduce una frase')

if(!frase || frase == " "){
    console.log("No se ha introducido ninguna frase")
}else{
    console.log(letters(frase))
    console.log(words(frase))
    console.log(upperString(frase))
    console.log(titleString(frase))
    console.log(backwardsLetters(frase))
    console.log(backwardsWords(frase))
    console.log(palindrome(frase))
}