// Main interactions for the portfolio.
// HTML keeps the structure/content.
// CSS keeps the visual style.
// This file only handles behavior.

document.addEventListener("DOMContentLoaded", () => {
	const tabButtons = Array.from(document.querySelectorAll(".tech-tab"));
	const tabPanels = Array.from(document.querySelectorAll(".project-panel"));

	const themeButton = document.getElementById("theme-toggle");
	const aboutPanel = document.getElementById("about-section");
	const contactPanel = document.getElementById("contact-section");
	const profileCard = document.getElementById("profile-card");
	const typingText = document.getElementById("typing-text");

	const openAboutButton = document.getElementById("nav-about");
	const openContactButton = document.getElementById("nav-contact");
	const openHeroContactButton = document.getElementById("hero-contact-btn");
	const closeAboutButton = document.getElementById("close-about");
	const closeContactButton = document.getElementById("close-contact");

	// Hamburger menu logic
	const hamburgerBtn = document.getElementById("hamburger-btn");
	const navMenu = document.getElementById("main-menu");

	if (hamburgerBtn && navMenu) {
		hamburgerBtn.addEventListener("click", () => {
			hamburgerBtn.classList.toggle("active");
			navMenu.classList.toggle("active");
			const expanded = hamburgerBtn.getAttribute("aria-expanded") === "true";
			hamburgerBtn.setAttribute("aria-expanded", !expanded);
		});

		// Fecha o menu ao clicar em um link ou botão do menu
		navMenu.querySelectorAll("a, button").forEach((item) => {
			item.addEventListener("click", () => {
				hamburgerBtn.classList.remove("active");
				navMenu.classList.remove("active");
				hamburgerBtn.setAttribute("aria-expanded", "false");
			});
		});

		// Botão de fechar (X)
		const closeMenuBtn = document.getElementById("close-menu-btn");
		if (closeMenuBtn) {
			closeMenuBtn.addEventListener("click", () => {
				hamburgerBtn.classList.remove("active");
				navMenu.classList.remove("active");
				hamburgerBtn.setAttribute("aria-expanded", "false");
			});
		}
	}

	let revealObserver = null;

	function setActiveTab(targetName) {
		tabButtons.forEach((button) => {
			const isActive = button.dataset.target === targetName;
			button.classList.toggle("is-active", isActive);
			button.setAttribute("aria-selected", String(isActive));
		});

		tabPanels.forEach((panel) => {
			const isActive = panel.dataset.panel === targetName;
			panel.hidden = !isActive;
			panel.classList.toggle("is-active", isActive);
		});

		refreshRevealAnimation();
		bindTiltOnCards();
	}

	function applyTheme(theme) {
		const isLight = theme === "light";
		document.body.classList.toggle("light-mode", isLight);

		if (!themeButton) return;

		themeButton.setAttribute("aria-pressed", String(isLight));
		themeButton.innerHTML = isLight
			? '<i class="fa-regular fa-sun"></i><span>Light</span>'
			: '<i class="fa-regular fa-moon"></i><span>Dark</span>';
	}

	function toggleTheme() {
		const nextTheme = document.body.classList.contains("light-mode") ? "dark" : "light";
		localStorage.setItem("theme", nextTheme);
		applyTheme(nextTheme);
	}

	function openPanel(panel) {
		if (!panel) return;
		panel.classList.add("is-open");
		panel.setAttribute("aria-hidden", "false");
		document.body.style.overflow = "hidden";
	}

	function closePanel(panel) {
		if (!panel) return;
		panel.classList.remove("is-open");
		panel.setAttribute("aria-hidden", "true");

		const anyPanelOpen =
			aboutPanel?.classList.contains("is-open") ||
			contactPanel?.classList.contains("is-open");

		if (!anyPanelOpen) {
			document.body.style.overflow = "";
		}
	}

	function closeAllPanels() {
		closePanel(aboutPanel);
		closePanel(contactPanel);
	}

	function runTypingTitle() {
		if (!typingText) return;

		const title = "Lucas Souza Front-End Developer";
		let currentIndex = 0;

		typingText.textContent = "";
		typingText.classList.add("typing");

		const timer = window.setInterval(() => {
			typingText.textContent += title[currentIndex];
			currentIndex += 1;

			if (currentIndex >= title.length) {
				window.clearInterval(timer);
				window.setTimeout(() => typingText.classList.remove("typing"), 500);
			}
		}, 65);
	}

	function refreshRevealAnimation() {
		if (revealObserver) {
			revealObserver.disconnect();
		}

		const visibleCards = document.querySelectorAll(
			".project-panel:not([hidden]) .reveal-on-scroll"
		);

		if (!visibleCards.length) return;

		if (!("IntersectionObserver" in window)) {
			visibleCards.forEach((card) => card.classList.add("is-visible"));
			return;
		}

		revealObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (!entry.isIntersecting) return;
					entry.target.classList.add("is-visible");
					revealObserver.unobserve(entry.target);
				});
			},
			{ threshold: 0.12 }
		);

		visibleCards.forEach((card) => revealObserver.observe(card));
	}

	function addTiltEffect(element, maxTilt = 3) {
		if (!element) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		if (element.dataset.tiltReady === "true") return;

		element.dataset.tiltReady = "true";

		const resetTransform = () => {
			element.style.transform = "";
		};

		element.addEventListener("mousemove", (event) => {
			const rect = element.getBoundingClientRect();
			const x = (event.clientX - rect.left) / rect.width;
			const y = (event.clientY - rect.top) / rect.height;
			const rotateY = (x - 0.5) * maxTilt * 2;
			const rotateX = (0.5 - y) * maxTilt * 2;

			element.style.transform =
				`perspective(900px) rotateX(${rotateX.toFixed(2)}deg) ` +
				`rotateY(${rotateY.toFixed(2)}deg) translateY(-2px)`;
		});

		element.addEventListener("mouseleave", resetTransform);
		element.addEventListener("blur", resetTransform, true);
	}

	function bindTiltOnCards() {
		document
			.querySelectorAll(".project-panel:not([hidden]) [data-tilt-card]")
			.forEach((card) => addTiltEffect(card, 3));

		addTiltEffect(profileCard, 4);
	}

	function blockPlaceholderLinks() {
		document.querySelectorAll('a[href="#"]').forEach((link) => {
			link.addEventListener("click", (event) => {
				event.preventDefault();
			});
		});
	}

	function setupEvents() {
		tabButtons.forEach((button) => {
			button.addEventListener("click", () => {
				setActiveTab(button.dataset.target || "html-css");
			});
		});

		themeButton?.addEventListener("click", toggleTheme);

		openAboutButton?.addEventListener("click", () => openPanel(aboutPanel));
		openContactButton?.addEventListener("click", () => openPanel(contactPanel));
		openHeroContactButton?.addEventListener("click", () => openPanel(contactPanel));

		closeAboutButton?.addEventListener("click", () => closePanel(aboutPanel));
		closeContactButton?.addEventListener("click", () => closePanel(contactPanel));

		document.querySelectorAll(".overlay-backdrop").forEach((backdrop) => {
			backdrop.addEventListener("click", () => {
				const panelName = backdrop.getAttribute("data-close");
				if (panelName === "about") closePanel(aboutPanel);
				if (panelName === "contact") closePanel(contactPanel);
			});
		});

		document.addEventListener("keydown", (event) => {
			if (event.key === "Escape") {
				closeAllPanels();
			}
		});
	}

	function init() {
		const savedTheme = localStorage.getItem("theme");
		applyTheme(savedTheme === "light" ? "light" : "dark");

		setupEvents();
		blockPlaceholderLinks();
		setActiveTab("html-css");
		runTypingTitle();
		refreshRevealAnimation();
		bindTiltOnCards();
	}

	init();
});
