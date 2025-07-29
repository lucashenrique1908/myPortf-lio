//inicializações

const btn = document.querySelector('.menu-btn');
const icon = btn.querySelector('i');
const menu = document.querySelector('.menu');
const aboutMeLink = document.querySelector('#aboutMeLink');
const aboutMeSection = document.querySelector('#aboutMeSection');
const projectBtn = document.querySelector('#projectsLink');
const projectContainer = document.querySelector('#projectSection');
const closeBtn = document.getElementById('closeBtn');
const contactBtn = document.querySelector("#contactLink");
const resumeContain = document.querySelector(".resume");
const resumeBtn = document.querySelector("#resumeLink");
const profile = document.querySelector("#profile");
const titleWelcome = document.querySelector(".title");

let menuAberto = false;

// Função pra abrir o menu lateral
function openMenu() {
  menuAberto = !menuAberto;

  icon.classList.toggle('bi-list');
  icon.classList.toggle('bi-x-lg');

  if (menuAberto) {
    menu.classList.add('show');
    menu.scrollIntoView({ behavior: 'smooth', block: 'start' });
  } else {
    menu.classList.remove('show');
  }
}

// Função pra área de projetos
function projectsArea () {
  projectContainer.classList.add('showProject');
  projectContainer.scrollIntoView({ behavior: 'smooth' });

  aboutMeSection.classList.remove('ShowDescription');
  resumeContain.classList.add('hide');
  menu.classList.remove('show');

  icon.classList.add('bi-list');
  icon.classList.remove('bi-x-lg');

  closeBtn.style.display = 'block';
  btn.disabled = true;
  btn.style.opacity = '0.5';
  btn.style.cursor = 'not-allowed';
  profile.style.opacity = '0.4';
  profile.classList.add('rise');
  titleWelcome.classList.add('rise');
}

// função para a área about me
function aboutMeResume () {
  aboutMeSection.classList.add('ShowDescription');
  projectContainer.classList.remove('showProject');
  resumeContain.classList.add('hide');
  menu.classList.remove('show');

  icon.classList.add('bi-list');
  icon.classList.remove('bi-x-lg');

  closeBtn.style.display = 'block'; 
  btn.disabled = true; 
  btn.style.opacity = '0.5';
  btn.style.cursor = 'not-allowed';
  profile.style.opacity = '0.4'; 
  profile.classList.add('rise');
  titleWelcome.classList.add('rise');
}

// função para mostrar o currículo
function aboutMeDescription() {
  resumeContain.classList.remove("hide"); 

  aboutMeSection.classList.remove('ShowDescription');
  projectContainer.classList.remove('showProject');
  menu.classList.remove("show");

  icon.classList.add("bi-list");
  icon.classList.remove("bi-x-lg");

  closeBtn.style.display = 'block';
  btn.disabled = true; 
  btn.style.opacity = '0.5';
  btn.style.cursor = 'not-allowed';

  profile.style.opacity = '0.4';
  profile.classList.add('rise');
  titleWelcome.classList.add('rise');
}

// função de fechar qualquer seção ativa
function closeEvent () {
  aboutMeSection.classList.remove('ShowDescription');
  projectContainer.classList.remove('showProject');
  resumeContain.classList.add('hide');
  closeBtn.style.display = 'none';

  
  menuAberto = false;
  menu.classList.remove('show');
  icon.classList.remove('bi-x-lg');
  icon.classList.add('bi-list');

  btn.disabled = false;
  btn.style.opacity = '1';
  btn.style.cursor = 'pointer';

  profile.style.opacity = '1';
  profile.classList.remove('rise');
  titleWelcome.classList.remove('rise');
}

// EVENTOS
btn.addEventListener('click', (e) => {
  e.preventDefault();
  openMenu();
});

projectBtn.addEventListener("click", (e) => {
  e.preventDefault();
  projectsArea();
});

aboutMeLink.addEventListener("click", (e) => {
  e.preventDefault();
  aboutMeResume();
});

closeBtn.addEventListener('click', () => {
  closeEvent();
});

resumeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  aboutMeDescription();
});
