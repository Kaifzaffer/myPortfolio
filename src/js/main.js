const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 600) {
    header.style.boxShadow = '0 1px 4px  hsl(218, 13%, 48%)';
  } else {
    header.style.boxShadow = 'none';
  }
});

const navIcon = document.querySelector('.mobile-menu');
const mainNav = document.querySelector('.main-nav');

navIcon.addEventListener('click', () => {
  mainNav.style.height = '100%';
  mainNav.classList.toggle('open');
  if (mainNav.classList.contains('open')) {
    navIcon.src = './src/images/close-icon.svg';
  } else {
    navIcon.src = './src/images/menu-icon.svg';
  }
});

mainNav.addEventListener('click', () => {
  mainNav.classList.remove('open');
  navIcon.src = './src/images/menu-icon.svg';
});

window.addEventListener('resize', () => {
  mainNav.classList.remove('open');
});

// Modal Script

const timelineDivider = './src/images/Counter.svg';
const cardsArea = document.querySelector('.cards-area');
const cardProp = [
  {
    title: 'NutriBar',
    timeline: [],
    picture: './src/images/tonic.webp',
    description:
      ' Developed an interactive web app using ReactJS, JavaScript, Material UI, Tailwind CSS, and the Open Food Facts API to retrieve nutriment information.',
    technology: ['html', 'css', 'javaScript'],
    liveURL: '',
    sourceURL: 'https://github.com/Kaifzaffer/NutriBar/tree/master',
  },
  {
    title: 'Weather App',
    timeline: [],
    picture: './src/images/multi-post.webp',
    description:
      'Developed a weather app using ReactJS, Material UI, and the OpenWeather API',
    technology: ['html', 'css', 'javaScript'],
    liveURL: 'https://preeminent-lolly-8fba6a.netlify.app/',
    sourceURL: 'https://github.com/Kaifzaffer/Weather_App',
  },
  {
    title: 'Google Search Clone',
    timeline: [],
    picture: './src/images/uber.webp',
    description:
      ' Developed a Google search clone using React and tailwind. Implemented features such as a search bar and dynamic content rendering',
    technology: ['html', 'css','javaScript'],
    liveURL: 'https://googleclone-zaffer.netlify.app/',
    sourceURL: 'https://github.com/Kaifzaffer/GoogleClone',
  },

 
];

for (let index = 0; index < cardProp.length; index += 1) {
  const section = document.createElement('section');
  section.classList.add('wrapper', 'card');
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  const img = document.createElement('img');
  img.src = cardProp[index].picture;
  img.alt = 'project image';
  img.setAttribute('width', 600);
  img.setAttribute('height', 400);

  imgContainer.appendChild(overlay);
  imgContainer.appendChild(img);

  const description = document.createElement('div');
  description.classList.add('description');
  const header = document.createElement('h2');
  header.classList.add('secondary-header');
  const headerText = document.createTextNode(cardProp[index].title);
  header.appendChild(headerText);
  description.appendChild(header);
  const timeline = document.createElement('ul');
  timeline.classList.add('counter');
  for (let count = 0; count < cardProp[index].timeline.length; count += 1) {
    const item = document.createElement('li');
    const paragraph = document.createElement('p');
    const text = document.createTextNode(cardProp[index].timeline[count]);
    paragraph.appendChild(text);
    item.appendChild(paragraph);
    timeline.appendChild(item);
    if (count === 0) {
      item.classList.add('active');
      const divide = document.createElement('li');
      const divider = document.createElement('img');
      divider.src = timelineDivider;
      divider.setAttribute('width', 5);
      divider.setAttribute('height', 5);
      divide.appendChild(divider);
      timeline.appendChild(divide);
    }
    if (count % 2 !== 0) {
      const divide = document.createElement('li');
      const divider = document.createElement('img');
      divider.src = timelineDivider;
      divider.setAttribute('width', 5);
      divider.setAttribute('height', 5);
      divide.appendChild(divider);
      timeline.appendChild(divide);
    }
  }
  description.appendChild(timeline);

  const details = document.createElement('p');
  details.classList.add('details');
  const detailsText = document.createTextNode(cardProp[index].description);
  details.appendChild(detailsText);
  description.appendChild(details);

  const tags = document.createElement('ul');
  tags.classList.add('tags');
  for (
    let counter = 0;
    counter < cardProp[index].technology.length;
    counter += 1
  ) {
    const item = document.createElement('li');
    const text = document.createTextNode(cardProp[index].technology[counter]);
    item.appendChild(text);
    item.classList.add('tag-item');
    tags.appendChild(item);
  }
  description.appendChild(tags);

  const button = document.createElement('button');
  button.classList.add('btn', 'show');
  button.setAttribute('type', 'button');
  button.setAttribute('data-index', index);
  const btnText = document.createTextNode('See Project');
  button.appendChild(btnText);
  description.appendChild(button);

  if (index % 2 === 0) {
    section.appendChild(imgContainer);
    section.appendChild(description);
  } else {
    section.appendChild(description);
    section.appendChild(imgContainer);
  }
  cardsArea.appendChild(section);
}

