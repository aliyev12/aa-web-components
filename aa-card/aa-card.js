import { html, styles } from "../utils/index.js";
import { aaCardStyles } from "./aa-card.styles.js";

class AACard extends HTMLElement {
  constructor() {
    super();

    // Attach a shadow DOM to the element
    this.attachShadow({ mode: "open" });

    // Define the initial content of the shadow DOM
    this.shadowRoot.innerHTML = html`
      <style>
        ${styles(aaCardStyles)}
      </style>

      <div>card</div>
      >
    `;
  }
}

// Define your custom element using the Custom Elements API
customElements.define("aa-card", AACard);
