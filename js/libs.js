// Carrega CSS da biblioteca AOS
const linkAOS = document.createElement("link");
linkAOS.rel = "stylesheet";
linkAOS.href = "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css";
document.head.appendChild(linkAOS);

// Carrega JS da biblioteca AOS
const scriptAOS = document.createElement("script");
scriptAOS.src = "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js";
scriptAOS.onload = () => {
  AOS.init({
    duration: 1000,
    once: true,
  });
};
document.head.appendChild(scriptAOS);