function printTags(technology) {
  const tags = document.createElement('ul');
  tags.classList.add('tags');

  for (let count = 0; count < technology.length; count += 1) {
    const item = document.createElement('li');
    const text = document.createTextNode(technology[count]);
    item.appendChild(text);
    item.classList.add('tag-item');
    tags.appendChild(item);
  }
  return tags;
}

function printTimeline(timeline) {
  const timeline2 = document.createElement('ul');
  timeline2.classList.add('timeline');
  for (let count = 0; count < timeline.length; count += 1) {
    const item = document.createElement('li');
    const paragraph = document.createElement('p');
    const text = document.createTextNode(timeline[count]);
    paragraph.appendChild(text);
    item.appendChild(paragraph);
    timeline2.appendChild(item);
    if (count === 0) {
      item.classList.add('active');
      const divide = document.createElement('li');
      const divider = document.createElement('img');
      divider.src = timelineDivider;
      divider.setAttribute('width', 5);
      divider.setAttribute('height', 5);
      divide.appendChild(divider);
      timeline2.appendChild(divide);
    }
    if (count % 2 !== 0) {
      const divide = document.createElement('li');
      const divider = document.createElement('img');
      divider.src = timelineDivider;
      divider.setAttribute('width', 5);
      divider.setAttribute('height', 5);
      divide.appendChild(divider);
      timeline2.appendChild(divide);
    }
  }

  return timeline2;
}

const modalButton = document.querySelectorAll('.show');
const modal = document.querySelector('.modal-container');
const closeModal = document.getElementById('close-modal');
for (let index = 0; index < modalButton.length; index += 1) {
  modalButton[index].setAttribute('data-index', index);
  modalButton[index].addEventListener('click', (e) => {
    const pos = e.target.getAttribute('data-index');
    modal.querySelector('.modal-title').innerHTML = cardProp[pos].title;
    modal.querySelector('.timeline-box').removeChild(modal.querySelector('.timeline'));
    modal.querySelector('.timeline-box').appendChild(printTimeline(cardProp[pos].timeline));
    modal.querySelector('.img-container img').src = cardProp[pos].picture;
    modal.querySelector('.modal-desc').innerHTML = cardProp[pos].description;
    modal.querySelector('.tech-box').removeChild(modal.querySelector('.tags'));
    modal.querySelector('.tech-box').appendChild(printTags(cardProp[pos].technology));
    modal.querySelector('.live').href = cardProp[pos].liveURL;
    modal.querySelector('.source').href = cardProp[pos].sourceURL;
    modal.style.display = 'block';
  });
}

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Form validation scripts
const emailInput = document.querySelector('input[type="email"]');
const error = document.querySelector('.error');
emailInput.addEventListener('focus', () => {
  error.style.display = 'none';
});

function validateForm() {
  const email = emailInput.value;
  const regex = /^[a-z0-9]+@[a-z0-9-]+\.[a-z0-9-.]+$/;

  if (!regex.test(email)) {
    error.style.display = 'block';
    error.innerHTML = 'The email should only contain lowercase letters';
    return false;
  }
  return true;
}

const form = document.querySelector('.contact-form');
form.addEventListener('submit', validateForm);

/* Web storage scripts */

const userName = document.querySelector('.user-name');
const messageInput = document.querySelector('textarea');

form.addEventListener('submit', () => {
  const formData = {
    name: userName.value,
    email: emailInput.value,
    messageInput: messageInput.value,
  };
  localStorage.setItem('contactFormInput', JSON.stringify(formData));
});

let savedFormData = localStorage.getItem('contactFormInput');
savedFormData = JSON.parse(savedFormData);

if (savedFormData != null) {
  userName.value = savedFormData.name;
  emailInput.value = savedFormData.email;
  messageInput.value = savedFormData.messageInput;
}