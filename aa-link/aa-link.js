import { html, styles } from "../utils/index.js";
import { aaLinkStyles } from "./aa-link.styles.js";

class AALink extends HTMLElement {
  constructor() {
    super();

    // Attach a shadow DOM to the element
    this.attachShadow({ mode: "open" });

    // Define the initial content of the shadow DOM
    this.shadowRoot.innerHTML = html`
      <style>
        ${styles(aaLinkStyles)}
      </style>

      <a
        class="aa-link"
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
        >google</a
      >
    `;
  }
}

// Define your custom element using the Custom Elements API
customElements.define("aa-link", AALink);
