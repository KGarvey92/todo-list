function loadHome() {
  const main = document.querySelector('main');
  main.innerText = '';
  const sample = document.createElement('div');
  sample.classList.add('tasks');
  sample.innerText = 'Example task here';
  main.appendChild(sample);

  return main;
}

export default loadHome;
