fetch(
  "https://raw.githubusercontent.com/kuuwangbot/kuuwangbot.github.io/master/img/emoji.json"
)
  .then((response) => response.json())
  .then((data) => {
    const emojiList = data.emojiList;
    const maxLength = Object.keys(emojiList).length;
    const kuuconListDiv = document.getElementById("kuuconList");
    const searchInput = document.getElementById("kuuconSearch");

    // Display each image
    for (const emoji in emojiList) {
      const emojiImage = "../img/" + emojiList[emoji];

      const imageDiv = document.createElement("div"); // Create a new div for each image
      imageDiv.classList.add("emoji-image-container"); // Add a CSS class for the image container

      const imgElement = document.createElement("img");
      imgElement.src = emojiImage;
      imgElement.classList.add("emoji-image"); // Add a CSS class for the image

      const emojiName = document.createElement("p");
      emojiName.textContent = "~" + emoji;
      emojiName.classList.add("emoji-name"); // Add a CSS class for the emoji name

      const copyButton = document.createElement("button");
      copyButton.textContent = "복사";
      copyButton.classList.add("copy-button"); // Add a CSS class for the copy button

      copyButton.addEventListener("click", (event) => {
        // Perform the copy operation here
        const textToCopy = "/쿠 ~" + emoji; // Modify this line if you want to copy a different value
        navigator.clipboard
          .writeText(textToCopy)
          .then(() => {
            console.log("Text copied to clipboard:", textToCopy);
            const copiedMessage = document.createElement("div");
            copiedMessage.textContent = "~" + emoji + " 복사완료!";
            copiedMessage.classList.add("copied-message"); // Add a CSS class for the copied message
            copiedMessage.style.position = "fixed";
            copiedMessage.style.top = `${event.clientY}px`; // Set the top position based on the mouse Y coordinate
            copiedMessage.style.left = `${event.clientX}px`; // Set the left position based on the mouse X coordinate
            console.log(event.clientX);
            console.log(event.clientY);

            document.body.appendChild(copiedMessage);
            setTimeout(() => {
              document.body.removeChild(copiedMessage);
            }, 500); // Remove the copied message after 2 seconds
          })
          .catch((error) => {
            console.log("Error copying text:", error);
          });
      });

      imageDiv.appendChild(emojiName); // Append the emoji name to the div
      imageDiv.appendChild(imgElement); // Append the image to the div
      imageDiv.appendChild(copyButton); // Append the copy button to the div
      kuuconListDiv.appendChild(imageDiv); // Append the div to the main container
    }
    // Filter images based on search input
    searchInput.addEventListener("input", (event) => {
      const query = event.target.value.toLowerCase();
      const imageContainers = kuuconListDiv.getElementsByClassName(
        "emoji-image-container"
      );
      for (const container of imageContainers) {
        const emojiName = container
          .getElementsByClassName("emoji-name")[0]
          .textContent.toLowerCase();
        if (emojiName.includes(query)) {
          container.style.display = "flex";
        } else {
          container.style.display = "none";
        }
      }
    });
  })
  .catch((error) => {
    console.log("Error loading JSON file:", error);
  });
