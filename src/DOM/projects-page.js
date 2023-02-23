function displayProjects() {
  const main = document.querySelector('main');
  main.innerText = '';
  const heading = document.createElement('h1');
  heading.classList.add('content-headings');
  heading.innerText = 'Projects';
  main.appendChild(heading);
  const sample = document.createElement('div');
  sample.classList.add('projects');
  sample.innerText = 'Feature coming soon';
  main.appendChild(sample);

  return main;
}

export default displayProjects;
