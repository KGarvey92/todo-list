function displayTodos() {
  const main = document.querySelector('main');
  main.innerText = '';
  const heading = document.createElement('h1');
  heading.classList.add('content-headings');
  heading.innerText = 'Todos';
  main.appendChild(heading);
  const sample = document.createElement('div');
  sample.classList.add('tasks');
  sample.innerText = 'Feature coming soon';
  main.appendChild(sample);

  return main;
}

export default displayTodos;
