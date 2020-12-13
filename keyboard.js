document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
});
let boardChange = true;
let hiragana = "";
let newCharacters = "";
let lastKey = "";
let inputField = "";
function string(updated){
    for (let i = 0; i <= updated.length; i++){
        
    }
}
document.getElementById("input").addEventListener('keydown', event => {
    //const charList = 'abcdefghijklmnopqrstuvwxyz0123456789';
    // console.log(typeof(document.getElementById("output").value));
    // console.log(document.getElementById("output").value);
    // console.log(newCharacters);
    if(document.getElementById("output").value == ""){
        console.log("hello")
        newCharacters = "";
        console.log(newCharacters);
    }
    const key = event.key.toLowerCase();
    // console.log(key);
    hiragana += key;
    let check1 = hiragana.charAt(hiragana.length - 1);
    let check2 = hiragana.charAt(hiragana.length - 2);
    // we are only interested in alphanumeric keys
    // switch(hiragana) {
    //     case hiragana == "backspace":
    //         newCharacters =  newCharacters.substring(0, newCharacters.length - 1);
    //         break;
    //     case hiragana.charAt(hiragana.length - 1) == "a":
    //         newCharacters += "あ"
    //       break;
    //     case hiragana.charAt(hiragana.length - 1) == "i":
    //         newCharacters += "い";
    //       break;
    //     case hiragana.charAt(hiragana.length - 1) == "e" && hiragana.charAt(hiragana.length - 2):
    //         newCharacters += "け"
    //         break;
    //   }
    if (hiragana == "backspace"){
        newCharacters =  newCharacters.substring(0, newCharacters.length - 1);
       // inputField =  inputField.substring(0, inputField.length - 1);
    }
    else if(check1 == "a"){
        newCharacters += "あ"
        // inputField += "a";
    } else if (check1 == "i"){
        newCharacters += "い"
    } else if (check1 == "e" && check2 == "k"){
        newCharacters += "け"
    }
    // console.log(hiragana);
    document.getElementById("input").value=inputField;
    document.getElementById("output").value=newCharacters;
    if(hiragana.length > 3 || lastKey == hiragana.charAt(hiragana.length - 1)){
        // console.log(hiragana.charAt(hiragana.length - 1));
        // console.log(lastKey);
        // console.log(hiragana);
        hiragana = "";
    }
    lastKey = hiragana.charAt(hiragana.length - 1);
    // console.log(hiragana.charAt(hiragana.length - 1));
    //     console.log(lastKey);
    //     console.log(hiragana);
    // console.log(lastKey);
});