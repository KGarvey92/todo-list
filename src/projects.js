function loadProjects() {
  const main = document.querySelector('main');
  main.innerText = '';
  const heading = document.createElement('h1');
  heading.classList.add('content-headings');
  heading.innerText = 'Projects';
  main.appendChild(heading);
  const sample = document.createElement('div');
  sample.classList.add('projects');
  sample.innerText = 'Example project here';
  main.appendChild(sample);

  return main;
}

export default loadProjects;
