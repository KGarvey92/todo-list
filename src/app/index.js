import loadPage from '../DOM/page-load';
import displayTodos from '../DOM/todos-page';
import loadProject from '../DOM/project-load';
import displayProjects from '../DOM/projects-page';
import { loadProjects } from './Project';

function init() {
  const projects = loadProjects();
  const home = projects[0];
  loadPage();
  loadProject(home);
  // event listeners for sidebar
  const inbox = document.querySelector('#nav-inbox');
  const todos = document.querySelector('#nav-todos');
  const projectBtn = document.querySelector('#nav-projectBtn');
  inbox.addEventListener('click', () => loadProject(home));
  todos.addEventListener('click', displayTodos);
  projectBtn.addEventListener('click', displayProjects);
}

init();
