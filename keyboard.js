document.addEventListener('DOMContentLoaded', () => {
    'use strict';

});
let boardChange = true;
let characterInput = "";

let hiraganaAlphabet = ['あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 'さ', 'し', 'す',
    'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と', 'な', 'に', 'ぬ', 'ね', 'の',
    'は', 'ひ', 'ふ', 'へ', 'ほ', 'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ',
    'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん'];

let katakanaAlphabet = ['ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス',
    'セ', 'ソ', 'タ', 'チ', 'ツ', 'テ', 'ト', 'ナ', '二', 'ヌ', 'ネ', 'ノ',
    'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ',
    'ラ', 'リ', 'ル', 'レ', 'ロ', 'ワ', 'ヲ', 'ン'];

let alphabet = hiraganaAlphabet
let katakana = false;
let newCharacters = "";
let lastKey = "";
let inputField = "";
function string(updated) {
    for (let i = 0; i <= updated.length; i++) {

    }
}

document.getElementById("toggle").addEventListener('click', event =>{
    if(katakana == false){
        katakana = true;
        document.getElementById("toggle").innerHTML = "Hiragana";
    } else if(katakana == true){
        katakana = false;
        document.getElementById("toggle").innerHTML = "Katakana";
    }
});

document.getElementById("input").addEventListener('keydown', event => {
    //const charList = 'abcdefghijklmnopqrstuvwxyz0123456789';
    // console.log(typeof(document.getElementById("output").value));
    // console.log(document.getElementById("output").value);
    // console.log(newCharacters);
    if (document.getElementById("output").value == "") {
        console.log("hello")
        newCharacters = "";
        console.log(newCharacters);
    }
    const key = event.key.toLowerCase();
    // console.log(key);
    characterInput += key;
    let check1 = characterInput.charAt(characterInput.length - 1);
    let check2 = characterInput.charAt(characterInput.length - 2);
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
    if (katakana == true) {
        alphabet = katakanaAlphabet;
    } else {
        alphabet = hiraganaAlphabet;
    }
    if (characterInput == "backspace") {
        newCharacters = newCharacters.substring(0, newCharacters.length - 1);
        characterInput = "";
        // inputField =  inputField.substring(0, inputField.length - 1);
    }
    else if (characterInput == "a") {
        newCharacters += alphabet[0];
        characterInput = ""
        // inputField += "a";
    }
    else if (characterInput == "i") {
        newCharacters += alphabet[1];
        characterInput = "";
    }
    else if (characterInput == "u") {
        newCharacters += alphabet[2];
        characterInput = "";
    }
    else if (characterInput == "e") {
        newCharacters += alphabet[3];
        characterInput = "";
    }
    else if (characterInput == "o") {
        newCharacters += alphabet[4];
        characterInput = "";
    }
    else if (characterInput == "n") {
        newCharacters += alphabet[45];
        characterInput = "";
    }
    else if (characterInput.length == 1) {
        console.log('hello');
    }
    else if (characterInput == "ka") {
        newCharacters += alphabet[5];
        characterInput = "";
    }
    else if (characterInput == "ki") {
        newCharacters += alphabet[6];
        characterInput = "";
    }
    else if (characterInput == "ku") {
        newCharacters += alphabet[7];
        characterInput = "";
    }
    else if (characterInput == "ke") {
        newCharacters += alphabet[8];
        characterInput = "";
    }
    else if (characterInput == "ko") {
        newCharacters += alphabet[9];
        characterInput = "";
    }
    else if (characterInput == "sa") {
        newCharacters += alphabet[10];
        characterInput = "";
    }
    else if (characterInput == "shi") {
        newCharacters += alphabet[11];
        characterInput = "";
    }
    else if (characterInput == "su") {
        newCharacters += alphabet[12];
        characterInput = "";
    }
    else if (characterInput == "se") {
        newCharacters += alphabet[13];
        characterInput = "";
    }
    else if (characterInput == "so") {
        newCharacters += alphabet[14];
        characterInput = "";
    }
    else if (characterInput == "ta") {
        newCharacters += alphabet[15];
        characterInput = "";
    }
    else if (characterInput == "chi") {
        newCharacters += alphabet[16];
        characterInput = "";
    }
    else if (characterInput == "tsu") {
        newCharacters += alphabet[17];
        characterInput = "";
    }
    else if (characterInput == "te") {
        newCharacters += alphabet[18];
        characterInput = "";
    }
    else if (characterInput == "to") {
        newCharacters += alphabet[19];
        characterInput = "";
    }
    else if (characterInput == "na") {
        newCharacters += alphabet[20];
        characterInput = "";
    }
    else if (characterInput == "ni") {
        newCharacters += alphabet[21];
        characterInput = "";
    }
    else if (characterInput == "nu") {
        newCharacters += alphabet[22];
        characterInput = "";
    }
    else if (characterInput == "ne") {
        newCharacters += alphabet[23];
        characterInput = "";
    }
    else if (characterInput == "no") {
        newCharacters += alphabet[24];
        characterInput = "";
    }
    else if (characterInput == "ha") {
        newCharacters += alphabet[25];
        characterInput = "";
    }
    else if (characterInput == "hi") {
        newCharacters += alphabet[26];
        characterInput = "";
    }
    else if (characterInput == "fu") {
        newCharacters += alphabet[27];
        characterInput = "";
    }
    else if (characterInput == "he") {
        newCharacters += alphabet[28];
        characterInput = "";
    }
    else if (characterInput == "ho") {
        newCharacters += alphabet[29];
        characterInput = "";
    }
    else if (characterInput == "ma") {
        newCharacters += alphabet[30];
        characterInput = "";
    }
    else if (characterInput == "mi") {
        newCharacters += alphabet[31];
        characterInput = "";
    }
    else if (characterInput == "mu") {
        newCharacters += alphabet[32];
        characterInput = "";
    }
    else if (characterInput == "me") {
        newCharacters += alphabet[33];
        characterInput = "";
    }
    else if (characterInput == "mo") {
        newCharacters += alphabet[34];
        characterInput = "";
    }
    else if (characterInput == "ya") {
        newCharacters += alphabet[35];
        characterInput = "";
    }
    else if (characterInput == "yu") {
        newCharacters += alphabet[36];
        characterInput = "";
    }
    else if (characterInput == "yo") {
        newCharacters += alphabet[37];
        characterInput = "";
    }
    else if (characterInput == "ra") {
        newCharacters += alphabet[38];
        characterInput = "";
    }
    else if (characterInput == "ri") {
        newCharacters += alphabet[39];
        characterInput = "";
    }
    else if (characterInput == "ru") {
        newCharacters += alphabet[40];
        characterInput = "";
    }
    else if (characterInput == "re") {
        newCharacters += alphabet[41];
        characterInput = "";
    }
    else if (characterInput == "ro") {
        newCharacters += alphabet[42];
        characterInput = "";
    }
    else if (characterInput == "wa") {
        newCharacters += alphabet[43];
        characterInput = "";
    }
    else if (characterInput.length == 2) {
        console.log("what");
    } else {
        console.log("invalid input");
        characterInput = "";
    }


    // console.log(hiragana);
    document.getElementById("input").value = inputField;
    document.getElementById("output").value = newCharacters;
    // if(characterInput.length > 3 || lastKey == characterInput.charAt(characterInput.length - 1)){
    //     // console.log(hiragana.charAt(hiragana.length - 1));
    //     // console.log(lastKey);
    //     // console.log(hiragana);
    //     characterInput = "";
    // }
    lastKey = characterInput.charAt(characterInput.length - 1);
    // console.log(hiragana.charAt(hiragana.length - 1));
    //     console.log(lastKey);
    //     console.log(hiragana);
    // console.log(lastKey);
});