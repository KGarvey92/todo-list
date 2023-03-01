/* eslint-disable import/no-cycle */
import { projects } from './Project';

function getProject(todoName = null) {
  // Find project title on page
  let projectTitle = document.querySelector('.content-headings').textContent;
  // If accessed from all todos page search by todo name instead
  if (projectTitle === 'Todos') {
    projects.forEach((project) => {
      project.todos.forEach((todo) => {
        if (todoName === todo.title) {
          projectTitle = project.title;
        }
      });
    });
  }

  // Find project with said title in array
  for (let i = 0; i < projects.length; i += 1) {
    if (projects[i].title === projectTitle) {
      return projects[i];
    }
  }
  return null; // return null if no project with the given title was found
}

function getProjectPrompt() {
  let input = prompt('Enter new project name. Max 20 characters.');
  while (input.length > 20) {
    alert('Max length exceeded');
    input = prompt('Enter new project name. Max 20 characters.');
  }
  return input;
}
export { getProjectPrompt, getProject };
