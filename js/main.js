'use strict';
//Array
const list = ['Pasta','Pomodoro','Pecorino','Guanciale','Pepe','Peperoncino','Farina','Yogurt', 'Pane','Formaggio','Latte','Prosciutto','Insalata','Uova','Hamburger'];

//Variabili
let listIndex = list.length;
let i = 0;
let itemList = '';
const  ulItem = document.querySelector('.list'); 

//Ciclo While
while (i < listIndex - 1){
    i++;
    itemList += `<li><i class="fa-solid fa-square-check"></i>${list[i]}</li>`
    i < listIndex;
}
ulItem.innerHTML = ulItem.innerHTML + itemList; 
