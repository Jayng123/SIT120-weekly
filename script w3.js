let counter = 0;

const goButton = document.querySelector('#button');
goButton.onclick = writeRandom;

function writeRandom() {
  let num = Math.floor(Math.random() * 100);
  let message;
}

counter++;
document.querySelector("#count").textContext = counter;
