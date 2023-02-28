import loadPage from '../DOM/page-load';
import { loadProject } from '../DOM/project-load';
import { projects } from './Project';

function init() {
  const home = projects[0];
  loadPage();
  loadProject(home);
}

init();
