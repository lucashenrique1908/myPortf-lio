// Botões de tecnologias
const htmlBtn = document.getElementById("html-btn");
const jsBtn = document.getElementById("JavaScript-btn");
const reactBtn = document.getElementById("react-btn");
const contactBtn = document.getElementById("nav-contact");
const tasksBtn = document.getElementById("tasks-btn");

const navAbout = document.getElementById("nav-about");
const aboutSection = document.getElementById("about-section");
const closeAbout = document.getElementById("close-about");
const contactContainer = document.getElementById("contact");

// Containers
const htmlProjects = document.querySelector(".projects-html-css-container");
const jsProjects = document.querySelector(".project-js-container");
const reactContainer = document.querySelector(".react-container");
const taskContainer = document.querySelector(".tasks-excercise-container");

document.addEventListener("DOMContentLoaded", () => {
  const text = "Lucas Souza — Front-End Developer"; // texto que aparecerá
  const h1 = document.getElementById("typing-text");
  h1.classList.add("typing"); // cursor piscando
  let index = 0;

  setTimeout(() => {
    const interval = setInterval(() => {
      h1.textContent += text[index];
      index++;
      if (index === text.length) {
        clearInterval(interval);
        h1.classList.remove("typing"); // remove o cursor após terminar
      }
    }, 100);
  }, 1000); 
});

// About me
navAbout.addEventListener("click", () => {
  // abre a section
  aboutSection.classList.remove("hide");

  // espera um frame pra garantir que ela esteja visível
  requestAnimationFrame(() => {
    aboutSection.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
});
contactBtn.addEventListener("click", () => {
  // espera um frame pra garantir que ela esteja visível
  requestAnimationFrame(() => {
    contactContainer.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
});
// Fechar seção About Me ao clicar no botão "X"
closeAbout.addEventListener("click", () => {
  aboutSection.classList.add("hide");
});

// Fechar seção About Me ao clicar fora do card
aboutSection.addEventListener("click", (e) => {
  // se o clique NÃO for dentro do card
  if (!e.target.closest(".card")) {
    aboutSection.classList.add("hide");
  }
});

// HTML
htmlBtn.addEventListener("click", () => {
  htmlProjects.classList.remove("hide");
  jsProjects.classList.add("hide");
  reactContainer.classList.add("hide");
  taskContainer.classList.add("hide");
});

// JavaScript
jsBtn.addEventListener("click", () => {
  jsProjects.classList.remove("hide");
  htmlProjects.classList.add("hide");
  reactContainer.classList.add("hide");
  taskContainer.classList.add("hide");
});

// React
reactBtn.addEventListener("click", () => {
  reactContainer.classList.remove("hide");
  jsProjects.classList.add("hide");
  htmlProjects.classList.add("hide");
  taskContainer.classList.add("hide");
});
//task area
tasksBtn.addEventListener("click", () => {
  taskContainer.classList.remove("hide");
  jsProjects.classList.add("hide");
  htmlProjects.classList.add("hide");
  reactContainer.classList.add("hide");
});

// Botão de fechar página vazia
document.getElementById("exit-container").addEventListener("click", () => {
  reactContainer.classList.add("hide");
});
