export default function getRandomEmoji() {
    let count = someEmojis.length;
    let randomIndex = Math.floor(Math.random() * count);
    return someEmojis[randomIndex];
}

let someEmojis = ['😎', '😵‍💫', '😏'];