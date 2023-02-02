function loadHome() {
  const main = document.querySelector('main');
  main.innerText = '';
  const heading = document.createElement('h1');
  heading.classList.add('content-headings');
  heading.innerText = 'Inbox';
  main.appendChild(heading);
  const sample = document.createElement('div');
  sample.classList.add('tasks');
  sample.innerText = 'Example task here';
  main.appendChild(sample);

  const addTodoBtn = document.createElement('button');
  addTodoBtn.innerText = 'Add todo';
  main.appendChild(addTodoBtn);

  // Event listener for add todo button
  addTodoBtn.addEventListener('click', () => {
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'block';
    const form = document.querySelector('#todo-form');
    form.style.display = 'block';
  });

  return main;
}

export default loadHome;
