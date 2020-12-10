document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
});
let boardChange = true;
let hiragana = "";
document.getElementById("input").addEventListener('keydown', event => {
    const charList = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const key = event.key.toLowerCase();

    // we are only interested in alphanumeric keys
    if (charList.indexOf(key) === -1) return;

    console.log(key);
});