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

function init() {
  // your code here
  document.body.addEventListener('keydown', function(e) {
    const key = e.key;
    let index = 0;
    if (key === codes[index]) {
      index++;
      if (index === codes.length) {
        alert('Konami!');
      }
    } else {
      index =0;
    }
  });
}
