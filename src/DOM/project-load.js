function loadProject(project) {
  // Clear content
  const main = document.querySelector('main');
  main.innerHTML = '';

  // Display project title
  const heading = document.createElement('h1');
  heading.classList.add('content-headings');
  heading.innerText = `${project.title}`;
  main.appendChild(heading);

  // Display project description
  const description = document.createElement('p');
  description.innerText = `${project.description}`;
  main.appendChild(description);

  // Create an add todo button
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
}

export default loadProject;
