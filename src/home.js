function loadHome() {
  const main = document.querySelector('main');
  main.innerText = '';
  const heading = document.createElement('h1');
  heading.classList.add('content-headings');
  heading.innerText = 'Inbox';
  main.appendChild(heading);
  const sample = document.createElement('div');
  sample.classList.add('tasks');
  sample.innerText = 'Example task here';
  main.appendChild(sample);

  return main;
}

export default loadHome;
