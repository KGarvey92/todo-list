import { saveUpdates } from '../app/Project';
import Todo from '../app/Todo';

function addSubmitListener(e, project) {
  // prevent default behaviour of submit button
  e.preventDefault();
  // Capture input
  const title = document.querySelector('#title-input');
  const description = document.querySelector('#description-input');
  const dueDate = document.querySelector('#due-date-input');
  const priority = document.querySelector('#priority-select');
  console.log(title.value);
  console.log(description.value);
  console.log(dueDate.value);
  console.log(priority.value);

  // Create new todo using input
  // const todo = new Todo(title, description, dueDate, priority);
  // add todo to current project
  // project.addTodo(todo);
  // saveUpdates();
  // Reset form
  title.value = '';
  description.value = '';
  dueDate.value = '';
  priority.value = 'normal';
  console.log(title.value);
  console.log(description.value);
  console.log(dueDate.value);
  // close form and remove overlay after submit
  const overlay = document.querySelector('#overlay');
  const form = document.querySelector('#todo-form');
  overlay.style.display = 'none';
  form.style.display = 'none';
}

function prepSubmitBtn(project) {
  const submitButton = document.querySelector('#submit-btn');
  submitButton.removeEventListener('click', addSubmitListener);
  submitButton.addEventListener('click', (e) => addSubmitListener(e, project));
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
  description.innerText = `${project.description}`;
  main.appendChild(description);

  // Display first todo (later adapt to use a loop and display all todos)
  const todo1 = document.createElement('div');
  const title = document.createElement('p');
  title.innerText = `${project.todos[0].title}`;
  todo1.appendChild(title);
  main.appendChild(todo1);

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
