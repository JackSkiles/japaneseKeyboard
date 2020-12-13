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
    else if (characterInput == "ka") {
        newCharacters += alphabet[5];
        characterInput = "";
    }
    else if (check2 == "k" && check1 == "i") {
        newCharacters += alphabet[6];
        characterInput = "";
    }
    else if (check2 == "k" && check1 == "u") {
        newCharacters += alphabet[7];
        characterInput = "";
    }
    else if (check2 == "k" && check1 == "e") {
        newCharacters += alphabet[8];
        characterInput = "";
    }
    else if (check2 == "k" && check1 == "o") {
        newCharacters += alphabet[9];
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