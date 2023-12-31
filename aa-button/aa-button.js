import { html, styles } from "../utils/index.js";
import { aaButtonStyles } from "./aa-button.styles.js";
import { moonPrimary, moonSecondary, moonGray } from "./button-svgs.js";

class AAButton extends HTMLElement {
  constructor() {
    super();

    const isPrimary = this.getAttribute("primary") !== null;
    const isSecondary = this.getAttribute("secondary") !== null;
    const isDisabled = this.getAttribute("disabled") !== null;

    // Attach a shadow DOM to the element
    this.attachShadow({ mode: "open" });

    let type = "primary";
    let moon = moonPrimary;

    if (isSecondary) {
      type = "secondary";
      moon = moonSecondary;
    } else if (isDisabled) {
      moon = moonGray;
      type = "disabled";
    }

    // Define the initial content of the shadow DOM
    this.shadowRoot.innerHTML = html`
      <style>
        ${styles(aaButtonStyles)}
      </style>

      <button class="aa-button ${type}">
        ${moon}
        <slot name="button-content"><span class="btn-text">Submit</span></slot>
      </button>
    `;

    this.shadowRoot
      .querySelector("button")
      .addEventListener("click", this.handleButtonClick.bind(this));
  }

  handleButtonClick() {
    const id = this.getAttribute("id");
    // Dispatch a custom event when the button is clicked
    this.dispatchEvent(
      new CustomEvent("button-clicked", { bubbles: true, detail: id })
    );
  }
}

// Define your custom element using the Custom Elements API
customElements.define("aa-button", AAButton);
