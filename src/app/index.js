import loadPage from '../DOM/page-load';
import loadTodos from '../DOM/todos-page';
import loadProject from '../DOM/project-load';
import loadProjects from '../DOM/projects-page';
import { projects } from './Project';

function init() {
  const home = projects[0];
  loadPage();
  loadProject(home);
}

init();

// event listeners for sidebar
const inbox = document.querySelector('#nav-inbox');
const todos = document.querySelector('#nav-todos');
const projectBtn = document.querySelector('#nav-projectBtn');
const home = projects[0];
inbox.addEventListener('click', () => loadProject(home));
todos.addEventListener('click', loadTodos);
projectBtn.addEventListener('click', loadProjects);
