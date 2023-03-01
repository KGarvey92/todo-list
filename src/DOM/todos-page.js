// eslint-disable-next-line import/no-cycle
import { displayTodos } from './project-load';
import { projects } from '../app/Project';

function loadAllTodos() {
  // Page heading and description
  const main = document.querySelector('main');
  main.innerText = '';
  const heading = document.createElement('h1');
  heading.classList.add('content-headings');
  heading.innerText = 'Todos';
  main.appendChild(heading);
  const description = document.createElement('p');
  description.innerText = 'All of your todos listed by project.';
  main.appendChild(description);

  projects.forEach((project) => {
    // Create and append heading element
    const projectHeading = document.createElement('h2');
    projectHeading.classList.add('project-heading');
    projectHeading.innerText = project.title;
    main.appendChild(projectHeading);

    // display todos in project
    displayTodos(project);
  });

  return main;
}

export default loadAllTodos;
