import format from 'date-fns/format';
import Todo from './Todo';

class Project {
  constructor(title, description = '') {
    this.title = title;
    this.description = description;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(todo) {
    for (let i = 0; i < this.todos.length; i += 1) {
      if (this.todos[i].title === todo) {
        this.todos.splice(i, 1);
        break;
      }
    }
  }

  editProject(targetProp, value) {
    this[targetProp] = value;
  }

  editTodo(todo, targetProp, value) {
    for (let i = 0; i < this.todos.length; i += 1) {
      if (this.todos[i].title === todo) {
        if (targetProp === 'dueDate') {
          this.todos[i][targetProp] = format(value, 'MM/dd/yyyy');
          this.saveUpdates();
        } else {
          this.todos[i][targetProp] = value;
          this.saveUpdates();
        }
      }
    }
  }
}

function loadProjects() {
  let projects = [];

  // Check if there is already a projects array in localStorage
  const storedProjects = localStorage.getItem('projects');

  // If so map the properties over to new Project class to allow access to Project methods
  if (storedProjects !== null) {
    projects = JSON.parse(storedProjects);
    projects = projects.map((project) => new Project(
      project.title,
      project.description,
      project.tasks,
    ));
  }

  // If there are no projects stored in local storage, initialize default 'none' project.
  if (projects.length === 0) {
    projects.push(new Project('Inbox', 'Tasks without an assigned project'));
  }
  // If there are no tasks, create default task
  if (projects[0].todos.length === 0) {
    const firstTask = new Todo('Create some todos', 'Fill out your inbox some more.', 'normal');
    projects[0].addTodo(firstTask);
  }

  return projects;
}

const projects = loadProjects();

function saveUpdates() {
  localStorage.setItem('projects', JSON.stringify(projects));
}

// Add new project to project array and store in JSON
function addProject(title, description) {
  projects.push(new Project(title, description));
  saveUpdates();
}

// Remove project from project array and update JSON
function removeProject(title) {
  for (let i = 0; i < projects.length; i += 1) {
    if (projects[i].title === title) {
      projects.splice(i, 1);
      saveUpdates();
      break;
    }
  }
}

export {
  Project, projects, addProject, removeProject, saveUpdates,
};
