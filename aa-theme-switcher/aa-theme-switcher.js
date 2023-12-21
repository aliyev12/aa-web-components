import "../aa-button/aa-button.js";
import { html } from "../utils/index.js";

class AAThemeSwitcher extends HTMLElement {
  constructor() {
    super();
    this.currentTheme = "light"; // Default theme
  }

  connectedCallback() {
    this.render();

    // Get the aa-button element
    const aaButton = this.querySelector("aa-button");

    // Attach an event listener to the aa-button element
    aaButton.addEventListener("button-clicked", this.toggleTheme.bind(this));

    // Check and set initial theme on page load
    this.setInitialTheme();
  }

  setInitialTheme() {
    const body = document.body;

    // Check if user has explicitly chosen a theme in localStorage
    const userTheme = localStorage.getItem("theme");

    if (userTheme) {
      // If user has a stored theme preference, use it
      body.classList.add(`${userTheme}-theme`);
      this.currentTheme = userTheme;
    } else {
      // Otherwise, check system color scheme
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      if (prefersDark) {
        body.classList.add("dark-theme");
        this.currentTheme = "dark";
      } else {
        body.classList.add("light-theme");
        this.currentTheme = "light";
      }
    }
  }

  toggleTheme() {
    console.log("clicked..");
    // Toggle between 'light' and 'dark'
    this.currentTheme = this.currentTheme === "light" ? "dark" : "light";

    // Update the body class based on the current theme
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${this.currentTheme}-theme`);

    // Save user preference in localStorage
    localStorage.setItem("theme", this.currentTheme);
  }

  render() {
    this.innerHTML = html`
      <style>
        /* Add your component styles here if needed */
      </style>
      <aa-button>
        <span slot="button-content">Toggle Theme</span>
      </aa-button>
    `;
  }
}

customElements.define("aa-theme-switcher", AAThemeSwitcher);
