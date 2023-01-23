function createHeader() {
  const header = document.createElement('header');
  const logo = document.createElement('img');
  logo.setAttribute('src', 'images/logo-colour.png');
  header.appendChild(logo);

  return header;
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
}

export default loadPage;
