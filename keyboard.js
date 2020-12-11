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
    if (hiragana == "backspace"){
        console.log('hello');
        console.log(newCharacters);
        newCharacters =  newCharacters.substring(0, newCharacters.length - 1);
    }
    else if(hiragana == "a"){
        newCharacters += "あ"
    } else if (hiragana == "i"){
        newCharacters += "い"
    } else if (hiragana == "ke"){
        newCharacters += "け"
    }
    console.log(hiragana);
    console.log(document.getElementById("input").value);
    document.getElementById("input").value="";
    // document.getElementById("input").value=newCharacters;
    if(hiragana.length > 3){
        hiragana = "";
    }
});