const letters = [`a`, `b`, `c`];

const render = () => {
  const html = letters.map((letter) => {
    return `<span>${letter}</span>`;
  }).join(``);

  document.querySelector(`#output`).innerHTML = html;
}

render();

document.querySelector(`#vowel-form`).addEventListener(`submit`, (event) => {
  event.preventDefault();
  const letter = event.target.querySelector(`select`).value;
  letters.push(letter);
  render();
});

document.querySelector(`#consonant-form`).addEventListener(`submit`, (event) => {
  event.preventDefault();
  const letter = event.target.querySelector(`select`).value;
  letters.push(letter);
  render();
});

document.querySelector(`#output`).addEventListener(`click`, (event) => {
  const idx = [...event.target.parentNode.children].indexOf(event.target);
  letters.splice(idx, 1);
  render();
});