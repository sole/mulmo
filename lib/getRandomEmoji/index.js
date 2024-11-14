import getRandomEmoji from "./getRandomEmoji.js";

window.addEventListener('load', () => {
    let btn = document.querySelector('button');
    let txt = document.querySelector('textarea');

    btn.addEventListener('click', () => {
        let str = getRandomEmoji();
        txt.value = txt.value + ',' + str;
    });
})