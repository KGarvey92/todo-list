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
  const nav = document.createElement('nav');
  nav.classList.add('show-nav');
  const navContent = document.createElement('div');
  navContent.classList.add('nav-content');
  const inbox = document.createElement('div');
  inbox.innerText = 'Inbox';
  navContent.appendChild(inbox);
  const projectBtn = document.createElement('div');
  projectBtn.innerText = 'Projects';
  navContent.appendChild(projectBtn);
  nav.appendChild(navContent);

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
  footer.innerText = 'Kieran Garvey - Odin Project 2023';

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
