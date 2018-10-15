const codes = [
  38,
  38,
  40,
  40,
  37,
  39,
  37,
  39,
  66,
  65
];

let input = [];

function init() {
  // your code here
  document.body.addEventListener('keydown', function(key) {
    input.push(key.which);
    if (input.length > 10) {
      input.shift();
    }
    if (input.length === 10) {
      let index = 0;
      let break = false;
      do {
        if (input[index] === codes[index]) {
          index++;
        } else {
          break = true;
        }
        if (index === 10) {
          alert('Konami!');
          break = true;
        }
      } while(!break);
    }
  });
}
