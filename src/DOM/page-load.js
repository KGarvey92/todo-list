import displayTodos from './todos-page';
import loadProject from './project-load';
import displayProjects from './projects-page';
import { Project, projects, saveUpdates } from '../app/Project';
import { submitnewTodo } from '../app/Todo';

function createHeader() {
  const header = document.createElement('header');
  const logo = document.createElement('img');
  logo.setAttribute('src', 'images/logo-transparent.png');
  logo.setAttribute('alt', 'To-do, Will-do logo');
  logo.setAttribute('class', 'logo');
  header.appendChild(logo);

  const menu = document.createElement('img');
  menu.setAttribute('src', 'images/menu.svg');
  menu.setAttribute('alt', 'open or close navigation sidebar');
  menu.setAttribute('class', 'hamburger');
  header.appendChild(menu);

  return header;
}

function createSidebar() {
  // create nav that slides out when menu button clicked.
  const nav = document.createElement('nav');
  nav.classList.add('show-nav');
  // Inbox, Todos and Project buttons.
  const navBtns = document.createElement('ul');
  navBtns.classList.add('nav-btns');
  const inbox = document.createElement('li');
  inbox.setAttribute('id', 'nav-inbox');
  inbox.innerText = 'Inbox';
  navBtns.appendChild(inbox);
  const todosBtn = document.createElement('li');
  todosBtn.setAttribute('id', 'nav-todos');
  todosBtn.innerText = 'All Todos';
  navBtns.appendChild(todosBtn);
  const projectBtn = document.createElement('li');
  projectBtn.setAttribute('id', 'nav-projectBtn');
  projectBtn.innerText = 'Projects';
  navBtns.appendChild(projectBtn);
  nav.appendChild(navBtns);

  // Event listeners for nav buttons
  inbox.addEventListener('click', () => {
    loadProject(projects[0]);
  });
  todosBtn.addEventListener('click', displayTodos);
  projectBtn.addEventListener('click', displayProjects);

  return nav;
}

function populateSidebar() {
  const nav = document.querySelector('nav');
  const projectList = document.createElement('ul');
  projectList.classList.add('nav-projects');

  // Add new projects via + button
  const addProject = document.createElement('li');
  addProject.innerText = '+';
  addProject.addEventListener('click', () => {
    const input = prompt('Give your new project a name.');
    if (input !== null) {
      const newProject = new Project(input);
      projects.push(newProject);
      saveUpdates();
      const newProjectBtn = document.createElement('li');
      newProjectBtn.classList.add('nav-projects');
      newProjectBtn.innerText = `${input}`;
      newProjectBtn.addEventListener('click', () => {
        loadProject(newProject);
      });
      projectList.insertBefore(newProjectBtn, addProject);
      loadProject(newProject);
    }
  });
  projectList.appendChild(addProject);

  // List each project already in projects array
  projects.forEach((project, index) => {
    if (index === 0) {
      return;
    }
    const projectBtn = document.createElement('li');
    projectBtn.classList.add('nav-projects');
    projectBtn.innerText = project.title;
    projectBtn.addEventListener('click', () => {
      loadProject(project);
    });
    projectList.insertBefore(projectBtn, addProject);
  });

  // append all projects and + btn to sidebar
  nav.appendChild(projectList);
}

// ** Later replace prompt with popup form to create project **
// function createProjectForm() {

// }

function toggleSidebar() {
  const hamburger = document.querySelector('.hamburger');
  hamburger.addEventListener('click', () => {
    const nav = document.querySelector('nav');
    if (nav.style.display === 'none') {
      nav.style.display = 'block';
    } else {
      nav.style.display = 'none';
    }
    nav.classList.toggle('show-nav');
  });
}

function createFooter() {
  const footer = document.createElement('footer');
  const text = document.createElement('div');
  text.classList.add('footer-text');
  text.innerText = 'Kieran Garvey - Odin Project 2023';
  footer.appendChild(text);
  const github = document.createElement('img');
  github.setAttribute('src', 'images/icons/github.svg');
  github.setAttribute('alt', 'Link to github');
  github.setAttribute('title', 'Go to my Github page');
  github.addEventListener('click', () => {
    window.location.href = 'https://github.com/KGarvey92';
  });
  footer.appendChild(github);

  return footer;
}

