window.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

  header.textContent = 'Сolor combinations';

  const button = document.createElement('button');
  button.textContent = 'Wanna colors?';
  main.append(button);

  let changeColors = function() {
    let newColor = '#' + Math.random().toString(16).slice(3, 9);
    let newColorReversed = '#' + (Math.random().toString(16).slice(3, 9)).split().reverse().join();
    let bodyHexName = `This color is ${newColorReversed}`;
    let btnHexName = `This color is ${newColor}`;

    document.body.style.backgroundColor = newColorReversed;
    button.style.backgroundColor = newColor;
    button.textContent = btnHexName;
    footer.textContent = bodyHexName;
  };

  button.addEventListener('click', changeColors);
})