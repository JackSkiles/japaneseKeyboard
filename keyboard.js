document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
});
let boardChange = true;
let hiragana = "";
let newCharacters = "";
function string(updated){
    for (let i = 0; i <= updated.length; i++){

    }
}
document.getElementById("input").addEventListener('keydown', event => {
    //const charList = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const key = event.key.toLowerCase();
    hiragana += key;
    // we are only interested in alphanumeric keys
    console.log(hiragana);
    if (hiragana == "backspace"){
        newCharacters.pop();
    }
    else if(hiragana == "a"){
        newCharacters += "あ"
    } else if (hiragana == "i"){
        newCharacters += "い"
    }
    console.log(hiragana);
    console.log(newCharacters)
    document.getElementById("input").value=newCharacters;
    hiragana = "";
});