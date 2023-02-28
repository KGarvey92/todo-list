/* eslint-disable import/no-cycle */
import format from 'date-fns/format';
import getProject from './Helpers';

class Todo {
  constructor(title, description, priority, dueDate = null, completionStatus = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate ? format(new Date(dueDate), 'MM/dd/yyyy') : null;
    this.priority = priority;
    if (completionStatus === true) {
      this.completed = true;
    } else {
      this.completed = false;
    }
  }
}

function submitnewTodo(e) {
  e.preventDefault();
  const form = document.querySelector('#todo-form');
  const title = document.querySelector('#title-input');
  const description = document.querySelector('#description-input');
  const dueDate = document.querySelector('#due-date-input');
  const priority = document.querySelector('#priority-select');

  // Create and save todo
  const todo = new Todo(title.value, description.value, priority.value, dueDate.value);
  const project = getProject();
  project.addTodo(todo);
  form.reset();

  const overlay = document.querySelector('#overlay');
  overlay.style.display = 'none';
  form.style.display = 'none';
}

function getTodo(title) {
  const project = getProject(title);
  let todo;
  for (let i = 0; i < project.todos.length; i += 1) {
    if (project.todos[i].title === title) {
      todo = project.todos[i];
      break;
    }
  }
  return todo;
}
export { Todo, submitnewTodo, getTodo };
