window.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('btn');
  const p = document.getElementById('p');
  btn.textContent = 'Wanna colors?';

  let changeColors = function() {
    let newColor = '#' + Math.random().toString(16).slice(3, 9);
    let newColorReversed = '#' + (Math.random().toString(16).slice(3, 9)).split().reverse().join();
    let bodyHexName = `This bg-color is ${newColorReversed}`;
    let btnHexName = `This bg-color is ${newColor}`;

    document.body.style.backgroundColor = newColorReversed;
    btn.style.backgroundColor = newColor;
    btn.textContent = btnHexName;
    p.textContent = bodyHexName;
  };

  btn.addEventListener('click', changeColors)
})