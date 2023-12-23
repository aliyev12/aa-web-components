import { html, styles } from "../utils/index.js";
import { aaCardStyles } from "./aa-card.styles.js";
import "../aa-button/aa-button.js";

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

      <div class="aa-card">
        <div class="image-container">
          <slot name="card-img"
            ><div
              class="card-img"
              style="background-image: url('/temp/card-img.jpeg')"
            ></div
          ></slot>
        </div>
        <div class="body-section">
          <h2>Card title</h2>
          <div class="body">
            <p>
              Lorem ipsum dolor sit amet consectetur. Nibh eget diam ut quis
              purus non egestas nulla proin.
            </p>
          </div>
        </div>
        <hr class="separator" />
        <div class="actions">
          <aa-button primary
            ><span slot="button-content">Sign up</span></aa-button
          >
        </div>
      </div>
    `;
  }
}

// Define your custom element using the Custom Elements API
customElements.define("aa-card", AACard);
