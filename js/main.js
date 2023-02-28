'use strict';
//Array
const list = ['pasta','pomodoro','pecorino','guanciale','pepe','peperoncino'];

//Variabili
let listIndex = list.length;
let i = 0;
let itemList = '';
const  ulItem = document.querySelector('.list'); 

//Ciclo While
while (i < listIndex - 1){
    i++;
    itemList += `<li>${list[i]}</li>`
    console.log(itemList);
    i < listIndex;
}
ulItem.innerHTML = ulItem.innerHTML + itemList; 
