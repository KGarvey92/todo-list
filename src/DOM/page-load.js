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
  // Inbox and Project buttons.
  const navBtns = document.createElement('ul');
  navBtns.classList.add('nav-btns');
  const inbox = document.createElement('li');
  inbox.setAttribute('id', 'nav-inbox');
  inbox.innerText = 'Inbox';
  navBtns.appendChild(inbox);
  const projectBtn = document.createElement('li');
  projectBtn.setAttribute('id', 'nav-projects');
  projectBtn.innerText = 'Projects';
  navBtns.appendChild(projectBtn);
  nav.appendChild(navBtns);
  // List of different projects
  const projectList = document.createElement('ul');
  projectList.classList.add('nav-projects');
  // **for each project in list of projects add li, match innerText to title and append**
  const addProject = document.createElement('li');
  addProject.innerText = '+';
  projectList.appendChild(addProject);
  nav.appendChild(projectList);

  return nav;
}

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
  toggleSidebar();
}

export default loadPage;
