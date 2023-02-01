import loadPage from '../DOM/page-load';
import loadHome from '../DOM/home';
import loadTodos from '../DOM/todos-page';
import loadProjects from '../DOM/projects-page';

function init() {
  loadPage();
  loadHome();
}

init();

// event listeners for sidebar
const inbox = document.querySelector('#nav-inbox');
const todos = document.querySelector('#nav-todos');
const projectBtn = document.querySelector('#nav-projectBtn');
inbox.addEventListener('click', loadHome);
todos.addEventListener('click', loadTodos);
projectBtn.addEventListener('click', loadProjects);
