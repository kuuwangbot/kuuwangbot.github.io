fetch('../img/emoji.json')
  .then((response) => response.json())
  .then((data) => {
    const emojiList = data.emojiList;
    const maxLength = Object.keys(emojiList).length;
    console.log('Max length of emojiList:', maxLength);

    const kuuconListDiv = document.getElementById('kuuconList');

    // Display each image
    for (const emoji in emojiList) {
      const emojiImage = emojiList[emoji];
      console.log(emoji, emojiImage);

      const imgElement = document.createElement('img');
      imgElement.classList.add('emoji-image');
      imgElement.src = "../img/" + emojiImage;
      kuuconListDiv.appendChild(imgElement);
    }
  })
  .catch((error) => {
    console.log('Error loading JSON file:', error);
  });