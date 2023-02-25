/* eslint-disable import/no-cycle */
// import Todo from '../app/Todo';

import { saveUpdates } from '../app/Project';

function showTodoDetails(todo) {
  // Fill in elements with todo details
  const title = document.querySelector('#todo-details-title');
  title.innerText = todo.title;

  const dueDate = document.querySelector('#todo-details-due-date');
  if (todo.dueDate) {
    dueDate.innerText = `Due on: ${todo.dueDate}`;
    dueDate.style.fontStyle = 'normal';
  } else {
    dueDate.innerText = 'Set a due date';
    dueDate.style.fontStyle = 'italic';
  }

  const description = document.querySelector('#todo-details-description');
  if (todo.description) {
    description.innerText = todo.description;
    description.style.fontStyle = 'normal';
  } else {
    description.innerText = 'Add a description';
    description.style.fontStyle = 'italic';
  }

  const priority = document.querySelector('#todo-details-priority');
  priority.innerText = `Priority: ${todo.priority}`;

  // Display todo details div
  const detailsDiv = document.querySelector('#todo-details');
  const overlay = document.querySelector('#overlay');
  detailsDiv.style.display = 'block';
  overlay.style.display = 'block';
}

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
    todo.classList.add('todo-title');
    todo.innerText = `${project.todos[i].title}`;

    // Check if todo is already completed
    if (project.todos[i].completed === true) {
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

    // Add event listener to todo to expand info
    todo.addEventListener('click', () => {
      showTodoDetails(project.todos[i]);
    });

    // Create remove icon
    const removeBtn = document.createElement('img');
    removeBtn.setAttribute('src', 'images/icons/remove.svg');
    removeBtn.setAttribute('alt', 'remove icon');
    removeBtn.classList.add('todo-div-btns');
    todoDiv.appendChild(removeBtn);

    // Event listener to call removeTodo method on click.
    removeBtn.addEventListener('click', () => {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure you wish to delete this todo?')) {
        project.removeTodo(project.todos[i].title);
        saveUpdates('refresh');
      }
    });

    // Append todo to main.
    main.appendChild(todoDiv);
  }
}

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
    todoDiv.appendChild(check);

    // TODO: attach event listener to change todo.completed to
    // true and also add a class to change color or strikethrough.

    // Create <p> to hold todo title
    const todo = document.createElement('p');
    todo.innerText = `${project.todos[i].title}`;
    todoDiv.appendChild(todo);

    // TODO: Add event listener to todo title to open up
    // a todo display popup that shows duedate, description and allows editing.

    // Create remove icon
    const removeBtn = document.createElement('img');
    removeBtn.setAttribute('src', 'images/icons/remove.svg');
    removeBtn.setAttribute('alt', 'remove icon');
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
