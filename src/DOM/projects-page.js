/* eslint-disable import/no-cycle */
import { getProjectPrompt } from '../app/Helpers';
import { projects, removeProject, saveUpdates } from '../app/Project';
import { populateSidebar } from './page-load';

function createProjectList() {
  // loop through projects and create div for each
  const main = document.querySelector('main');
  projects.forEach((project) => {
    if (project.title !== 'Inbox') {
      const container = document.createElement('div');
      container.classList.add('project-container');
      const title = document.createElement('p');
      title.innerText = project.title;
      title.classList.add('project-title');
      container.appendChild(title);
      const description = document.createElement('p');
      description.classList.add('project-description');
      if (project.description) {
        description.innerText = project.description;
      } else {
        description.innerText = 'Add a description';
      }
      container.appendChild(description);
      const removeBtn = document.createElement('img');
      removeBtn.setAttribute('src', 'images/icons/remove.svg');
      removeBtn.setAttribute('alt', 'remove project icon');
      removeBtn.classList.add('remove-button');
      container.appendChild(removeBtn);
      main.appendChild(container);

      // add event listeners
      title.addEventListener('click', () => {
        const newTitle = getProjectPrompt();
        if (newTitle) {
          // eslint-disable-next-line no-param-reassign
          project.title = newTitle;
          saveUpdates('Projects');
          populateSidebar();
        }
      });

      description.addEventListener('click', () => {
        let newDescription = prompt('Provide a description. Max 120 characters.');
        while (newDescription.length > 120) {
          alert('Too many characters, try again.');
          newDescription = prompt('Provide a description. Max 120 characters.');
        }
        // eslint-disable-next-line no-param-reassign
        project.description = newDescription;
        saveUpdates('Projects');
      });

      removeBtn.addEventListener('click', () => {
        removeProject(project.title);
        saveUpdates('Projects');
        populateSidebar();
      });
    }
  });
}

function displayProjects() {
  const main = document.querySelector('main');
  main.innerText = '';
  const heading = document.createElement('h1');
  heading.classList.add('content-headings');
  heading.innerText = 'Projects';
  main.appendChild(heading);
  const note = document.createElement('p');
  note.innerText = 'Click on title or description to edit.';
  main.appendChild(note);
  createProjectList();

  return main;
}

export default displayProjects;
