import { saveUpdates } from '../app/Project';
import Todo from '../app/Todo';

function submitData(e, project) {
  e.preventDefault();
  const title = document.querySelector('#title-input');
  const description = document.querySelector('#description-input');
  const dueDate = document.querySelector('#due-date-input');
  const priority = document.querySelector('#priority-select');

  const todo = new Todo(title.value, description.value, priority.value, dueDate.value);
  project.addTodo(todo);
  saveUpdates();

  title.value = '';
  description.value = '';
  dueDate.value = '';
  priority.value = 'normal';

  const overlay = document.querySelector('#overlay');
  const form = document.querySelector('#todo-form');
  overlay.style.display = 'none';
  form.style.display = 'none';
}

function prepSubmitBtn(project) {
  const submitButton = document.querySelector('#submit-btn');

  const clickHandler = (e) => {
    submitData(e, project);
    submitButton.removeEventListener('click', clickHandler);
  };

  submitButton.addEventListener('click', clickHandler);
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
  main.appendChild(addTodoBtn);

  // Event listener for add todo button
  addTodoBtn.addEventListener('click', () => {
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'block';
    const form = document.querySelector('#todo-form');
    form.style.display = 'block';
  });

  // Add functionality to submit button
  prepSubmitBtn(project);
}

export default loadProject;
