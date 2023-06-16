fetch('../img/emoji.json')
    .then((response) => response.json())
    .then((json) => console.log(json));


console.log(emojiList[1])