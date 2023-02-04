import format from 'date-fns';

class Project {
  constructor(title, description = '') {
    this.title = title;
    this.description = description;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
    this.saveUpdates();
  }

  removeTodo(todo) {
    for (let i = 0; i < this.todos.length; i += 1) {
      if (this.todos[i].title === todo) {
        this.todos.splice(i, 1);
        this.saveUpdates();
        break;
      }
    }
  }

  editProject(targetProp, value) {
    this[targetProp] = value;
    this.saveUpdates();
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

  saveUpdates() {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    for (let i = 0; i < projects.length; i += 1) {
      if (projects[i].title === this.title) {
        projects[i] = this;
        break;
      }
    }
    localStorage.setItem('projects', JSON.stringify(projects));
  }
}

// Check if the projects array is stored in local storage
const projects = JSON.parse(localStorage.getItem('projects')) || [];

// Function to add projects to array
function addProject(title, description) {
  projects.push(new Project(title, description));
  localStorage.setItem('projects', JSON.stringify(projects));
}

// Function to delete a project
function removeProject(project) {
  for (let i = 0; i < projects.length; i += 1) {
    if (projects[i].title === project) {
      projects.splice(i, 1);
      localStorage.setItem('projects', JSON.stringify(projects));
      break;
    }
  }
}

// If there are no projects stored in local storage, initialize default 'none' project.
if (projects.length === 0) {
  addProject('none', 'Tasks without an assigned project');
}

export {
  Project, projects, addProject, removeProject,
};