function createTodoForm() {
  const body = document.querySelector('body');

  // Create overlay
  const overlay = document.createElement('div');
  overlay.setAttribute('id', 'overlay');
  body.appendChild(overlay);

  // Create form
  const form = document.createElement('form');
  form.setAttribute('id', 'todo-form');

  // Create div for form elements
  const formInputs = document.createElement('div');
  formInputs.setAttribute('id', 'form-inputs');

  // Create title input with label
  const titleLabel = document.createElement('label');
  titleLabel.setAttribute('for', 'title-input');
  titleLabel.textContent = 'Todo:';
  formInputs.appendChild(titleLabel);

  const titleInput = document.createElement('input');
  titleInput.setAttribute('id', 'title-input');
  titleInput.setAttribute('type', 'text');
  formInputs.appendChild(titleInput);

  // Create due date input and label
  const dueDateLabel = document.createElement('label');
  dueDateLabel.setAttribute('for', 'due-date-input');
  dueDateLabel.textContent = 'Due Date:';
  formInputs.appendChild(dueDateLabel);

  const dueDateInput = document.createElement('input');
  dueDateInput.setAttribute('id', 'due-date-input');
  dueDateInput.setAttribute('type', 'date');
  formInputs.appendChild(dueDateInput);

  // Create description input and label
  const descriptionLabel = document.createElement('label');
  descriptionLabel.setAttribute('for', 'description-input');
  descriptionLabel.textContent = 'Description:';
  formInputs.appendChild(descriptionLabel);

  const descriptionInput = document.createElement('textarea');
  descriptionInput.setAttribute('id', 'description-input');
  descriptionInput.setAttribute('rows', '3');
  formInputs.appendChild(descriptionInput);

  // Create priority input and label
  const priorityLabel = document.createElement('label');
  priorityLabel.setAttribute('for', 'priority-select');
  priorityLabel.textContent = 'Priority:';
  formInputs.appendChild(priorityLabel);

  const prioritySelect = document.createElement('select');
  prioritySelect.setAttribute('id', 'priority-select');

  const highOption = document.createElement('option');
  highOption.setAttribute('value', 'high');
  highOption.textContent = 'High';
  prioritySelect.appendChild(highOption);

  const normalOption = document.createElement('option');
  normalOption.setAttribute('value', 'normal');
  normalOption.setAttribute('selected', '');
  normalOption.textContent = 'Normal';
  prioritySelect.appendChild(normalOption);

  const lowOption = document.createElement('option');
  lowOption.setAttribute('value', 'low');
  lowOption.textContent = 'Low';
  prioritySelect.appendChild(lowOption);

  formInputs.appendChild(prioritySelect);

  // Append formInputs to form
  form.appendChild(formInputs);

  // Create submit button
  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('id', 'submit-btn');
  submitButton.textContent = 'Submit';
  form.appendChild(submitButton);

  // Attach event listener to form
  submitButton.addEventListener('click', (e) => {
    submitnewTodo(e);
    saveUpdates('refresh');
  });
  // Append form to body
  body.appendChild(form);

  // Attach event listener to overlay to close form
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.style.display = 'none';
      form.style.display = 'none';
      // adapt to also work with todo-details popup
      const todoDetails = document.querySelector('#todo-details');
      todoDetails.style.display = 'none';
    }
  });
}

function createTodoDetails() {
  // Select body element and create container
  const body = document.querySelector('body');
  const container = document.createElement('div');
  container.setAttribute('id', 'todo-details');

  // Create elements and leave blank for now.
  const title = document.createElement('strong');
  title.setAttribute('id', 'todo-details-title');
  container.appendChild(title);

  const dueDate = document.createElement('p');
  dueDate.setAttribute('id', 'todo-details-due-date');
  container.appendChild(title);

  const description = document.createElement('p');
  description.setAttribute('id', 'todo-details-description');
  container.appendChild(description);

  const priority = document.createElement('p');
  priority.setAttribute('id', 'todo-details-priority');
  container.appendChild(priority);

  // Create a save button
  const saveBtn = document.createElement('button');
  saveBtn.setAttribute('id', 'todo-details-save-btn');
  saveBtn.innerText = 'Save';
  container.appendChild(saveBtn);

  // Add the container to the body element
  body.appendChild(container);
}

function loadPage() {
  const container = document.querySelector('#content');
  const header = createHeader();
  const main = document.createElement('main');
  const footer = createFooter();
  container.appendChild(header);
  container.appendChild(main);
  container.appendChild(footer);
  const sidebar = createSidebar();
  container.appendChild(sidebar);
  populateSidebar();
  toggleSidebar();
  createTodoForm();
  createTodoDetails();
}

export default loadPage;
