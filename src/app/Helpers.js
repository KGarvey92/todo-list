/* eslint-disable import/no-cycle */
import { projects } from './Project';

function getProject() {
  // Find project title on page
  const projectTitle = document.querySelector('.content-headings').textContent;

  // Find project with said title in array
  for (let i = 0; i < projects.length; i += 1) {
    if (projects[i].title === projectTitle) {
      return projects[i];
    }
  }
  return null; // return null if no project with the given title was found
}

export default getProject;
