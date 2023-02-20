/* eslint-disable import/no-cycle */
// import Todo from '../app/Todo';

import { saveUpdates } from '../app/Project';

function displayTodos(project) {
  const main = document.querySelector('main');

  // Loop through todos array and display each in a div
  for (let i = 0; i < project.todos.length; i += 1) {
    // Create div to hold todo
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-div');

    // Create checkmark and append
    const check = document.createElement('img');
    check.setAttribute('src', 'images/icons/check.svg');
    check.setAttribute('alt', 'checkmark icon');
    check.classList.add('todo-div-btns');
    todoDiv.appendChild(check);

    // Create <p> to hold todo title
    const todo = document.createElement('p');
    todo.innerText = `${project.todos[i].title}`;

    // Check if todo is already completed
    if (project.todos[i].completed === true) {
      console.log('');
      todo.classList.add('line-through');
    }
    todoDiv.appendChild(todo);

    // Add functionality to checkmark button
    // eslint-disable-next-line no-loop-func
    check.addEventListener('click', () => {
      // eslint-disable-next-line no-param-reassign
      project.todos[i].completed = !project.todos[i].completed;
      todo.classList.toggle('line-through');
      saveUpdates();
    });

    // TODO: Add event listener to todo title to open up
    // a todo display popup that shows duedate, description and allows editing.

    // Create remove icon
    const removeBtn = document.createElement('img');
    removeBtn.setAttribute('src', 'images/icons/remove.svg');
    removeBtn.setAttribute('alt', 'remove icon');
    removeBtn.classList.add('todo-div-btns');
    todoDiv.appendChild(removeBtn);

    // TODO: event listener to call removeTodo method on click.

    // Append todo to main.
    main.appendChild(todoDiv);
  }
}

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
  description.classList.add('project-desciription');
  description.innerText = `${project.description}`;
  main.appendChild(description);

  // Display todos
  if (project.todos.length !== 0) {
    displayTodos(project);
  }

  // Create an add todo button
  const addTodoBtn = document.createElement('button');
  addTodoBtn.innerText = 'Add todo';
  addTodoBtn.classList.add('add-todo-btn');
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
