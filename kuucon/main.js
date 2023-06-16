fetch('../img/emoji.json')
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    processJsonData(json); // Call a separate function to process the JSON data
  })
  .catch((error) => {
    console.log('Error loading JSON file:', error);
  });

function processJsonData(json) {
  console.log(json[1]); // Accessing json[1] outside the fetch() call
  // Other code that uses the JSON data
}