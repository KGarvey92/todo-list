import loadPage from '../DOM/page-load';
import loadHome from '../DOM/home';
import loadProjects from '../DOM/projects-page';

function init() {
  loadPage();
  loadHome();
}

init();

// event listeners for sidebar
const inbox = document.querySelector('#nav-inbox');
const projectBtn = document.querySelector('#nav-projects');
inbox.addEventListener('click', loadHome);
projectBtn.addEventListener('click', loadProjects);
