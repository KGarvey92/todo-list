import loadPage from './page-load';
import loadHome from './home';
import loadProjects from './projects';

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
